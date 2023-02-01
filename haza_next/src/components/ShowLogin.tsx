import style from '@styles/Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Image from 'next/image';
import tempImage from '../images/tempMain.jpg';





const ShowLogin: FC = () => {

  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/Signup")}>SignUp </button>
      <button onClick={() => router.push("/Signin")}>SignIn</button>
    </div>
  )
}

export default ShowLogin;