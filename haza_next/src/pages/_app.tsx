import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  // 인증 토큰 불러오기
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "")
  }, [])

  return (
    <ChakraProvider>
      <Component {...{...pageProps, token: token}} />
    </ChakraProvider>
  )
}
