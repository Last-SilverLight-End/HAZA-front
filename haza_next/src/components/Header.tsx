import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';
import ShowLogin from './ShowLogin';
import ShowStatus from './ShowStatus';

import { Box, Button, ButtonGroup, Center, Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { User } from './header/User';
import { UserMenu } from './header/UserMenu';
import { LoginMenu } from './header/LoginMenu';
import Space from './Space';
import { ChatIcon, EditIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { maxPageWidth } from '@/libs/constants';

export function Header(props:Record<string, never>) {
  const router = useRouter();
  // 상태들
  // 로그인 체크용
  const [login, setLogin] = useState<boolean>(false)
  // 다크모드
  const { colorMode, toggleColorMode } = useColorMode()

  // community 버튼 클릭
  const onCommunityClick = () => {
    router.push("/community/communityHome");
  };
  // 설문조사 버튼 클릭
  const onSurveyClick = () => {
    router.push("/survey/surveyHome");
  };

  // 렌더링
  return (
    <header>
      <Center width="100%" borderBottom="1px" borderColor="gray.300" paddingX={3} paddingY={1}>
        <Flex width="100%" maxWidth={maxPageWidth} height="4rem">
          {/* 왼쪽 사이드 */}
          <Center>
            <Link href="/">
              <User src="/images/logo.png" name="HAZA" />
            </Link>
          </Center>
          {/* 중앙 */}
          <Spacer />
          <Center columnGap={4}>
          </Center>
          <Spacer />
          {/* 오른쪽 사이드 */}
          <Center>
            <Flex columnGap={2}>
              <IconButton colorScheme="cyan" onClick={onCommunityClick} aria-label="대화 HAZA" icon={<ChatIcon />}/>
              <IconButton colorScheme="orange" onClick={onCommunityClick} aria-label="설문조사 HAZA" icon={<EditIcon />}/>
              {/* 다크모드 스위치 */}
              <IconButton onClick={toggleColorMode} aria-label="Switch color mode" icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} />
            </Flex>
            <Spacer w={8} />
            {/* 로그인 여부에 따라 바뀌는 컴포넌트*/}
            {login ?
              <UserMenu src="/images/profile_example.png" name="사람"
                onLogout={ () => setLogin(false) }
                hideName={true}
              /> :
              <LoginMenu onSignin={
                // () => router.push("/auth/login")
                () => setLogin(true)
              } onSignup={
                () => router.push("/auth/signup")
              } />
            }
          </Center>
        </Flex>
      </Center>
    </header>
  )
}