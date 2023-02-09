import { maxPageWidth } from "@/libs/constants";
import { ChildrenProp } from "@/libs/util";
import { Box, Center } from "@chakra-ui/react";

export type ContentFrameProps = {
  rowGap?: number | string;
}

/**
 * 페이지 내용을 감싸는 프레임
 */
export function ContentFrame({children, rowGap}: ChildrenProp & ContentFrameProps) {
  return (
    <Center width="100%">
      <Center width="100%" flexDirection="column" maxW={maxPageWidth} p={4} as="main" gap={rowGap} pt={10} pb={10}>
        {children}
      </Center>
    </Center>
  )
}