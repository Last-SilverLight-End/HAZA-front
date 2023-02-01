import style from '@/styles/Footer.module.css';
import useRouter from 'next/router';
import { FC } from 'react';

const Footer: FC = () => {

  return (
    <footer className={style.footer}>
      <div className={style.menuContainer}>
        <ul>
          <li><a href="#" /> 사이트 도움말</li>
          <li><a href="#" /> 약관</li>
          <li><a href="#" /> 개인정보 취급 방침</li>
          <li><a href="#" /> Q&A </li>
          <li><a href="#" /> 고객 센터</li>
        </ul>
        <address className={style.address}>
          cg456456@naver.com
        </address>
        <div className={style.copyright}>
          copyright  {'\u00A9'} HAZA ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  )
}

export default Footer;