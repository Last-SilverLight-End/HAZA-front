export interface NaverProfile {
  resultcode: string, // 결과 코드
  response: Response, // 응답
}

interface Response {
  email: string,
  nickname: string,
  profile_image: string,
}