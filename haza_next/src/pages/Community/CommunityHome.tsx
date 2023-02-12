import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { Header } from '@/components/generic/Header';
import Footer from "@/components/generic/Footer";
const inter = Inter({ subsets: ['latin'] })
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Box,
} from '@chakra-ui/react'
import { useCallback, useMemo, useState } from 'react';
import { TokenProp } from '@/libs/oAuth';
import style from '@/styles/CommunityMain.module.css';
import { BoardFrame } from '@/components/generic/ContentFrame';
import { ListBoardLine } from '@/components/CommunityMainBoxContent';
import { CommunityHeaderBanner } from '@/components/CommunityHeaderBanner';
export default function CommunityHome({ token }: TokenProp) {
  const [boardList, setBoardList] = useState<string>("");
  const loadboardList = useCallback(async () => {

    /** TODO
     * 여기서 토큰 계속 확인하면서 가져오기
     */
  }, [token]);

  return (
    <>
      < Header />
      <CommunityHeaderBanner/>
      <BoardFrame>
        <ListBoardLine />
      </BoardFrame>
      <Footer />
    </>
  )
}
