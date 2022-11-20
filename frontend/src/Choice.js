import React, { useState } from "react";
import './Choice.css'

function Choice() { 
    
    return (
        <body>
            {/*화면표출*/}
            <div className="show">
                <div className="big_circle"></div>

                {/*서클1*/}
                <div className="circle_1">
                    <img class="circle_1_img"src="img/icon_1.png"></img>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>
                <div className="ME">
                    제가 누구인지 소개하는 페이지입니다.<br/>
                </div>

                {/*서클2*/}
                <div className="circle_2">
                    <img class="circle_2_img"src="img/icon_2.png"></img>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클3*/}
                <div className="circle_3">
                    <img class="circle_3_img"src="img/icon_3.png"></img>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클4*/}
                <div className="circle_4">
                    <img class="circle_4_img"src="img/icon_4.png"></img>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클5*/}
                <div className="circle_5">
                    <img class="circle_5_img"src="img/icon_5.png"></img>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

            </div>


        </body>

    );
}

export default Choice;