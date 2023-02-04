import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';
import ShowLogin from './ShowLogin';
import ShowStatus from './ShowStatus';

import { Box, Button, ButtonGroup, Center, Flex, Spacer } from "@chakra-ui/react";
import { User } from './header/User';
import { UserMenu } from './header/UserMenu';
import { LoginMenu } from './header/LoginMenu';
import Space from './Space';

export function Header(props:Record<string, never>) {
  const router = useRouter();

  // community 버튼 클릭
  const onCommunityClick = () => {
    router.push("/community/communityHome");
  };
  // 설문조사 버튼 클릭
  const onSurveyClick = () => {
    router.push("/survey/surveyHome");
  };


  // check boolean , 로그인 체크용
  const [login, setLogin] = useState<boolean>(false)

  // 렌더링
  return (
    <header>
      <Center width="100%" borderBottom="1px" borderColor="gray.300" paddingX={3} paddingY={1}>
        <Flex width="100%" maxWidth="8xl" height="4rem">
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
            <Flex columnGap={4}>
              <Button colorScheme="cyan" onClick={onCommunityClick} className="ml-auto">대화 HAZA</Button>
              <Button colorScheme="orange" onClick={onSurveyClick}>설문조사 HAZA</Button>
            </Flex>
            <Spacer w={10} />
            {/* 로그인 여부에 따라 바뀌는 컴포넌트*/}
            {login ?
              <UserMenu src="/images/profile_example.png" name="사람"
                onLogout={ () => setLogin(false) }
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