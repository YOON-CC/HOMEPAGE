import React, { useState } from "react";
import './About.css'

function About() { 
    
    return (
        <body>
            {/* 화면표출*/}
            <div className="About_page">
                <img class = "cho_yoon_chan" src="img/Cho_yoon_chan.png"></img>
                <text class = "introduce">
                    안녕하세요! 저는 조윤찬이라고 합니다.<br/>
                    여기는 저라는 사람을 담아둔 홈페이지 입니다.<br/>
                    컴퓨터공학을 전공하면서 제 꿈을 실천한 장소이기도 합니다.<br/>
                    오늘도 즐거운 하루 되세요~<br/>
                </text>
            </div>

        </body>

    );
}

export default About;