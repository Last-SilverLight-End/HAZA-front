
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempBackground.jpg';





const ShowStatus: FC = () => {

  const router = useRouter();

  return (
    // 로그인이 되어 있으므로 로그인 된 정보 보여주기
    <div>
      <Image src={tempImage}
        alt="User_images"
        height={50}
        width={100}
          >

      </Image>
      <button onClick={() => router.push("/Signup")}>정보 수정하기 </button>
      <button onClick={() => router.push("/Signin")}>로그아웃</button>



    </div>
  )
}

export default ShowStatus;