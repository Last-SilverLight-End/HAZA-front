import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import {Community} from '../Components/Community';
import {Survey} from '../Components/Survey';
const router = createBrowserRouter([
  // 메인 홈페이지 관련 라우터
  {
    path: "/",
    element: <Home />,
    children: [
      {
        // 따로 로그인 창
        path: "dashboard",
        element: <Home />,
      },
      {
        // 따로 이 홈페이지에 관하여 생성
        path: "about",
        element: <Home />,
      },
    ],
    
  },
  // 커뮤니티 관련 라우터
  {
    path: "/Community",
    element: <Community/>,
  },
  // 설문 관련 라우터
  {
    path: "/Survey",
    element: <Survey/>,
  },
]);

export default router;