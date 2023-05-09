import { maxPageWidth } from '@/libs/constants';
import { Box, Center } from '@chakra-ui/react';

export interface ContentFrameProps {
  rowGap?: number | string;
}
/**
 * 페이지 내용을 감싸는 프레임
 */
export function ContentFrame({ children, rowGap }: Partial<React.PropsWithChildren<ContentFrameProps>>) {
  return (
    <Center width="100%">
      <Center width="100%" flexDirection="column" maxW={maxPageWidth} p={4} as="main" gap={rowGap} pt={10} pb={10}>
        {children}
      </Center>
    </Center>
  );
}

/**
 * 커뮤니티 페이지 보드 리스트를 감싸는 프레임
 */
export function BoardFrame({ children }: Partial<React.PropsWithChildren>) {
  return (
    <Center >
    <Box flex="1" maxW={maxPageWidth} display="inline-block"> 
      {children}
    </Box>
    </Center>
  );
}