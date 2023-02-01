import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })
import { FC } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export default function mainHome() {
  return (
    <>
      <Header/>
        <main className={styles.main}>
          <h2>Lets HAZA!</h2>
          <div>
            <p>자신이 원하는 모든 대로 할 수 있습니다!</p>
          </div>
        </main>
      <Footer/>
    </>
  )
}