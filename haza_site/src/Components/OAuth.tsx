import React from 'react';
import { Google } from '../OAuth/Google';
import { Kakao } from '../OAuth/Kakao';

import './App.css';

function OAuth() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OAuth 로그인 페이지 모음</h1>
        <button> 
          <Kakao></Kakao>  
        </button>
        <button>
          <Google></Google>
        </button>
      </header>
    </div>
  );
}

export {OAuth};
