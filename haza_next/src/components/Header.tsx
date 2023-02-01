import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';
const Header: FC = () => {

  const router = useRouter();


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
        router.push("/community/CoummunityHome")} >
        대화 HAZA
      </button>
      <button className={style.surveyHAZA} onClick={() =>
        router.push("/survey/SurveyHome")}>
        설문 HAZA
      </button>


    </div>
  )
}

export default Header;