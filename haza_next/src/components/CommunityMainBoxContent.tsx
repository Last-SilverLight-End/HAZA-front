
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbSeparator, Box, Grid, GridItem, Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { type BoardData, getBoardList } from "../libs/backend/boardRequest";
import style from "@/styles/CommunityMain.module.css";

// 이걸 참고하여 변형시킨다.
//https://chakra-ui.com/docs/components/breadcrumb/usage

export function ListBoardLine() {
  const [data, setData] = useState<BoardData[]>();

  // 리스트 요청 해서 받는 값
  /*useEffect(() => {
  getBoardList(null).then(res => {
    setData(res);
    console.log(res);
  });
 }, []);*/

  // sample data 나중에 위 내용을 이용할 것

  const [tempData, setTempData] = useState<BoardData[]>([
    {
      boardId: 1,
      hit: 200,
      createdDate: new Date("2022-11-01 12:12:12"),
      modifiedDate: new Date("2022-11-01 13:12:12"),
      userName: "jjoriping",
      userEmail: "jjoripingbabo@gmail.com",
      title: "쪼리핑 바보",
      content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
      mainCategory: "Movie",
      midCategory: "Horror",
    },
    {
      boardId: 2,
      hit: 400,
      createdDate: new Date("2023-11-01 12:12:12"),
      modifiedDate: new Date("2023-11-01 13:12:12"),
      userName: "jjoriping",
      userEmail: "jjoripingbabo@gmail.com",
      title: "쪼리핑 바보2",
      content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
      mainCategory: "Movie",
      midCategory: "Horror",
    },
    {
      boardId: 3,
      hit: 400,
      createdDate: new Date("2023-11-01 12:12:12"),
      modifiedDate: new Date("2023-11-01 13:12:12"),
      userName: "jjoriping",
      userEmail: "jjoripingbabo@gmail.com",
      title: "쪼리핑 바보3",
      content: "미안하다 이거 보여주려고 어글 ㅗ끌었따.",
      mainCategory: "Movie",
      midCategory: "Horror",
    }
  ]);

  return (

    //TODO: token을 받아오지 않으므로 임시로 주석 처리 
    /*data?.map(v => (
      <Box>
        <Breadcrumb>
          <BreadcrumbItem className={style.contentBox}>
            <BreadcrumbLink href=''>{v.title}</BreadcrumbLink>
            <BreadcrumbLink href=''>{v.hit}</BreadcrumbLink>
            <BreadcrumbLink href=''>{v.userName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>


      )
    )*/


    //<Grid templateColumns="5fr 1fr 1fr" padding="3px" margin="10px" bg={["red", "green", "blue"][Math.floor(Math.random() * 3)]}>
    //        <Box key={v.boardId} className={style.헌킬바보}>

    <>{
      /**
       * 리스트를 차례로 불러온다.
       */
      tempData?.map((v, i) => (
        <Box
          borderRightRadius="10"
          borderLeftRadius="10"
          key={v.boardId} bgGradient={[
            "linear(to-tr, teal.400, yellow.400) ", "linear(to-b, orange.100, purple.300)", "linear(to-t, blue.200, teal.500)"][i % 3]}>
          <Grid templateColumns="5fr 1fr 1fr" padding="3px" margin="10px" >
            <GridItem>
              <Link href="/community/communityBulletins">
                {v.title}
              </Link>
            </GridItem>
            <GridItem>{v.hit}</GridItem>
            <GridItem>{v.userName}</GridItem>
          </Grid>
        </Box>
      )
      )}</>
  )
}