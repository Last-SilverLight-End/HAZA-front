export interface KakaoProfile {
  id: number, // 고유 ID
  kakao_account: KakaoAccount,
}

interface KakaoAccount {
  profile: KakaoInfo,
}

interface KakaoInfo {
  nickname?: string,
  profile_image_url?: string,
  email?: string,
}