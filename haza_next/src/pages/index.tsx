import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import MainHome from './mainHome';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <MainHome />
    </>
  )
}
