import fs from "node:fs/promises"

import restify from "restify"
import got from "got"
import { ALLOWED_ORIGINS, GITHUB_INFO_URI, GITHUB_OAUTH_TOKEN_URL, GOOGLE_INFO_URI, GOOGLE_OAUTH_TOKEN_URL, NAVER_INFO_URI, NAVER_OAUTH_TOKEN_URL, KAKAO_OAUTH_TOKEN_URL, KAKAO_INFO_URI } from "./constant.js"
import { GITHUB_CLIENT_ID, GITHUB_SECRET_KEY, GOOGLE_CLIENT_ID, GOOGLE_SECRET_KEY, KAKAO_CLIENT_ID, KAKAO_SECRET_KEY, NAVER_CLIENT_ID, NAVER_SECRET_KEY } from "./config.js"
import corsMiddleware from "restify-cors-middleware2"
import { GoogleProfile } from "./GoogleProfile.js"
import { GithubProfile } from "./GithubProfile.js"
import { NaverProfile } from "./NaverProfile.js"
import { KakaoProfile } from "./KakaoProfile.js"

const BadRequest = {
  "error": "Bad Request",
}
const cors = corsMiddleware({
  origins: ALLOWED_ORIGINS,
  allowHeaders: ["*"],
  exposeHeaders: ["*"],
})

const server = restify.createServer()
server.use(restify.plugins.jsonBodyParser())
server.pre(cors.preflight)
server.use(cors.actual)

server.post("/api/auth/login", async (req, res) => {
  const respHeader = {
    "Content-Type": "application/json",
  }
  const platform = req.body.platform as string ?? ""
  const code = req.body.code as string ?? ""
  if (platform.length <= 0 || code.length <= 0 || code.length >= 400) {
    res.send(400, BadRequest, respHeader)
    return
  }
  const user = {
    nickname: "",
    email: "",
    profileURL: "",
  }
  switch (platform) {
    // 구글
    case "google": {
      const resp = await got(GOOGLE_OAUTH_TOKEN_URL, {
        method: "POST",
        form: {
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_SECRET_KEY,
          code,
          grant_type: "authorization_code",
          redirect_uri: `${req.headers.referer}login?platform=google`,
        },
        throwHttpErrors: false,
      })
      const data = JSON.parse(resp.body)
      // http://localhost:5173/login?platform=google
      if (resp.statusCode !== 200 || data["error"] != null) {
        res.send(400, BadRequest, respHeader)
        return
      }
      const accessToken = data["access_token"] ?? ""
      if (accessToken.length <= 0) {
        res.send(400, BadRequest, respHeader)
        return
      }
      // 토큰으로 유저 정보 가져오기
      const userInfo: GoogleProfile = await got(GOOGLE_INFO_URI, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        throwHttpErrors: false,
      }).json()
      if (userInfo.email == null) {
        res.send(503, {
          error: "Google API Serve error!",
        }, respHeader)
        return
      }
      // 유저 정보 반환
      user.email = userInfo.email ?? ""
      user.nickname = userInfo.name ?? ""
      user.profileURL = userInfo.picture ?? ""
    } break
    // 깃허브
    case "github": {
      const resp = await got(GITHUB_OAUTH_TOKEN_URL, {
        method: "POST",
        form: {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_SECRET_KEY,
          code: code,
          redirect_uri: `${req.headers.referer}login?platform=github`,
        },
        headers: {
          Accept: "application/json",
        }
      })
      const data = JSON.parse(resp.body)
      // http://localhost:5173/login?platform=google
      if (resp.statusCode !== 200 || data["error"] != null) {
        res.send(400, BadRequest, respHeader)
        return
      }
      const accessToken = data["access_token"] ?? ""
      if (accessToken.length <= 0) {
        res.send(400, BadRequest, respHeader)
        return
      }
      // 토큰으로 유저 정보 가져오기
      const userInfo: GithubProfile = await got(GITHUB_INFO_URI, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        throwHttpErrors: false,
      }).json()

      if (userInfo.email == null) {
        res.send(503, {
          error: "Github API Serve error!",
        }, respHeader)
        return
      }
      // 유저 정보 반환
      user.email = userInfo.email ?? ""
      user.nickname = userInfo.name ?? ""
      user.profileURL = userInfo.avatar_url ?? ""
    } break
    case "naver": {
      const resp = await got(NAVER_OAUTH_TOKEN_URL, {
        method: "POST",
        form: {
          grant_type: "authorization_code",
          client_id: NAVER_CLIENT_ID,
          client_secret: NAVER_SECRET_KEY,
          code: code,
          state: 53,
        },
      })
      const data = JSON.parse(resp.body)
      // http://localhost:5173/login?platform=google
      if (resp.statusCode !== 200 || data["error"] != null) {
        res.send(400, BadRequest, respHeader)
        return
      }
      const accessToken = data["access_token"] ?? ""
      if (accessToken.length <= 0) {
        res.send(400, BadRequest, respHeader)
        return
      }
      // 토큰으로 유저 정보 가져오기
      const userInfo: NaverProfile = await got(NAVER_INFO_URI, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        throwHttpErrors: false,
      }).json()

      if (userInfo.response?.email == null) {
        res.send(503, {
          error: "Naver API Serve error!",
        }, respHeader)
        return
      }
      // 유저 정보 반환
      user.email = userInfo.response.email ?? ""
      user.nickname = userInfo.response.nickname ?? ""
      user.profileURL = userInfo.response.profile_image ?? ""
    } break
    case "kakao": {
      const resp = await got(KAKAO_OAUTH_TOKEN_URL, {
        method: "POST",
        form: {
          grant_type: "authorization_code",
          client_id: KAKAO_CLIENT_ID,
          client_secret: KAKAO_SECRET_KEY,
          code: code,
          redirect_uri: `${req.headers.referer}login?platform=kakao`,
        },
      })
      const data = JSON.parse(resp.body)
      // http://localhost:5173/login?platform=google
      if (resp.statusCode !== 200 || data["error"] != null) {
        res.send(400, BadRequest, respHeader)
        return
      }
      const accessToken = data["access_token"] ?? ""
      if (accessToken.length <= 0) {
        res.send(400, BadRequest, respHeader)
        return
      }
      // 토큰으로 유저 정보 가져오기
      const userInfo: KakaoProfile = await got(KAKAO_INFO_URI, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        throwHttpErrors: false,
      }).json()

      if (userInfo.id == null) {
        res.send(503, {
          error: "Naver API Serve error!",
        }, respHeader)
        return
      }
      // 유저 정보 반환
      user.email = userInfo.kakao_account.profile.email ?? ""
      user.nickname = userInfo.kakao_account.profile.nickname ?? ""
      user.profileURL = userInfo.kakao_account.profile.profile_image_url ?? ""
    } break
    default: {
      res.send(400, BadRequest, respHeader)
      return
    }
  }

  res.send(200, user, respHeader)

})

server.listen(8080, () => {
  console.log("Server started")
})