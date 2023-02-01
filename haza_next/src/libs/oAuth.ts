import { BACKEND_TEST } from "./constants"

const oAuthURIPrefix = `${BACKEND_TEST}/api/auth/login/`

export enum OAuthProvider {
  NAVER = "naver",
  GOOGLE = "google",
  KAKAO = "kakao",
}

export function oAuthURI(provider: OAuthProvider) {
  return `${oAuthURIPrefix}${provider}`
}