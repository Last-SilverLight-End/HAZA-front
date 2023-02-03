import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {Header} from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import internal from 'stream';
const inter = Inter({ subsets: ['latin'] })

//저장하고 게시
const postUp = () => {
  alert("게시하였습니다!")
  // TODO: 여기에 데이터 전송 주고 받는거 설정
};

// 임시 저장 
const tempUp = () => {
  alert("")
  // TODO : 여기에 데이터 전송 주고 받는거 설정
}

// 수정 하고 게시
const modifyUp = () => {
  alert("수정하였습니다!")
  // TODO: 여기에 데이터 전송 주고 받는거 설정
};

//취소하고 다시 원래 있던 페이지로 되돌아감
const resetUp = () => {
  const router = useRouter();
  alert("취소하였습니다.");
  router.back();
  
}
// 게시판 타입
type Bulletins = {
  title : string,
  text : string,
  image? : Array<ImageBitmap>,
  hit : number, 
  username : string,
  modified_date : Date,
  created_date : Date,
}


export default function CommunityHome() {
  
  const [alreadyPostUp,getAlreadyPostUp] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div className = {styles.sideBar}>
      <button > Main</button>
        <button > 퀴즈 HAZA! </button>
        <button > 이야기 HAZA! </button>
      </div>

        <div>
          <div> 제목</div>
          <div> 게시글 도구</div>
          <div> 게시들 내용 적는 용도</div>
          <div> 첨부 파일</div>


          <div className = {styles.bullitin_button}> 
            <button onClick={postUp}> 게시하기 </button>
            <button onClick = {modifyUp} > 수정하기</button>
            <button onClick = {tempUp} > 임시저장하기</button> 
            <button onClick = {resetUp} > 취소하기 </button> 
          </div>
        </div>
      <Footer/>
    </>
  )
}
