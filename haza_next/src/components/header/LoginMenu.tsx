import { Button } from "@chakra-ui/react" 

export interface LoginMenuProps {
  onSignup?: () => unknown;
  onSignin?: () => unknown;
}

export function LoginMenu(props: LoginMenuProps) {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <Button onClick={props.onSignup} colorScheme="green">회원가입</Button>
      <Button onClick={props.onSignin}>로그인</Button>
    </div>
  )
}