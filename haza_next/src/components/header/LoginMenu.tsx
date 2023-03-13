import { Box, Button, Flex, Spacer } from "@chakra-ui/react" 
import { useRouter } from 'next/router';

export interface LoginMenuProps {

  onSignup?: () => unknown;
  onSignin?: () => unknown;
}


/**
 * 로그인/회원가입 버튼 메뉴 컴포넌트
 */
export function LoginMenu(props: LoginMenuProps) {
  const router = useRouter();
  const MoveLoginPannel = () => {
    
    router.push("/Login/LoginPannel");
  };

  return (
    <Flex>
      <Button onClick={props.onSignup} colorScheme="green">회원가입</Button>
      <Spacer w={4} />
      <Button onClick={MoveLoginPannel}>로그인</Button>
    </Flex>
  )
}