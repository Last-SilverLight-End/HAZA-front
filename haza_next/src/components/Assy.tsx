
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
} from '@chakra-ui/react'

// 이걸 참고하여 변형시킨다.
//https://chakra-ui.com/docs/components/breadcrumb/usage

// 나중에 채울것
export type boardLists = {
  title?: string;

}
//

export function listBoardLine() {
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href=''>Page 1</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )
}