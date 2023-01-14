import { GOOGLE_CLIENT_ID } from "./config"

const GOOGLE_OAUTH_URI = "https://accounts.google.com/o/oauth2/v2/auth"

// https://www.googleapis.com/oauth2/v2/userinfo?fields=id,email,name,picture
const GOOGLE_EMAIL_URI = "https://www.googleapis.com/auth/userinfo.email"
const GOOGLE_PROFILE_URI = "https://www.googleapis.com/auth/userinfo.profile"

const GOOGLE_INFO_URI = "https://www.googleapis.com/oauth2/v3/userinfo"
const PLATFORM_KEY = "platform"

////////////////////
// 구글
////////////////////

export function getGoogleOAuthURI(href: string) {
  // href가 없을 때 빈 문자 반환
  if (href.length <= 0) {
    return ""
  }
  const hrefURL = new URL(href)
  const noParamURL = new URL(hrefURL.origin + hrefURL.pathname) 

  const redirectParam = new URLSearchParams()
  redirectParam.set(PLATFORM_KEY, OAuth2Platform.GOOGLE)

  const queries = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${noParamURL.toString()}?${redirectParam.toString()}`,
    response_type: "token",
    scope: `${GOOGLE_EMAIL_URI} ${GOOGLE_PROFILE_URI}`,
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

export function parseGoogleToken() {

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
// 깃헙?
////////////////////////////

export enum OAuth2Platform {
  GOOGLE = "google",
}