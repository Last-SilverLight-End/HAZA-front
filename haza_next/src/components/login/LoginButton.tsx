import { Color } from '@/types';
import { Button } from '@chakra-ui/react';
import { ReactElement } from 'react';

/**
 * @param props 아이콘 / 글자 / 밝은 테마 색상 / 어두운 테마 색상
 */
export function LoginButton({ icon, text, color, onClick }: {
  icon: ReactElement;
  text: string;
  color: Color;
  onClick?: () => void;
}) {
  return (
    <Button
      fontSize="25px"
      size="lg" // 버튼 크기..?
      height="80px"
      width="500px"
      as="b"
      m={2}
      colorScheme={color}
      leftIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}