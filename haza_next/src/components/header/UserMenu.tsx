import { Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { User, UserProps } from "./User";
import { EditIcon, CloseIcon, StarIcon } from "@chakra-ui/icons"
import { emptyFunction } from "@/libs/constants";

export interface UserMenuProps extends UserProps {
  onEditProfile?: () => unknown;
  onLogout?: () => unknown;
}

/**
 * 사용자 프로필 및 메뉴 컴포넌트
 */
export function UserMenu(props: UserMenuProps) {
  return (
    <Menu>
      <MenuButton>
        <User src={props.src} name={props.name} hideName={props.hideName} />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<StarIcon />}>{props.name}</MenuItem>
        <MenuDivider />
        <MenuItem icon={<EditIcon />} onClick={props.onEditProfile ?? emptyFunction}>정보 수정하기</MenuItem>
        <MenuItem icon={<CloseIcon />} onClick={props.onLogout ?? emptyFunction}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  )
}
