import { LightMode,Text, Button, useColorMode, MenuItem, MenuDivider, HStack, DarkMode } from "@chakra-ui/react";
import styles from "@/styles/LoginPannel.module.css"
import {RiKakaoTalkFill} from "react-icons/ri";
import {FaGithub, FaGoogle} from "react-icons/Fa";
import {SiNaver} from "react-icons/si";

export interface LoginProps{
  onLogin?: () => void;
  onSignup?: () => void;
}

//https://developers.google.com/identity/branding-guidelines?hl=ko#font 구글 브랜드 가이드 기준 맞추기

function LoginPannel(props: LoginProps) {
  const { colorMode } = useColorMode()
  
  return (
    <div className={styles.main}>
      <Text as="b" m={5} color="darkgray" fontSize="6xl">HAZA CENTER</Text>
      {colorMode !== "dark"? 
        <LightMode>
          <Button
            _hover={{
            }}
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
        </LightMode>
        : 
        <DarkMode>
          <Button
            fontSize="25px" size="lg" height="80px" width="500px" as = "b" m ={2} colorScheme="yellow" leftIcon={<RiKakaoTalkFill  size="25px" />}>
            Kakao 로 로그인
          </Button>
        </DarkMode>
      }

      {colorMode !== "dark" ? 
        <LightMode>
          <Button
            _active={{
              background: "gray.800",
              color: "white",
            }}
            fontSize="25px"
            size="lg"
            height="80px"
            width="500px"
            as="b"
            m={2}
            backgroundColor="gray.400"
            leftIcon={<FaGithub size="25px" />}
          >
            Github 로 로그인
          </Button>
        </LightMode>
        :
        <DarkMode>
          <Button
              _active={{
              background :"gray.500",
              color: "black",
            }}
            fontSize="25px"
            size="lg"
            height="80px" // 그 이거 컴포넌트화하면 안되나요 콛겁나 반복되는데
            width="500px"
            as="b"
            m={2}
            colorScheme="gray"
            leftIcon={<FaGithub size="25px" />}
          >
            Github 로 로그인
          </Button>
        </DarkMode>
      }

      {colorMode!=="dark" ? 
        <LightMode>
          <Button
            _active={{
              background: "blue.400",
              color: "white",
            }}
            fontSize="25px"
            size="lg"
            height="80px"
            width="500px"
            as="b"
            m={2}
            color="gray.700"
            backgroundColor="white"
            leftIcon={<FaGoogle size="25px" />}
          >
          google 로 로그인
        </Button>
          
        </LightMode>
        :
        <DarkMode>
          <Button
            _hover={{
              background: "blue.300",
              color: "white.700",
            }}
            _active={{
              background: "white",
              color: "gray.800",
            }} color="white" fontSize="25px" size="lg" height="80px" width="500px" as = "b" m ={2} backgroundColor="#4285F4" leftIcon={<FaGoogle size="25px" />}>
            google 로 로그인
          </Button>
        </DarkMode>
      }

      {colorMode!=="dark" ? 
        <LightMode>
          <Button  fontSize="25px" size="lg" height="80px" width="500px"  as = "b" m ={2} colorScheme="green" color="white" leftIcon={<SiNaver size="25px" />}>
            Naver 로 로그인
          </Button>
        </LightMode>
        :
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
      }
    </div>
  )
}

export default LoginPannel;