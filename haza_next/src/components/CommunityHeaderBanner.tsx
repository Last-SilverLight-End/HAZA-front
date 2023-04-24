import { BoardData, MainCategory, getBoardList } from "@/libs/backend/boardRequest"
import { exampleKanban } from "@/libs/backend/kanbanRequests"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react"

/**
 * 
 * 커뮤니티 메인 카테고리 배너
 */
export function CommunityHeaderBanner () {



  // 메인 카테고리 리스트 종합
  const mainCategoryList = Array.from(new Set(exampleKanban.map(x => x.mainCategory)));
  console.log(mainCategoryList);


  /**
   * 메인 카테고리 리스트 header sample data 
   */
  

  //데이터를 찍고 싶었는데 pending 이 떳다

  // pending 이 뜬게 아니라 promise 객체인데 pending 상태인 promise 객체가 떳다.

 // 하지만 결국 이걸 바로 출력을 못한다 
 // 값을 구하기 위해선 useEffect로 하여 진행해야 한느데
 // 마운트 된 후에 useEffect의 첫번째 함수 호출
 // dashboard 호출 => 처음 그려짐
 // useState 를 통해서 setToken 호출 -> 대시보드 다시 그려짐
 // useEffect 의 첫번째 인자를 넘기는 함수 getToken() 호출하는 익명 함수 예약
 // getToken 함수 정의 not 호풀


  const [boardList,setBoardList] = useState<BoardData[] | null>(null);
  useEffect (()=>{
    async function getData(){
      const boardLists = await getBoardList(null,);
      setBoardList(boardLists);
    }
    getData();
  },[]);

  console.log(boardList);


  return (
    <>
     <Tabs isFitted variant='enclosed'>
     
  <TabList mb='1em'>
    {
    mainCategoryList.map((v,index)=>(
      <Tab key={index}>
        {v}
      </Tab>
     ))
  }
  </TabList>

  {/* TabPanel 안에 table list 를 출력 시킨다.*/}
  <TabPanels>
    {
      exampleKanban?.map((v,index)=>(
        <TabPanel key={index}>
          {v.title}
        </TabPanel>
       ))
    }
   
  </TabPanels>
</Tabs>
    </>
  )
} 