import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';
import ShowLogin from './ShowLogin';
import ShowStatus from './ShowStatus';

import { Button, ButtonGroup } from "@chakra-ui/react";
import { User } from './header/User';
import { UserMenu } from './header/UserMenu';
import { LoginMenu } from './header/LoginMenu';
import Space from './Space';

export function Header(props:Record<string, never>) {
  const router = useRouter();

  // community 버튼 클릭
  const onCommunityClick = () => {
    router.push("/community/communityHome");
  };
  // 설문조사 버튼 클릭
  const onSurveyClick = () => {
    router.push("/survey/surveyHome");
  };


  // check boolean , 로그인 체크용
  const [logined, setLogined] = useState<boolean>(false)

  // 렌더링
  return (
    <nav className="flex flex-row items-center gap-x-4 px-4 py-2">
      {/* 왼쪽 사이드 */}
      <Link href="/">
        <User src="/images/logo.png" name="HAZA" />
      </Link>
      {/* 오른쪽 사이드 */}
      <Button colorScheme="cyan" onClick={onCommunityClick} className="ml-auto">대화 HAZA</Button>
      <Button colorScheme="orange" onClick={onSurveyClick}>설문조사 HAZA</Button>
      {/* 로그인 여부에 따라 바뀌는 컴포넌트*/}
      {logined ?
        <UserMenu src="/images/profile_example.png" name="사람" /> :
        <LoginMenu onSignin={
          () => router.push("/auth/login")
        } onSignup={
          () => router.push("/auth/signup")
        } />
      }
    </nav>
  )
}

const temp: FC = () => {

  const router = useRouter();
  const [check,getCheck] = useState<boolean>(false);

  
  // 여기에서 로그인을 하였는지 여부 결정

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