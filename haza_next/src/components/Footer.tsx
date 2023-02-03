import style from '@/styles/Footer.module.css';
import useRouter from 'next/router';
import { FC } from 'react';

const Footer: FC = () => {

  return (
    <footer className="bg-zinc-300/75 pt-3 pb-3 text-align">
      <div className=" text-center " >
        <ul className=" inline-flex uppercase space-x-4
                    font-roboto font-semibold text-black cursor-pointer divide-x-2 divide-gray-700">
          <li><a className=" px-2" href="#" /> 사이트 도움말</li>
          <li><a className=" px-2" href="#" /> 약관</li>
          <li><a className=" px-2" href="#" /> 개인정보 취급 방침</li>
          <li><a className=" px-2" href="#" /> Q&A </li>
          <li><a className=" px-2"href="#" /> 고객 센터</li>
        </ul>
        <address className="decoration-lime-600 not-italic pt-2">
          cg456456@naver.com
        </address>
        <div className="pt-2">
          copyright  {'\u00A9'} HAZA ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  )
}

export default Footer;