import Footer from '@/components/generic/Footer';
import { Header } from '@/components/generic/Header';
import { BoardData, CommentData, MainCategory, getBoard, getMainCategoryBoardList } from '@/libs/backend/boardRequest';
import { exampleBoardData, exampleMainCategoryData } from '@/libs/backend/exampledata';
import { TokenProp } from '@/libs/oAuth';
import { Textarea, Divider, Center, Text, Stack, Box, Heading, Button } from '@chakra-ui/react';
import style from '@/styles/CommunityMain.module.css';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function Board(props: TokenProp) {
  const [boardData, setBoardData] = useState<BoardData>(exampleBoardData[0]);
  const [commentData, setCommentData] = useState<string>("");
  const [boardId, setBoardId] = useState<number>(1);
  // 링크를 통한 라우터에서 값을 받아 옴
  const router = useRouter();
  const boardLink = router.query;
  
  const [value, setValue] = useState<string>("");
  
  // 제출 및 rerender 
  const submitContact =  (e: React.SyntheticEvent) => {
    e.preventDefault();

    alert(`당신이 쓴 댓글은 : ${value} 맞습니까?`);
    setCommentData(value);
  };

  // 댓글 실시간 반영
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const inputValue = e.target.value;
    setValue(inputValue);
  };

    useEffect(() => {
      if (!router.isReady) return;
      
      (async () => {
        console.log(boardLink.id);

        const newBoardId = Number(boardLink.id);
        setBoardId(newBoardId);
        const specificBoardLists = await getBoard(null, newBoardId);
        setBoardData(specificBoardLists);
        console.log(specificBoardLists);
      })();
    }, [router.isReady, commentData]);


  return (
    <>
      <Header />
      {/* 게시판 내용물 */}
      <div>{boardId}</div>
      <div className={style.content}>
        <Stack></Stack>
        <Stack>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">
             <Center>
                게시판 이름 : {boardData.title}
             </Center>
            </Heading>
            <Center>
              <Text mt={4} mr={2}>게시판 생성 날짜 : {boardData.createdDate.toLocaleString()}</Text>
              <Divider orientation="vertical" borderColor="gray" />
              <Text mt={4}>게시판 번호 : {boardData.id}</Text>
            </Center>
          <Divider orientation="horizontal" borderColor="gray" />
          <Text fontSize="lg">{boardData.content}</Text>
          <Divider orientation="horizontal" borderColor="gray" />
          게시판 본 사람 수 : {boardData.hit}
          <Divider orientation="horizontal" />

          게시판 메인 카테고리 id : {boardData.mainCategoryId}
          게시판 중앙 카테고리 id : {boardData.midCategoryId}
          </Box>
        </Stack>
      </div>
      
      {/* 댓글 모음들 */}
      <div className={style.dak}>
        현재 입력 된 값 : {value}
        <Textarea width="80%" size="lg" placeholder="아 달달소 폭파하고 싶다 댓글 달기" />
        <Button colorScheme="blue" m={2} type="submit" onClick={submitContact}>댓글 달기</Button>
      </div>
      <Footer />
    </>
  );
}