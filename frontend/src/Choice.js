import React, { useState } from "react";
import './Choice.css'


function Choice() {
    
    return (
        <body>
            {/*화면표출*/}
            <div className="show">
                <div className="big_circle"></div>

                {/*서클1*/}
                <div className="circle_1" draggable="true">
                    <img class="circle_1_img" src="img/icon_1.png" ></img>
                    <p className="text_1">Who am I</p>
                </div>
                {/*줌!*/}
                <div className="zoom"> 
                </div>

                {/*서클2*/}
                <div className="circle_2">
                    <img class="circle_2_img"src="img/icon_2.png"></img>
                    <p className="text_2">My experiences</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클3*/}
                <div className="circle_3">
                    <img class="circle_3_img"src="img/icon_3.png"></img>
                    <p className="text_3">Etc</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클4*/}
                <div className="circle_4">
                    <img class="circle_4_img"src="img/icon_4.png"></img>
                    <p className="text_4">My memory</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

                {/*서클5*/}
                <div className="circle_5">
                    <img class="circle_5_img"src="img/icon_5.png"></img>
                    <p className="text_5">My study</p>
                </div>
                {/*줌!*/}
                <div className="zoom"></div>

            </div>


        </body>

    );
}

export default Choice;