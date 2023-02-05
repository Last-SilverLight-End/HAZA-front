import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { TokenProp } from "@/libs/oAuth";
import "@toast-ui/editor/dist/toastui-editor.css"

import type { Editor as ToastEditor, EditorProps } from "@toast-ui/react-editor"
import { AspectRatio, Button, Flex, Grid, GridItem, Select, Text, Textarea } from "@chakra-ui/react"
import dynamic from "next/dynamic"

/**
 * CSR 전용 에디터
 */
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false })


import { Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Center, Spacer } from "@chakra-ui/react"
import { maxPageWidth } from "@/libs/constants";
import { useRef, useState } from "react";

export default function Board(props: TokenProp) {
  const editorRef = useRef<ToastEditor>(null)

  const [markdown, setMarkdown] = useState("")

  const showContent = () => {
    console.log(editorRef.current)
    if (editorRef.current != null) {
      const content = editorRef.current.getInstance().getMarkdown()
      setMarkdown(content)
    }
  }
  return (
    <>
      <Header />
      <Center width="100%">
        <Box width="100%" maxW={maxPageWidth} p={4} borderWidth="2px">
          <FormControl>
            <FormLabel>제목</FormLabel>
            <Input type="text" placeholder="제에목" />
            <Spacer h={4} />
            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
              <GridItem>
                <FormLabel>대분류</FormLabel>
                <Select placeholder="골라골라">
                  <option value="option1">공지사항</option>
                  <option value="option2">자유게시판</option>
                </Select>
                <FormHelperText>1차 분류 입니다.</FormHelperText>
              </GridItem>
              <GridItem>
                <FormLabel>소분류</FormLabel>
                <Select placeholder="돌림판">
                  <option value="option1">달달소</option>
                  <option value="option2">쏘리글</option>
                </Select>
                <FormHelperText>2차 분류 입니다.</FormHelperText>
              </GridItem>
            </Grid>
            <Spacer h={4} />
            <FormLabel>내용</FormLabel>
            <Box height="30rem">
              <Editor
                initialValue="안뇽"
                previewStyle="vertical"
                height="100%"
                initialEditType="wysiwyg"
                editorRef={editorRef}
              />
            </Box>
            <Spacer h={4} />
            <Flex flexDirection="row-reverse" columnGap={4}>
              <Button onClick={showContent}>작성</Button>
              <Button>취소</Button>
            </Flex>
            <Spacer h={4} />
            <Textarea value={markdown} readOnly={true} />
          </FormControl>
      </Box>
      </Center>
      <Footer />
    </>
  )
}