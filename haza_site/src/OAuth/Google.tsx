import React from 'react';

import './App.css';
interface GoogleProfile {
  sub: string, // 고유 ID
  name: string, // 이름
  given_name: string, // 이름?
  picture: string, // 프로필 사진
  email: string, // 이메일
  email_verified: boolean, // 이메일 인증 여부
  locale: string, // 언어
}

function Google() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          여기를 메인 페이지로 잡고 진행할 예정
          <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          
        </p>
      </header>
    </div>
  );
}

export {Google};
