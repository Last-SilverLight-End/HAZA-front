import { Button, DarkMode, LightMode, useColorMode, ColorMode, ThemeTypings, ResponsiveValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import type * as CSS from 'csstype';

// 코드 이해 되고 완벽히 고칠 일이 생기면 사용 할 것 일단은 보류

/**
 * from `@chakra-ui/styled-system/dist/index.d.ts`
 */
type Token<CSSType, ThemeKey = unknown> =
	ThemeKey extends keyof ThemeTypings
		? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]>
		: ResponsiveValue<CSSType>

type DynamicColor = Record<ColorMode, Token<CSS.Property.Color, "colors">>

interface LoginButtonProps {
	content: string,
	active?: {
		backgroundColor: DynamicColor,
    color: DynamicColor,
	}
  hover?: {
		backgroundColor: DynamicColor,
    color: DynamicColor,
	}
	backgroundColor?: DynamicColor
	color?: DynamicColor
	Icon: IconType
}
const LoginButton: React.FC<LoginButtonProps> = (props) => {
	const { colorMode } = useColorMode();
	
	const { Icon } = props;
	
	const Mode = colorMode === "dark" ? DarkMode : LightMode;
	
	return (
		<Mode>
			<Button
				_active={{
					backgroundColor: props.active?.backgroundColor?.[colorMode],
					color: props.active?.color?.[colorMode],
				}}
				_hover={{
					backgroundColor: props.hover?.backgroundColor?.[colorMode],
					color: props.hover?.color?.[colorMode],
				}}
				fontSize="25px"
				size="lg"
				height="80px"
				width="500px"
				as="b"
				m={2}
				color={props.color?.[colorMode]}
				backgroundColor={props.backgroundColor?.[colorMode]}
				leftIcon={<Icon size="25px" />}
			>
				{props.content}
			</Button>
    </Mode>
	);
}

export default LoginButton;