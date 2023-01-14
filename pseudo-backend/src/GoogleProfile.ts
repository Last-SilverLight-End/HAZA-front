export interface GoogleProfile {
  sub: string, // 고유 ID
  name: string, // 이름
  given_name: string, // 이름?
  picture: string, // 프로필 사진
  email: string, // 이메일
  email_verified: boolean, // 이메일 인증 여부
  locale: string, // 언어
}
