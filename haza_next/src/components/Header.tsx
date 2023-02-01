import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';
import ShowLogin from './ShowLogin';
import ShowStatus from './ShowStatus';




const Header: FC = () => {

  const router = useRouter();
  const [check,getCheck] = useState<boolean>(false);

  
  // 여기에서 로그인을 하였는지 여부 결정
  function getLoginCheck(check: boolean): void {
    
  }

  return (
    <div className={style.header}>
      <Link href="/">
        <Image
          src={tempImage}
          alt="tempMainImage"
          height={50}
          width={100}
        />
      </Link>

      <button className={style.communityHAZA} onClick={() =>
        router.push("/community/CommunityHome")} >
        대화 HAZA
      </button>
      <button className={style.surveyHAZA} onClick={() =>
        router.push("/survey/SurveyHome")}>
        설문 HAZA
      </button>
      {/* 여기에 로그인 안하였을 시 로그인과 회원 가입 삽입 ,  
      로그인 하였을 시 개인 정보 보여주기*/}

      {
        check === false ? <ShowLogin/> : <ShowStatus/>
      };
    </div>
  )
}

export default Header;