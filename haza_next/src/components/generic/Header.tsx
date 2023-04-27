import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';


import { Box, Button, ButtonGroup, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Spacer, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { User } from '../header/User';
import { UserMenu } from '../header/UserMenu';
import { LoginMenu } from '../header/LoginMenu';
import { ChatIcon, EditIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { maxPageWidth } from '@/libs/constants';
import { Logo } from './Logo';
import { DarkModeButton } from './DarkModeButton';
import { RiMenu2Line, RiMenu3Line } from 'react-icons/ri';

import React from "react"
import { AdaptiveIconButton } from '../header/AdaptiveIconButton';

export function Header(props: Record<string, never>) {
  const router = useRouter();
  // 상태들
  // 로그인 체크용
  const [login, setLogin] = useState<boolean>(false)
  // 다크모드
  const { colorMode, toggleColorMode } = useColorMode()
  // 데스크톱 체크
  const isDesktop = useBreakpointValue({ base: false, md: true })
  // Drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  // 헤더 배경 색깔 - 굳이...?
  // TODO: 색깔 하드코딩 벗어나기
  const bgColor = useColorModeValue("rgba(255,255,255,0.6)", "rgba(26, 32, 44, 0.6)")
  // 밑 구분선 색깔
  const borderColor = useColorModeValue("gray.300", "gray.700")

  /* ========= 컴포넌트 ========== */
  // 오른쪽 메뉴 컴포넌트
  const FeatureSideComponent = (isMobile: boolean) => {
    return <>
      <Stack direction={isMobile ? "column" : "row"} gap={1} align="center" justify="center">
        <AdaptiveIconButton colorScheme="cyan" onClick={onCommunityClick} label="커뮤니티 HAZA" icon={<ChatIcon />} isCompact={!isMobile} />
        <AdaptiveIconButton colorScheme="orange" onClick={writeCommunityBoard} label="글 작성하기" icon={<EditIcon />} isCompact={!isMobile} />
        {/* 다크모드 스위치 */}
        <DarkModeButton onClick={toggleColorMode} currentState={colorMode} isCompact={!isMobile} />
        <Box />
        {/* 로그인 */}
        {login ?
          <UserMenu src="/images/profile_example.png" name="사람"
            onLogout={() => setLogin(false)}
            hideName={false}
          /> :
          <LoginMenu onSignin={
            // () => router.push("/auth/login")
            () => setLogin(true)
          } onSignup={
            () => router.push("/auth/signup")
          } />
        }
      </Stack>
    </>
  }

  // community 버튼 클릭
  const onCommunityClick = () => {
    router.push("/community/CommunityHome");
  };

  // community 버튼 클릭
  const writeCommunityBoard = () => {
    router.push("/community/writeBoard");
  };
  // 설문조사 버튼 클릭
  const onSurveyClick = () => {
    router.push("/survey/surveyHome");
  };


  // 렌더링
  // 헤더는 고정에 z50에 블러 처리
  return (
    <>
      <Box as="header" bg={bgColor} className="sticky top-0 z-50 backdrop-blur-lg">
        <Center width="100%" borderBottom="1px" borderColor={borderColor} paddingX={5} paddingY={1}>
          <Flex width="100%" maxWidth={maxPageWidth} height="4rem">
            {/* 왼쪽 사이드 */}
            <Center>
              <Link href="/">
                <Logo width={50} height={50} withTitle={true} />
              </Link>
            </Center>
            {/* 중앙 */}
            <Spacer />
            <Center columnGap={4}>
            </Center>
            <Spacer />
            {/* 오른쪽 사이드 */}
            <Center>
              {isDesktop ? (
                /* 데스크톱 모드만 렌더링 */
                FeatureSideComponent(false)
              ) : (
                /* 모바일 모드만 렌더링 */
                <>
                  <IconButton
                    ref={btnRef}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="menu"
                    icon={<RiMenu3Line fontSize="1.25rem" />}
                  />
                </>
              )}
            </Center>
          </Flex>
        </Center>
      </Box>
      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* 헤더 */}
          <DrawerHeader>메뉴</DrawerHeader>
          {/* 바디 */}
          <DrawerBody>
            {FeatureSideComponent(true)}
          </DrawerBody>
          {/* 밑에 부분 */}
          <DrawerFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              닫기
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}