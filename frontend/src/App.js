import React, { useState } from "react";
import './App.css';
import Choice from './Choice'
import About from './About'

function App() {

  //카테고리 변경시 페이지 렌더링

  //화면 렌더링
  const [page, setPage] = useState(1) 
  //리턴 부분
  return (
    <body className='App_body'>

      {/* 상단 제목(메인 제목, 카테고리)*/}
      <header className="home_header">
        {/* CHAN 제목*/}
        <div className="home">
                <h1 className="home_page_title">CHAN</h1>
            </div>

            {/* 카테고리*/}
            <div className="category">
                <h1 className="category_1" onClick={() => setPage(1)} >HOME</h1>
                <h1 className="space"></h1>
                <h1 className="category_2" onClick={() => setPage(2)}>ABOUT</h1>
                <h1 className="space"></h1>
                <h1 className="category_3">MYPAGE</h1>
                <h1 className="space"></h1>
                <h1 className="category_3">LOGIN</h1>
            </div>
      </header>

      {/*렌더링 화면들*/}
      <div className="home_rendering">
        {
          page === 1
          ? <Choice></Choice>
          : ( page === 2 
              ? <About></About>
              : <p>첫번째 조건이 참이 아니고 두번째 조건도 참이 아니면 실행됩니다.</p> 
            )
        }
      </div>

    </body>
  );
}

export default App;