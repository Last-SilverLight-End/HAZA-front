import { Avatar, AvatarBadge, AvatarGroup, Text } from "@chakra-ui/react"
import Space from "../Space";
import {Logo} from "../Logo";
export type UserProps = {
  src?: string;
  name?: string;
  className?: string;
  hideName?: boolean;
  width?: number;
  height?: number;
}

/**
 * 사용자 아이콘과 이름 컴포넌트
 */
export function User(props:UserProps) {
  const hideName = props.hideName ?? false;

  return (
    <div className={`flex flex-row items-center gap-x-2 ${props.className ?? ""}`}>
      <Logo className={""} width={60} height={50} />
      {
        hideName ? null : <>
          <Space className="w-0.5" />
          <Text fontSize="xl">{props.name}</Text>
        </>
      }
    </div>
  )
}