import Footer from "@/components/generic/Footer";
import { Header } from "@/components/generic/Header";
import { BoardData, MainCategory, getBoard, getMainCategoryBoardList} from "@/libs/backend/boardRequest";
import { exampleBoardData, exampleCategoryData } from "@/libs/backend/exampledata";
import { TokenProp } from "@/libs/oAuth";

import style from '@/styles/CommunityMain.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Board(props: TokenProp) {

    // 보드 데이터
    const [boardData, setBoardData] = useState<BoardData[]>(exampleBoardData)
    // 카테고리 데이터
    const [mainCatData, setMainCatData] = useState<MainCategory[]>(exampleCategoryData)
  
    const [boardLinks,setBoardLinks] = useState<Array<string>>();
  // 링크를 통한 라우터에서 값을 받아 옴

  const router = useRouter();
  const boardLink =router.query;
  
  console.log(boardLink,boardLink.id);
   const [boardId,setBoardId] = useState<number>(1);
 
    useEffect (()=>{
      // 근데 이거 변수명좀 수정해야할듯
      // boardIdNumber 이러는게 좀그렇네요
      // 일단 변수 이름에 자료형이 들가있고요
      // 그게 제일 맘에 안드는듯
      // 타입으로 뭔지를 나타내야지 이름으로 나타내는건 전 아니라고봄
      
      // 어느 부분에서죠
      
      // 아진짜 기분 언가님 발톱때같다
      // ㄱㅋ
      if (!router.isReady) return
      // 모든 특정 가테고리 리스트 보드 가져오기
      async function getBoardList(){
        
        console.log(boardLink.id);

        const newBoardId = Number(boardLink.id);
        
        setBoardId(newBoardId)

        // 원래 했던 코드
        setBoardId(Number(boardLink.id));
        // 차이점 이라 한다면?
        // 1. 바로 참조하느냐 따로 계산 후 참조냐..?
        // 그냥
        // const [a, setA] = useState(...);
        // 하면
        // setA를 호출하든 말든
        // a의 값은 그대로에요
        // 단지 리렌더를 해서 (정상적인 코드에서는) a의 값이 바뀐것처럼 보일 뿐이지
        
        // 클로저 알고계신가요
        // 알고계시면 빠른이해가능
        // 클로저가 그거 아님 이미 선언된 걸 꺼내 쓰는 거잖아요
        // 자 그러면 알고있는지 테스트를 해봅시다

        // 자 대충 이런 코드가 있다고 할때
        // 콘솔에는 뭐가 출력될까요
        // 1초마다 0 출력 아닌가요?
        // 그 정진해주세요 ?
        // 혹시 그거인가요 첫번째 setA로 할때 0으로 바꾼다고 넣었으나 아직 함수가 다 안끝나서
        // 먼저 123 출력 된다음 바뀌고 0 출력 인가요?
        // 바뀌고 출력이 안되는데요
        // useEffect에 []가 붙엉
        const specificBoardLists = await getBoard(null,{boardId : newBoardId });
        
        console.log(specificBoardLists);
      }
      // 모든 메인 카테고리 리스트 가져오기

      
      getBoardList();
    },[router.isReady]);


  return (
    <>
      <Header />
      <div className={style.content}>
        공사중
      
      </div>
      <div>{boardId} </div>
      <Footer />
    </>
  )
}