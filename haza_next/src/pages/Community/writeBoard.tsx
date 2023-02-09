import Footer from "@/components/generic/Footer";
import { Header } from "@/components/generic/Header";
import { TokenProp } from "@/libs/oAuth";
import "@toast-ui/editor/dist/toastui-editor.css"

import type { Editor as ToastEditor, EditorProps } from "@toast-ui/react-editor";
import { AspectRatio, Button, Flex, Grid, GridItem, Select, Text, Textarea, Skeleton } from "@chakra-ui/react"
import dynamic from "next/dynamic"

/**
 * CSR 전용 에디터
 */
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false })


import { Box, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Center, Spacer, useToast } from "@chakra-ui/react"
import { maxPageWidth } from "@/libs/constants";
import { useRef, useState } from "react";
import { ContentFrame } from "@/components/generic/ContentFrame";


/**
 * 보드에 글쓰기 페이지
 * @param props 
 * @returns 
 */
export default function WriteBoard(props: TokenProp) {
  // Markdown 에디터
  const editorRef = useRef<ToastEditor>(null)

  // 실제 Markdown 데이터
  const [markdown, setMarkdown] = useState("")
  // 글 제목
  const [title, setTitle] = useState("")
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  // 에디터 로드 상태
  const [isEditorLoaded, setIsEditorLoaded] = useState(false)
  // 토스트
  const toast = useToast()

  /**
   * 마크다운 값 업데이트 (반영)
   * @returns 업데이트된 값
   */
  const updateMarkdown = () => {
    if (editorRef.current != null) {
      const content = editorRef.current.getInstance().getMarkdown()
      setMarkdown(content)
      return content
    }
    return null
  }

  /**
   * 작성 버튼을 눌렀을 때 실행되는 함수
   */
  const onSubmit = () => {
    const toastOptions = {
      status: "error" as const,
      duration: 4000,
      isClosable: true,
    }
    // 제목 검사
    if (title.length <= 0) {
      toast({
        ...toastOptions,
        title: "제목을 입력해주세요",
      })
      return
    }
    // 입력값을 마크다으로 컴파일
    // content 값을 써야됨
    const content = updateMarkdown()
    // 내용 검사
    if (content == null || content.length <= 0) {
      toast({
        ...toastOptions,
        title: "내용을 입력해주세요",
      })
      return
    }
    // 내용이 문제가 없으면
    // TODO: 서버에 전송
  }

  return (
    <>
      <Header />
      <ContentFrame>
        <FormControl>
          <FormLabel>제목</FormLabel>
          <Input type="text" placeholder="제에목" value={title} onChange={handleTitleChange
          } />
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
          <Skeleton height="30rem" isLoaded={isEditorLoaded}>
            <Editor
              initialValue="안뇽"
              previewStyle="vertical"
              height="100%"
              initialEditType="wysiwyg"
              editorRef={editorRef}
              onLoad={() => setIsEditorLoaded(true)}
            />
          </Skeleton>
          <Spacer h={4} />
          <Flex flexDirection="row-reverse" columnGap={4}>
            <Button onClick={onSubmit}>작성</Button>
            <Button>취소</Button>
          </Flex>
          <Spacer h={4} />
          <Textarea value={markdown} readOnly={true} />
        </FormControl>
      </ContentFrame>
      <Footer />
    </>
  )
}