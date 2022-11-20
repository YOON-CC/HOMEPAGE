import React from 'react';
import './Home.css'

function Home() { 
    return (
        <body>
            {/* CHAN 제목*/}
            <div className="home">
                <h1 className="home_page_title">CHAN</h1>
            </div>

            {/* 카테고리*/}
            <div className="category">
                <h1 className="category_1">HOME</h1>
                <h1 className="space"></h1>
                <h1 className="category_2">ABOUT</h1>
                <h1 className="space"></h1>
                <h1 className="category_2">MYPAGE</h1>
                <h1 className="space"></h1>
                <h1 className="category_2">LOGIN</h1>
            </div>
        </body>

    );
}

export default Home;