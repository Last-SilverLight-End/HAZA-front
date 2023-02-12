import Footer from "@/components/generic/Footer";
import { Header } from "@/components/generic/Header";
import { TokenProp } from "@/libs/oAuth";

import style from '@/styles/CommunityMain.module.css';


export default function Board(props: TokenProp) {
  return (
    <>
      <Header />
      <div className={style.content}>
        공사중

      </div>
      <Footer />
    </>
  )
}