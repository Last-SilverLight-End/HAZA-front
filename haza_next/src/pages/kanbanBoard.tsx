import  { useState } from 'react';
import { exampleKanban } from '../libs/backend/kanbanRequests';
import { NameKanban } from '@/libs/backend/boardRequest';
import { Text, ModalFooter, Modal, Button, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, useDisclosure } from '@chakra-ui/react'; 
import { useRouter } from 'next/router';

// 보드 이름 짓기(나중에 kanban 용도)
const boardName = (input: string, output: NameKanban) => {
  output.title = input;
  return output.title;
}

// 메인
const KanbanList = () => {
  const router = useRouter();
  const [dragging, setDragging] = useState<boolean>(false);
  //카드 리스트들 보여주기
  
  const showMidCardLists = (cardMainCategory: string) => {
    return exampleKanban
      .filter((data) => data.mainCategoryId === cardMainCategory)
      .map((others, index) =>
        <Button
          onClick={() => moveBoard(cardMainCategory, others.midCategory)}
          m={2}
          colorScheme="teal"
          size="lg"
          key={index}
        >
          {others.midCategory}
        </Button>
      );
  };

  function moveBoard(mainCategory: string, midCategory: string) {
    router.push('/community/CommunityHome');
    //router.push(`CommunityHome?main=${mainCategory}&sub=${midCategory}`);
  }
  
  // 보드 리스트 푸쉬
  
  /*useEffect(() =>{

  }, []);*/


  const handleDragStart = (e: Event, id: number) => {
    return 
  }

  const { isOpen, onClose } = useDisclosure();

  return  (
    <>
      <div>
        <Text fontSize="5xl">Games</Text>
        {showMidCardLists('Game')}
      </div>
      <div>
        <Text fontSize="5xl">Movie</Text>
        <h1>{showMidCardLists('Movie')}</h1>
      </div>
      {/*
        <Button onClick={temp}> + </Button>   
        
        

          
        <div>
        <Button onClick={onOpen}>Open Modal</Button>
      </div>*/}


      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>메뉴 사용법</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            아직 제장중입니다. 현재 칸반 리스트는 제외된 채 현재 카테고리 리스트만 구현이 되어 있습니다.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              취소
            </Button>
            <Button variant="ghost" onClick={onClose}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KanbanList;