import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface Props {
  currentState: "dark" | "light",
  size?: "sm" | "md" | "lg" | "xs",
  onClick: () => void,
}

/**
 * 다크모드 전환 버튼
 * @param props 현재 상태 / 클릭 시 행동
 */
export function DarkModeButton(props:Props) {
  return (
    <IconButton
      onClick={props.onClick}
      aria-label="Switch color mode"
      icon={props.currentState === "dark" ? <SunIcon /> : <MoonIcon />}
      size={props.size}
      />
  )
}

/**
 * 복사 붙여넣기 하시오
 * const { colorMode, toggleColorMode } = useColorMode()
 * 
 * <DarkModeButton onClick={toggleColorMode} currentState={colorMode} />
 */