import { Text, useColorMode, Box } from '@chakra-ui/react';
import styles from '@/styles/LoginPannel.module.css';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaGithub, FaGoogle } from 'react-icons/Fa';
import { SiNaver } from 'react-icons/si';
import { LoginButton } from '@/components/login/LoginButton';
import { DarkModeButton } from '@/components/generic/DarkModeButton';
import { OAuthProvider, oAuthUri, setJWTToken, TokenProp } from '@/libs/oAuth';
import { useRouter } from 'next/router';

export interface LoginProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

//https://developers.google.com/identity/branding-guidelines?hl=ko#font 구글 브랜드 가이드 기준 맞추기

const iconSize = '25px'; // 아이콘 크기

/**
 * 로그인 페이지
 * @param token 현재 토큰
 */
export default function LoginPannel({ token }: TokenProp) {
  // 다크모드 제어
  const { colorMode, toggleColorMode } = useColorMode();
  // Next.js 라우터
  const router = useRouter();
  // 로그인 버튼 처리
  const createButtonClickHandler = (provider: OAuthProvider) =>
    () => {
      router.push(oAuthUri(provider));
      setJWTToken('ABCDE'); // TEST
    }

  return (
    <div className={styles.main}>
      {/* 로고 */}
      <Text as="b" m={5} color="darkgray" fontSize="6xl">HAZA CENTER</Text>
      {/* 로그인 버튼 */}
      <LoginButton
        icon={<RiKakaoTalkFill size={iconSize} />}
        text="Kakao로 로그인"
        color="yellow"
        onClick={createButtonClickHandler(OAuthProvider.KAKAO)}
      />
      <LoginButton
        icon={<FaGithub size={iconSize} />}
        text="Github로 로그인"
        color="gray"
        onClick={createButtonClickHandler(OAuthProvider.GITHUB)}
      />
      <LoginButton
        icon={<FaGoogle size={iconSize} />}
        text="Google로 로그인"
        color="red"
        onClick={createButtonClickHandler(OAuthProvider.GOOGLE)}
      />
      <LoginButton
        icon={<SiNaver size={iconSize} />}
        text="Naver로 로그인"
        color="green"
        onClick={createButtonClickHandler(OAuthProvider.NAVER)}
      />
      {/* 다크모드 스위치 */}
      <Box height={2} />
      {/* 디버깅용 */}
      <Text>
        Token: {token}
      </Text>
      <Box height={2} />
      <DarkModeButton onClick={toggleColorMode} currentState={colorMode} size="lg" />
    </div>
  )
}