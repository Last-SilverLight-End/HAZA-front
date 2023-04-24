import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { AdaptiveIconButton } from "../header/AdaptiveIconButton";

interface Props {
  currentState: "dark" | "light",
  size?: "sm" | "md" | "lg" | "xs",
  onClick: () => void,
  isCompact?: boolean,
}

/**
 * 다크모드 전환 버튼
 * @param props 현재 상태 / 클릭 시 행동
 */
export function DarkModeButton(props:Props) {
  return (
    <AdaptiveIconButton
      onClick={props.onClick}
      label="다크 모드 전환"
      icon={props.currentState === "dark" ? <SunIcon /> : <MoonIcon />}
      size={props.size}
      isCompact={props.isCompact}
      />
  )
}

/**
 * 복사 붙여넣기 하시오
 * const { colorMode, toggleColorMode } = useColorMode()
 * 
 * <DarkModeButton onClick={toggleColorMode} currentState={colorMode} />
 */