import { MainCategory } from "@/libs/backend/boardRequest"
import { exampleKanban } from "@/libs/backend/kanbanRequests"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react"

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
  const [headerList , getHeaderList] = useState<MainCategory[]>([
    {
      mainCategoryId : 1,
      mainCategoryName : "Movie",
    },
    {
      mainCategoryId : 2,
      mainCategoryName : "Game",
    },
    {
      mainCategoryId : 3,
      mainCategoryName : "Animation",
    }
    
  ]);

  return (
    <>
     <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    {
    mainCategoryList?.map((v,index)=>(
      <Tab key={index}>
        {v}
      </Tab>
     ))
  }
  </TabList>
  {/* TabPanel 안에 table list 를 출력 시킨다.*/}
  <TabPanels>
    <TabPanel>
      <p>뫙뫙이 고수!</p>
    </TabPanel>
    <TabPanel>
      <p>쪼리핑 바보!</p>
    </TabPanel>
    <TabPanel>
      <p>헌킬 천재!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  )
} 