import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { TokenProp } from "@/libs/oAuth"

import { Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Center } from "@chakra-ui/react"
import { useState } from "react"
import dynamic from "next/dynamic"
import Editor from "@/components/lexical/Editor"

export default function Board(props: TokenProp) {
  // 테스트
  return (
    <>
      <Header />
      <Center width="100%">
        <Box maxW="lg" p={4} borderWidth="2px">
          <FormControl>
            <FormLabel>제목</FormLabel>
            <Input type="text" />
            <FormHelperText>We will never share your email.</FormHelperText>
            <FormLabel>내용</FormLabel>
            <Editor />
          </FormControl>
      </Box>
      </Center>
      <Footer />
    </>
  )
}