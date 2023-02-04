import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { User, UserProps } from "./User";
import { EditIcon, CloseIcon } from "@chakra-ui/icons"
import { emptyFunction } from "@/libs/constants";

export interface UserMenuProps extends UserProps {
  onEditProfile?: () => unknown;
  onLogout?: () => unknown;
}

/**
 * 사용자 프로필 및 메뉴 컴포넌트
 */
export function UserMenu(props: UserMenuProps) {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton>
        <User src={props.src} name={props.name} />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<EditIcon />} onClick={props.onEditProfile ?? emptyFunction}>정보 수정하기</MenuItem>
        <MenuItem icon={<CloseIcon />} onClick={props.onLogout ?? emptyFunction}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  )
}
