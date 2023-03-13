import { LightMode,Text, Button, useColorMode, MenuItem, MenuDivider, HStack, DarkMode, ColorMode, CSSWithMultiValues } from "@chakra-ui/react";
import styles from "@/styles/LoginPannel.module.css"
import {RiKakaoTalkFill} from "react-icons/ri";
import {FaGithub, FaGoogle} from "react-icons/Fa";
import {SiNaver} from "react-icons/si";

export interface LoginProps {
  onLogin?: () => void;
  onSignup?: () => void;
}

//https://developers.google.com/identity/branding-guidelines?hl=ko#font 구글 브랜드 가이드 기준 맞추기

const Mode: React.FC<React.PropsWithChildren<{ mode: ColorMode }>> = ({ mode, children }) =>
  mode === "dark"
    ? <DarkMode>{children}</DarkMode>
    : <LightMode>{children}</LightMode>
// <Base = ...>(...) =>에 있는 <Base = ...>를 jsx로 인식하기 때문에 제약이 필요
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const dependsOn = (colorMode: ColorMode) =>
  <Base extends unknown = CSSWithMultiValues>() =>
    <T extends Base>(values: Record<ColorMode, T>) =>
      values[colorMode]

function LoginPannel(props: LoginProps) {
  const { colorMode } = useColorMode() // ?잠만요 뭔가좀 심히 잘못된거같은데  ???????????
  // 아니그 
  // DarkMode랑 LightMode가 저렇게 쓰라고 있는게 아닌거같은데요
  // https://chakra-ui.com/docs/styled-system/color-mode#forcing-a-specific-mode
  // 제목이 'forcing' a specific mode인데
  // 그러면 어떤 테마든 상관없이 특정 테마만 사용하겠다 이거 아닌가요
  // 근데 지금 코드를 보면 테마에 따라 
  
  const themed = dependsOn(colorMode)
  const themedCssProps = themed()
  
  return (
    <div className={styles.main}>
      <Text as="b" m={5} color="darkgray" fontSize="6xl">HAZA CENTER</Text>
      <Mode mode={colorMode}>
        <Button
          _hover={themedCssProps({
            light: {
              // 이제 쓰시면됨
            },
            dark: {
              
            },
          })}
          fontSize="25px"
          size="lg"
          height="80px"
          width="500px"
          as="b"
          m={2}
          colorScheme="yellow"
          leftIcon={<RiKakaoTalkFill  size="25px" />}
        >
          Kakao 로 로그인
        </Button>
        <Button
          {...themedCssProps({
            light: {
              backgroundColor: "gray.400",
            },
            dark: {
              colorScheme: "gray",
            },
          })}
          _active={themedCssProps({
            light: {
              backgroundColor: "gray.500",
              color: "black",
            },
            dark: {
              backgroundColor: "gray.800",
              color: "white",
            },
          })}
          fontSize="25px"
          size="lg"
          height="80px"
          width="500px"
          as="b"
          m={2}
          leftIcon={<FaGithub size="25px" />}
        >
          Github 로 로그인
        </Button>
        <Button
          _hover={themedCssProps({
            light: {
              background: "blue.300",
              color: "white.700",
            },
            dark: {},
          })}
          _active={themedCssProps({
            light: {
              backgroundColor: "blue.400",
              color: "white",
            },
            dark: {
              backgroundColor: "white",
              color: "gray.800",
            },
          })}
          fontSize="25px"
          size="lg"
          height="80px"
          width="500px"
          as="b"
          m={2}
          color={themed<string>()({
            light: "gray.700",
            dark: "white",
          })}
          backgroundColor={themed<string>()({
            light: "white",
            dark: "#4285F4",
          })}
          leftIcon={<FaGoogle size="25px" />}
        >
          Google 로 로그인
        </Button>
        <Button
          fontSize="25px"
          size="lg"
          height="80px"
          width="500px"
          as="b"
          m={2}
          colorScheme="green"
          leftIcon={<SiNaver size="25px" />}
        >
          Naver 로 로그인
        </Button>
      </Mode>
        <LightMode>
          <Button  fontSize="25px" size="lg" height="80px" width="500px"  as = "b" m ={2} colorScheme="green" color="white" leftIcon={<SiNaver size="25px" />}>
            Naver 로 로그인
          </Button>
        </LightMode>
        
        <DarkMode>
          <Button 
          _hover={{
              background: "green.00",
              color: "teal.500",
            }}  
            fontSize="25px" size="lg" height="80px" width="500px"  as = "b" m ={2} backgroundColor="green" color="white" leftIcon={<SiNaver size="25px" />}>
            Naver 로 로그인
          </Button>
        </DarkMode>
    </div>
  )
}

export default LoginPannel;