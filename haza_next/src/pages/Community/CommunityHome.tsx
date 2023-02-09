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
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
          </BreadcrumbItem>
          {/* this will generate a span in the ol HTML tag which causes the error: */}
          {/* <BreadcrumbSeparator /> */}
        </Breadcrumb>

        {/* preferred solution: */}
        <Breadcrumb pt='3'>
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
          </BreadcrumbItem>
          {/* this creates the exact same HTML as for page 1 */}
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        </Breadcrumb>

        <Breadcrumb pt='3'>
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href=''>List2</BreadcrumbLink>
          </BreadcrumbItem>
          {/* this works too, but creates an additional empty li HTML tag */}
          <BreadcrumbItem />
        </Breadcrumb>
      </Box>
      <Footer />
    </>
  )
}
