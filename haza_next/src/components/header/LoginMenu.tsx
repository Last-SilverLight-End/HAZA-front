import { Box, Button, Flex, Spacer } from "@chakra-ui/react" 
import { useRouter } from 'next/router';

export interface LoginMenuProps {
  onSignup?: () => unknown;
  onSignin?: () => unknown;
}


/**
 * 로그인/회원가입 버튼 메뉴 컴포넌트
 * 여기다가 onSignup/onSignin 관련 코드 넣지 마세요!!
 */
export function LoginMenu(props: LoginMenuProps) {
  const router = useRouter();

  return (
    <Flex>
      <Button onClick={props.onSignup} colorScheme="green">회원가입</Button>
      <Spacer w={4} />
      <Button onClick={props.onSignin}>로그인</Button>
    </Flex>
  )
}