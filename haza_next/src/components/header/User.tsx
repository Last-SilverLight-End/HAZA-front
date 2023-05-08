import { Avatar, Text } from '@chakra-ui/react';
import Space from '../Space';

export interface UserProps {
  src?: string;
  name: string;
  className?: string;
  hideName?: boolean;
}

/**
 * 사용자 아이콘과 이름 컴포넌트
 */
export function User(props: UserProps) {
  const hideName = props.hideName ?? false;

  return (
    <div className={`flex flex-row items-center gap-x-2 ${props.className ?? ""}`}>
      <Avatar size="md" name={props.name} src={props.src} />
      {
        !hideName && <>
          <Space className="w-0.5" />
          <Text fontSize="xl">{props.name}</Text>
        </>
      }
    </div>
  );
}