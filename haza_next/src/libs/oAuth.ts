/**
 * oAuth를 위한 유틸리티 함수들
 */

import { BACKEND_TEST } from "./constants"

const oAuthURIPrefix = `${BACKEND_TEST}/api/auth/login/`

export enum OAuthProvider {
  NAVER = "naver",
  GOOGLE = "google",
  KAKAO = "kakao",
  GITHUB = "github",
}

export interface TokenProp {
  token: string
}

export function oAuthURI(provider: OAuthProvider) {
  return `${oAuthURIPrefix}${provider}`
}

export function getJWTToken() {
  return localStorage.getItem("token") ?? ""
}

export function setJWTToken(token: string) {
  localStorage.setItem("token", token)
}