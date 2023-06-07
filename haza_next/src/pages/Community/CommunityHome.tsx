import { Header } from '@/components/generic/Header';
import Footer from '@/components/generic/Footer';
import { Stack, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { TokenProp } from '@/libs/oAuth';
import { ContentFrame } from '@/components/generic/ContentFrame';
import { getMainCategoryBoardList, BoardData } from '@/libs/backend/boardRequest';
import { BoardLine } from '@/components/community/BoardLine';
import { exampleBoardData, exampleMainCategoryData } from '@/libs/backend/exampledata';
import { MainCategory, getAllMainCategory } from '@/libs/backend/categoryRequest';

export default function CommunityHome({ token }: TokenProp) {
  const [boardData, setBoardData] = useState<Array<BoardData>>(exampleBoardData);
  const [mainCatData, setMainCatData] = useState<Array<MainCategory>>(exampleMainCategoryData);
  // 현재 활성화된 카테고리
  const [activeCatId, setActiveCatId] = useState<number>(1);

  useEffect(() => {
    // 모든 특정 가테고리 리스트 보드 가져오기
    (async () => {
      // 토큰 넣어야 함
      const maincategoryBoardLists = await getMainCategoryBoardList(null, activeCatId);
      setBoardData(maincategoryBoardLists);
    })();

    // 모든 메인 카테고리 리스트 가져오기
    (async () => {
      // 토큰 넣어야 함
      const mainCategoryLists = await getAllMainCategory(null,);
      console.log(mainCategoryLists);
      setMainCatData(mainCategoryLists);
    })();
  }, [activeCatId]);

  return (
    <>
      <Header />
      <ContentFrame rowGap={4}>
        {/* 내용 적기 */}
        {/* 카테고리 데이터 */}
        <Stack spacing={4} direction="row" align="center">
          {mainCatData.map((oneData) =>
            <Button
              key={oneData.id}
              size="lg"
              colorScheme={oneData.id === activeCatId ? "teal" : "gray"}
              onClick={() => {
                console.log(mainCatData);
                console.log("answer ", oneData.id, activeCatId)
                setActiveCatId(oneData.id)
              }}
            >
              {oneData.name}
            </Button>
          )}
        </Stack>
        {/* 보드 데이터 */}
        <div>
          {boardData.map((oneData) =>
            <div key={oneData.id}>
              <BoardLine
                data={oneData}
                href={`/community/communityBulletins?id=${oneData.id}`}
              />
            </div>
          )}
        </div>
      </ContentFrame>
      <Footer />
    </>
  );
}
