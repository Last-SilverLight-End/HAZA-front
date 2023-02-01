import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"

import { Button, ButtonGroup } from "@chakra-ui/react"
import Space from '@/components/Space'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col content-center">
          <Space className="h-4" />
          <Button colorScheme="red">Google로 로그인</Button>
          <Space className="h-4" />
          <Button colorScheme="green">네이버로 로그인</Button>
          <Space className="h-4" />
          <Button colorScheme="yellow">카카오로 로그인</Button>
          <Space className="h-4" />
          <Button colorScheme="facebook">Github으로 로그인</Button>
        </div>
      </main>
    </>
  )
}
