import { Button, useColorMode } from "@chakra-ui/react"
import { ReactElement } from "react"

// Chakra-UI 색상
type Color = "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"

/**
 * 로그인 버튼 컴포넌트
 * @param props 아이콘 / 글자 / 밝은 테마 색상 / 어두운 테마 색상
 * @returns 컴포넌트
 */

export function LoginButton(props: {
  icon: ReactElement,
  text: string,
  lightColor: Color,
  darkColor: Color,
  onClick?: () => unknown,
}) {
  const { colorMode } = useColorMode()
  const { icon, text, darkColor, lightColor } = props

  return (
    <Button
      fontSize="25px" // 글자 크기
      size="lg" // 버튼 크기..?
      height="80px"
      width="500px"
      as="b"
      m={2}
      colorScheme={colorMode === "dark" ? darkColor : lightColor}
      leftIcon={icon}
      onClick={props.onClick}
    >
      {text}
    </Button>
  )
}