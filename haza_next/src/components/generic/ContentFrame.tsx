import { maxPageWidth } from "@/libs/constants";
import { Box, Center } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ListBoardLine } from "../CommunityMainBoxContent";
export type ContentFrameProps = {
  rowGap?: number | string;
}

/**
 * 페이지 내용을 감싸는 프레임
 */
export function ContentFrame({ children, rowGap }: { 'children'?: ReactNode } & ContentFrameProps) {
  return (
    <Center width="100%">
      <Center width="100%" flexDirection="column" maxW={maxPageWidth} p={4} as="main" gap={rowGap} pt={10} pb={10}>
        {children}
      </Center>
    </Center>
  )
}

/**
 * 페이지 보드 리스트를 감싸는 프레임
 */
export function BoardFrame({ children }: { 'children'?: ReactNode }) {
  return (
    <Box flex='1'>
      {children}
    </Box>
  )
}