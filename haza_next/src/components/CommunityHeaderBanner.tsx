import { BoardData, getBoardList } from '@/libs/backend/boardRequest';
import { exampleKanban } from '@/libs/backend/kanbanRequests';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

/**
 * 
 * 커뮤니티 메인 카테고리 배너
 */
export function CommunityHeaderBanner () {
  // 메인 카테고리 리스트 종합
  const mainCategoryList = Array.from(new Set(exampleKanban.map(x => x.mainCategoryId)));
  console.log(mainCategoryList);
  /**
  * 메인 카테고리 리스트 header sample data 
  */
  const [boardList, setBoardList] = useState<Array<BoardData> | null>(null);
  
  useEffect(() => {
    (async () => {
      const boardLists = await getBoardList(null, );
      setBoardList(boardLists);
    })();
  }, []);

  console.log(boardList);
  
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          {mainCategoryList.map((v,index) =>
            <Tab key={index}>
              {v}
            </Tab>
          )}
        </TabList>

        {/* TabPanel 안에 table list 를 출력 시킨다.*/}
        <TabPanels>
          {exampleKanban?.map((v,index) =>
            <TabPanel key={index}>
              {v.title}
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </>
  );
}