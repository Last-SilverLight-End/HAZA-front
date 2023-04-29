import Footer from "@/components/generic/Footer";
import { Header } from "@/components/generic/Header";
import { BoardData, MainCategory, getBoard, getMainCategoryBoardList} from "@/libs/backend/boardRequest";
import { exampleBoardData, exampleCategoryData } from "@/libs/backend/exampledata";
import { TokenProp } from "@/libs/oAuth";
import { Textarea,Divider,Center,Text,Stack,Box,Heading,Button } from '@chakra-ui/react'
import style from '@/styles/CommunityMain.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sqlDateToDate } from "@/libs/util";




export default function Board(props: TokenProp) {

  // 보드 데이터
  const [boardData, setBoardData] = useState<BoardData>(exampleBoardData[0])
  // 보드 아이디 
  const [boardId,setBoardId] = useState<number>(1);
  // 링크를 통한 라우터에서 값을 받아 옴
  const router = useRouter();
  const boardLink =router.query;
  console.log(boardData);
  console.log(boardLink,boardLink.id);

    useEffect (()=>{

      if (!router.isReady) return
      // 모든 특정 가테고리 리스트 보드 가져오기
      async function getBoardList(){
        
        console.log(boardLink.id);

        // 바뀐 코드
        const newBoardId = Number(boardLink.id);
        setBoardId(newBoardId)

        // 원래 했던 코드
        //setBoardId(Number(boardLink.id));

        const specificBoardLists = await getBoard(null,{boardId : newBoardId });
        setBoardData(specificBoardLists);
        console.log(specificBoardLists);
        
      }
      // 모든 메인 카테고리 리스트 가져오기

      
      getBoardList();
    },[router.isReady]);


  return (
    <>
      <Header />
      {/* 게시판 내용물 */}
      <div>{boardId} </div>
      <div className={style.content}>
        <Stack></Stack>
        <Stack>
        
          <Box p={5} shadow='md' borderWidth='1px'>
            <Heading fontSize='xl'>
             <Center>
               게시판 이름 : {boardData.title}
             </Center>
            </Heading>

            <Center>
              <Text mt={4} mr={2}>게시판 생성 날짜 : {boardData.createdDate.toLocaleString()}</Text>
              <Divider orientation='vertical' borderColor={'gray'} />
              <Text mt={4}>게시판 번호 :  {boardData.boardId}</Text>
            </Center>

          <Divider orientation='horizontal' borderColor={'gray'} />
          <Text fontSize='lg'> {boardData.content} </Text>
          <Divider orientation='horizontal' borderColor={'gray'} />
          게시판 본 사람 수 : {boardData.hit}
          <Divider orientation='horizontal' />

          게시판 메인 카테고리 id : {boardData.mainCategory}
          게시판 중앙 카테고리 id : {boardData.midCategory}
          </Box>
        </Stack>

      </div>
      
      {/* 댓글 모음들 */}
      <div className={style.dak}>

      <Textarea  width="80%" size='lg' placeholder='아 달달소 폭파하고 싶다 댓글 달기' />

      <Button  colorScheme='blue'
          m={2}
         
      >댓글 달기</Button>
      </div>
      <Footer />
    </>
  )
}