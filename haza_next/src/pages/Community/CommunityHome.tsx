import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { Header } from '@/components/generic/Header';
import Footer from "@/components/generic/Footer";
const inter = Inter({ subsets: ['latin'] })
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Box, Stack, Button,
} from '@chakra-ui/react'
import { useCallback, useMemo, useState } from 'react';
import { TokenProp } from '@/libs/oAuth';
import style from '@/styles/CommunityMain.module.css';
import { BoardFrame, ContentFrame } from '@/components/generic/ContentFrame';
import { ListBoardLine } from '@/components/CommunityMainBoxContent';
import { CommunityHeaderBanner } from '@/components/CommunityHeaderBanner';
import { BoardData, MainCategory } from '@/libs/backend/boardRequest';
import { BoardLine } from '@/components/community/BoardLine';
import { exampleBoardData, exampleCategoryData } from '@/libs/backend/exampledata';

export default function CommunityHome({ token }: TokenProp) {
  // 보드 데이터
  const [boardData, setBoardData] = useState<BoardData[]>(exampleBoardData)
  // 카테고리 데이터
  const [mainCatData, setMainCatData] = useState<MainCategory[]>(exampleCategoryData)
  // 현재 활성화된 카테고리
  const [activeCatId, setActiveCatId] = useState<number>(1)

  return (
    <>
      <Header />
      <ContentFrame rowGap={4}>
        {/* 내용 적기 */}
        {/* 카테고리 데이터 */}
        <Stack spacing={4} direction="row" align="center">
          {
            mainCatData.map((oneData) => {
              return <Button
                key={oneData.mainCategoryId}
                size="lg"
                colorScheme={oneData.mainCategoryId === activeCatId ? "teal" : "gray"}
                onClick={() => setActiveCatId(oneData.mainCategoryId)}
              >
                {oneData.mainCategoryName}
              </Button>
            })
          }
          </Stack>
        {/* 보드 데이터 */}
        <div>
          {boardData.map((oneData) => {
            return (<BoardLine
              key={oneData.boardId}
              data={oneData}
              href="/community/communityBulletins"
            />)
          })}
        </div>
      </ContentFrame>
      <Footer />
    </>
  )

  return (
    <>
      < Header />
      <CommunityHeaderBanner />
      <BoardFrame>
        <ListBoardLine />
      </BoardFrame>
      <Footer />
    </>
  )
}
