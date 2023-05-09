import { exampleBoardData } from '@/libs/backend/exampledata';
import { Box, Grid, GridItem, Link, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { type BoardData } from '../libs/backend/boardRequest';

// 이걸 참고하여 변형시킨다.
//https://chakra-ui.com/docs/components/breadcrumb/usage

export function ListBoardLine() {
  const { colorMode } = useColorMode();
  const [data, setData] = useState<Array<BoardData>>();

  // 리스트 요청 해서 받는 값
  /*useEffect(() => {
    getBoardList(null).then(res => {
      setData(res);
      console.log(res);
    });
  }, []);*/

  // sample data 나중에 위 내용을 이용할 것
  const [tempData2, setTempData2] = useState<Array<BoardData>>(exampleBoardData);

  const [tempData, setTempData] = useState<Array<BoardData>>(exampleBoardData);

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
    //bgGradient={[
    //  "linear(to-tr, teal.400, yellow.400) ", "linear(to-b, orange.100, purple.300)", "linear(to-t, blue.200, teal.500)"][i % 3]}>
    <>
      {tempData?.map((v, i) =>
        <Box
          borderRightRadius="10"
          borderLeftRadius="10"
          key={v.id}
          bg={(colorMode === 'dark' ? ['black', 'green', 'orange'] : ['gray', 'lightgreen', 'yellow'])[i % 3]}
        >
          <Grid templateColumns="5fr 1fr 1fr" padding="3px" margin="10px" alignContent="center" >
            <GridItem>
              <Link href="/community/communityBulletins">
                {v.title}
              </Link>
            </GridItem>
            <GridItem>{v.hit}</GridItem>
            <GridItem>{v.userName}</GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
}