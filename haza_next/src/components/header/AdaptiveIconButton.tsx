import { Color } from '@/types';
import { Button, IconButton } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface Props {
  icon: ReactElement;
  colorScheme?: Color;
  size?: "sm" | "md" | "lg" | "xs";
  onClick?: () => void;
  label: string;
  isCompact?: boolean;
}

/**
 * 아이콘 버튼(모바일) / 버튼(데스크톱)
 */
export function AdaptiveIconButton(props: Props) {
  if (props.isCompact ?? true) {
    return (
      <IconButton
        aria-label={props.label}
        icon={props.icon}
        size={props.size}
        colorScheme={props.colorScheme}
        onClick={props.onClick}
        />
    );
  } else {
    return (
      <Button
        aria-label={props.label}
        leftIcon={props.icon}
        size={props.size}
        colorScheme={props.colorScheme}
        onClick={props.onClick}
        width="100%"
      >
        {props.label}
      </Button>
    );
  }
}