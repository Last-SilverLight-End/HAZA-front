import { BoardData } from "@/libs/backend/boardRequest";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  data: RequiredBoardData,
  href: string | "null",
  boardId? : number;
}

type RequiredBoardData = Pick<BoardData, "hit" | "title" | "userName" | "boardId">

/**
 * 게시글 하나 보여주는 컴포넌트 (in List)
 * @param props 데이터
 */
export function BoardLine(props: Props) {
  const { hit, title, userName, boardId } = props.data
  return (
    <Box
      borderRightRadius="10"
      borderLeftRadius="10"
      key={boardId}
      bg={["gray", "green", "yellow"][boardId % 3]}
    >
      <Grid
        templateColumns="5fr 1fr 1fr"
        padding="3px"
        margin="10px"
        alignContent="center"
        height={14}
        >
        <GridItem>
          <Link href={props.href} as ={props.href}>
            {title}
          </Link>
        </GridItem>
        <GridItem>
          {hit}
        </GridItem>
        <GridItem>
          {userName}
        </GridItem>
      </Grid>
    </Box>
  )
}