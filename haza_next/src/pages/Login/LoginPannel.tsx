import { LightMode, Text, Button, useColorMode, MenuItem, MenuDivider, HStack, DarkMode, IconButton, Spacer, Box } from "@chakra-ui/react";
import styles from "@/styles/LoginPannel.module.css"
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGit, FaGithub, FaGoogle } from "react-icons/Fa";
import { SiNaver } from "react-icons/si";
import { LoginButton } from "@/components/login/LoginButton";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { DarkModeButton } from "@/components/generic/DarkModeButton";

export interface LoginProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

//https://developers.google.com/identity/branding-guidelines?hl=ko#font 구글 브랜드 가이드 기준 맞추기

const iconSize = "25px" // 아이콘 크기

export default function LoginPannel(props: Record<string, never>) {

  // 다크모드 제어
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.main}>
      {/* 로고 */}
      <Text as="b" m={5} color="darkgray" fontSize="6xl">HAZA CENTER</Text>
      <LoginButton
        icon={<RiKakaoTalkFill size={iconSize} />}
        text="Kakao로 로그인"
        lightColor="yellow"
        darkColor="yellow"
      />
      <LoginButton
        icon={<FaGithub size={iconSize} />}
        text="Github로 로그인"
        lightColor="gray"
        darkColor="gray"
      />
      <LoginButton
        icon={<FaGoogle size={iconSize} />}
        text="Google로 로그인"
        lightColor="red"
        darkColor="red"
      />
      <LoginButton
        icon={<SiNaver size={iconSize} />}
        text="Naver로 로그인"
        lightColor="green"
        darkColor="green"
      />
      {/* 다크모드 스위치 */}
      <Box height={2} />
      <DarkModeButton onClick={toggleColorMode} currentState={colorMode} size="lg" />
    </div>
  )
}