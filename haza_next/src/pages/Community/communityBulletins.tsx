import Footer from '@/components/generic/Footer';
import { Header } from '@/components/generic/Header';
import { BoardData, getBoard } from '@/libs/backend/boardRequest';
import { exampleBoardData } from '@/libs/backend/exampledata';
import { TokenProp } from '@/libs/oAuth';
import { Textarea, Divider, Center, Text, Stack, Box, Heading, Button, FormLabel, FormControl, Switch, Flex, Avatar, useToast, HStack } from '@chakra-ui/react';
import style from '@/styles/CommunityMain.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FlexiableTextArea from 'react-textarea-autosize';

export default function Board(props: TokenProp) {
  const [boardData, setBoardData] = useState<BoardData>(exampleBoardData[0]);
  const [commentData, setCommentData] = useState<string>("");
  const [boardId, setBoardId] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [check, setCheck] = useState<boolean>(true);
  // 링크를 통한 라우터에서 값을 받아 옴
  const router = useRouter();
  const boardLink = router.query;
  const toast = useToast();
  const [value, setValue] = useState<string>("");

  // 제출 및 rerender 
  const submitContact = (e: React.SyntheticEvent) => {
    e.preventDefault();

    alert(`당신이 쓴 댓글은 : ${value} 맞습니까?`);
    setCommentData(value);
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(message);
    setMessage(e.currentTarget.value);
    // 개행 문자 확인 여부로 라인 관리
    const lineCount = (e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
    if (lineCount > 10) {
      toast({
        title: '최대 10줄까지 입력 가능합니다',
        position: 'top-left',
      });
      setCheck(true);
      return;
    }
    setCheck(false);
  };

  // 댓글 실시간 반영
  const handleInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      < Header />
      {/* 게시판 내용물 */}
      < Box > {boardId}</Box >
      <Box mr="15%" ml="15%" >
        <Box display="flex" flexDirection="column" mb={3} >
          <Stack>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" mr="5%" ml="5%">
              <Heading >
                <Box>
                  <Center fontSize="2xl">
                    {boardData.title}
                  </Center>
                  <HStack mt={2} mb={4} fontSize="xs" justify="flex-end" display="flex" flexDirection="row">
                    <Text>No.{boardData.id}</Text>
                    <Text>Date : {boardData.createdDate.toLocaleString()}</Text>
                    <Text fontSize="xs">
                      HIT : {boardData.hit}
                    </Text>
                    {/*<Text fontSize="xs">
                        게시판 메인 카테고리 id : {boardData.mainCategoryId}
                        게시판 중앙 카테고리 id : {boardData.midCategoryId}
                    </Text>*/}
                  </HStack>
                </Box>
              </Heading>
              <Box mt={2} mb={2}>
                <Text fontSize="ls">{boardData.content}</Text>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box borderWidth="1px" shadow="md" borderRadius="lg" overflow="hidden" mb="2" bg="white" mr="5%" ml="5%">
          <Flex align="center" padding="2">

            <Textarea
              bg="gray.100"
              border="none"
              placeholder="대에헷그으을 달기!"
              resize="none"
              minH="unset"
              overflow="hidden"
              fontSize="xs"
              mr="3"
              minRows={1}
              maxRows={10}
              as={FlexiableTextArea}
              value={message}
              onChange={onChangeMessage}
            />
            <Button disabled={check} bgColor="#26bd00d6" color="white" colorScheme="yellow" variant="solid" size="sm">
              올리기
            </Button>
          </Flex>
          <FormControl p="1" mt="1" display="flex" alignItems="center">

          </FormControl>
          {/*{message.length},{check}*/}

        </Box>
        <Button mr="5%" ml="5%" mb={2} disabled={check} bgColor="#123456" color="white" colorScheme="blue" variant="solid" size="sm">
          글 목록
        </Button>
      </Box >
      {/* 댓글 모음들 
      <Box className={style.dak}>
        현재 입력 된 값 : {value}
        <Textarea value={value} onChange={handleInputValue} width="80%" size="lg" placeholder="아 달달소 폭파하고 싶다 댓글 달기" />
        <Button colorScheme="blue" m={2} type="submit" onClick={submitContact}>댓글 달기</Button>
      </Box>*/}
      < Footer />
    </>
  );
}