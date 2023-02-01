import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import useSWR from "swr"

import { Button, ButtonGroup } from "@chakra-ui/react"
import Space from '@/components/Space'
import { Logo } from '@/components/Logo'
import { OAuthProvider, oAuthURI } from '@/libs/oAuth'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Login() {
  const router = useRouter()

  const handleButtonClick = (provider: OAuthProvider) => {
    router.push(oAuthURI(provider))
  }
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col content-center">
          <Logo className="w-64 h-64" />
          <Space className="h-4" />
          <Button colorScheme="red" onClick={
            () => handleButtonClick(OAuthProvider.GOOGLE)
            }>Google로 로그인</Button>
          <Space className="h-4" />
          <Button colorScheme="green" onClick={
            () => handleButtonClick(OAuthProvider.NAVER)
          }>네이버로 로그인</Button>
          <Space className="h-4" />
          <Button colorScheme="yellow" onClick={
            () => handleButtonClick(OAuthProvider.KAKAO)
          }>카카오로 로그인</Button>
        </div>
      </main>
    </>
  )
}
