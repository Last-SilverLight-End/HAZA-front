import { Avatar, AvatarBadge, AvatarGroup, Text } from "@chakra-ui/react"
import Space from "../Space";

export type UserProps = {
  src?: string;
  name: string;
  className?: string;
}

/**
 * 사용자 아이콘과 이름 컴포넌트
 */
export function User(props:UserProps) {
  return (
    <div className={`flex flex-row items-center gap-x-2 ${props.className ?? ""}`}>
      <Avatar size="md" name={props.name} src={props.src} />
      <Space className="w-0.5" />
      <Text fontSize="xl">{props.name}</Text>
    </div>
  )
}