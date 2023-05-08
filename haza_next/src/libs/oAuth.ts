import { BACKEND_TEST } from './constants';

const oAuthUriPrefix = `${BACKEND_TEST}/api/auth/login/`;

export enum OAuthProvider {
  NAVER = "naver",
  GOOGLE = "google",
  KAKAO = "kakao",
  GITHUB = "github",
}

export interface TokenProp {
  token: string;
}

export function oAuthUri(provider: OAuthProvider) {
  return `${oAuthUriPrefix}${provider}`;
}

export function getJWTToken() {
  return localStorage.getItem('token') ?? '';
}

export function setJWTToken(token: string) {
  localStorage.setItem('token', token);
}