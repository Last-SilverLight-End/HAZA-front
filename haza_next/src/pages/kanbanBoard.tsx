import { useEffect, useState } from "react";
import styles from '@/styles/Kanban.module.css'
import {ListContents,exampleKanban} from "../libs/backend/kanbanRequests";

const kanbanList = () => {

  const [dragging, setDragging] = useState<boolean>(false);

  /*useEffect(() =>{

  }, []);*/
  const showCardLists = (cardMainCategory: string) => {
    return(
      exampleKanban.filter((data) => data.mainCategory ===cardMainCategory)
      .map((others) => {<div> {others.check} </div>

      }))
    
  };
  return  (
    <>
      <h1>나만의 HAZA 리스트 목록</h1>
      <div className ={styles.kanbanListContainer}>

      </div>

    </>
  );
};

export default kanbanList;