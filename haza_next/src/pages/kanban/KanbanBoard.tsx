import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import { FC, useState } from 'react';
import { Header } from '@/components/generic/Header'
import Footer from '@/components/generic/Footer'
import { ContentFrame } from '@/components/generic/ContentFrame'
import { Text,Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TokenProp } from '@/libs/oAuth'
import { exampleKanban } from '@/libs/backend/kanbanRequests';

/**
 * WIP!!!!!!!
 * 칸반 모시기
 * @param token 토큰 
 */
export default function KanbanBoard({ token }: TokenProp) {
  const router = useRouter()

  // 드래그?
  const [dragging, setDragging] = useState(false)

  const filterCategories = (cardMainCategory: string) => {
    return exampleKanban.filter(
      (data) => data.mainCategory === cardMainCategory
    )
  }

  const goKanbanBoard = () =>{
    router.push("/kanbanBoard")
  }


  
  return (
    <>
      <Header />
        <ContentFrame rowGap={4}>
          {/* 내용 적기 */}
          <div>
            <Text fontSize="5xl">Games</Text>
            { /* 카르반 렌더링 */
              // 언젠가 넣기
            }
          </div>
          <div>
            <Text fontSize="5xl">Movie</Text>
            {}
          </div>
        </ContentFrame>
      <Footer/>
    </>
  )
}