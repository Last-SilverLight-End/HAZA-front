import { env } from "process"
import { C_GOOGLE_CLIENT_ID, C_GITHUB_CLIENT_ID, C_BACKEND, C_NAVER_CLIENT_ID, C_KAKAO_CLIENT_ID } from "../OAuth/"

// 구글

const OAuth2Token = {
  C_GITHUB_CLIENT_ID = env.
}

const GOOGLE_OAUTH_URI = "https://accounts.google.com/o/oauth2/v2/auth"
const GOOGLE_EMAIL_SCOPE = "https://www.googleapis.com/auth/userinfo.email"
const GOOGLE_PROFILE_SCOPE = "https://www.googleapis.com/auth/userinfo.profile"
const GOOGLE_INFO_URI = "https://www.googleapis.com/oauth2/v4/userinfo"
// 깃헙
const GITHUB_OAUTH_URI = "https://github.com/login/oauth/authorize"
// 네이버
const NAVER_OAUTH_URI = "https://nid.naver.com/oauth2.0/authorize"
// 카카오
const KAKAO_OAUTH_URI = "https://kauth.kakao.com/oauth/authorize"

const PLATFORM_KEY = "platform"

export enum OAuth2Platform {
  GOOGLE = "google",
  GITHUB = "github",
  NAVER = "naver",
  KAKAO = "kakao",
}

function buildRedirectURI(href: string, platform: OAuth2Platform) {
  const hrefURL = new URL(href)
  const noParamURL = new URL(hrefURL.origin + hrefURL.pathname) 

  const redirectParam = new URLSearchParams()
  redirectParam.set(PLATFORM_KEY, platform)

  return `${noParamURL.toString()}?${redirectParam.toString()}`
}

/**
 * 백앤드 서버에 Login을 요청합니다.
 */
export async function requestLogin(platform: OAuth2Platform, code: string) {
  const postBody = {
    platform,
    code,
  }
  const resp = await fetch(`${C_BACKEND}/api/auth/login`, {
    body: JSON.stringify(postBody),
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json",
      "Origin": location.href,
    }),
  })
  const body = await resp.json()

  if (body["error"] != null) {
    throw new Error("Login Error: " + body["error"])
  }

  return body as {email: string, nickname:string, profileURL:string}
}

////////////////////
// 구글
////////////////////

export function getGoogleOAuthURI(href: string) {
  // href가 없을 때 빈 문자 반환
  if (href.length <= 0) {
    return ""
  }

  const queries = new URLSearchParams({
    client_id: C_GOOGLE_CLIENT_ID,
    redirect_uri: buildRedirectURI(href, OAuth2Platform.GOOGLE),
    response_type: "code",
    scope: `${GOOGLE_EMAIL_SCOPE} ${GOOGLE_PROFILE_SCOPE}`,
  })
  return `${GOOGLE_OAUTH_URI}?${queries.toString()}`
}

export async function parseGoogleProfile(accessToken: string) {
  const authHeader = `Bearer ${accessToken}`
  const response:GoogleProfile = await (await fetch(GOOGLE_INFO_URI, {headers: {
    Authorization: authHeader,
  }})).json()
  return response
}

interface GoogleProfile {
  sub: string, // 고유 ID
  name: string, // 이름
  given_name: string, // 이름?
  picture: string, // 프로필 사진
  email: string, // 이메일
  email_verified: boolean, // 이메일 인증 여부
  locale: string, // 언어
}

///////////////////////////
// 깃헙
////////////////////////////

export function getGithubOAuthURI(href: string) {
  // href가 없을 때 빈 문자 반환
  if (href.length <= 0) {
    return ""
  }

  const queries = new URLSearchParams({
    client_id: C_GITHUB_CLIENT_ID,
    redirect_uri: buildRedirectURI(href, OAuth2Platform.GITHUB),
    scope: "read:user read:email",
  })
  return `${GITHUB_OAUTH_URI}?${queries.toString()}`
}

export function getNaverOAuthURI(href: string) {
    // href가 없을 때 빈 문자 반환
    if (href.length <= 0) {
      return ""
    }
  
    const queries = new URLSearchParams({
      response_type: "code",
      client_id: C_NAVER_CLIENT_ID,
      redirect_uri: buildRedirectURI(href, OAuth2Platform.NAVER),
      state: "53",
    })
    return `${NAVER_OAUTH_URI}?${queries.toString()}`
}

export function getKakaoOAuthURI(href: string) {
    // href가 없을 때 빈 문자 반환
    if (href.length <= 0) {
      return ""
    }
  
    const queries = new URLSearchParams({
      response_type: "code",
      client_id: C_KAKAO_CLIENT_ID,
      redirect_uri: buildRedirectURI(href, OAuth2Platform.KAKAO),
    })
    return `${KAKAO_OAUTH_URI}?${queries.toString()}`
}