import { useState } from "react";



// 칸반 리스트 개수
export type KanbanCnt = number;

// 칸반 이름
export type KanbanName = {
  id : string;
  title : string;
  KanbanCnt : number;
}

// 칸반 맵화
export type KanbanNames = {
  [key in KanbanCnt] : KanbanName[]; 
}

const KanbanPages = () => {

  const [items , setItems] = useState<KanbanNames>(

  );

  return (
    <div></div>
  )
}