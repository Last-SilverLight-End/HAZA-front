import React from 'react';

import style from '@styles/footer.module.css';



const Footer : React.FC = () =>{

  
    const getTodayDate = () =>{
        const getNow = new Date();
        const getMonth = getNow.getMonth()+1;
        const getYear = getNow.getFullYear();


    const getDate = getNow.getDate();

    return [getYear,getMonth,getDate].join('.');
  }

  return (
    <footer className={style.footer}>
      <h1>Footer 입니다.</h1>
      <div className={style.div}>
      <ul>
        <li><a href='#'/></li>
        <li><a href='#'/> 문의사항 </li> 
      </ul>
      </div>
        <div className={style.copyright}>
        ⓒ {getTodayDate()} HAZA , ALL RIGHTS RESERVED
        </div>
    </footer>
  );
}

export default Footer;
