import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import { FC } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import showImage from '../images/모레미.png';
import showImage2 from '../images/소죠센세.png';
export default function mainHome() {
  return (
    <>
      <Header/>
        <main className={styles.main}>
          <h2>Lets HAZA!</h2>
          <Image 
            src={showImage2}
            alt="show how to create"
            width={500}
            height={500}
            />
          <div>
            <p>자신이 원하는 모든 대로 할 수 있습니다!</p>
          </div>
          <Image 
            src={showImage}
            alt="show how to create"
            width={500}
            height={500}
            />
          <div>
            자 당신의 꿈을 펼쳐보세요!
          </div>
        </main>
      <Footer/>
    </>
  )
}