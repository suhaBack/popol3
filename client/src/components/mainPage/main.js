import "./main.css";
import IntroSlider from './introSlider/introSlider';
import SlideShow from "./imageScroll/image";
import { Issue } from "./issue/issue";
import Addask from "./addask/addask";
import 게스트하우스 from "./../image/게스트하우스.png";
import 모텔 from "./../image/모텔.png";
import 캠핑 from "./../image/캠핑.png";
import 펜션 from "./../image/펜션.png";
import 해외여행 from "./../image/해외여행.png";
import 호텔 from "./../image/호텔.png";
import slider1 from "./../image/slider1.png";
import slider2 from "./../image/slider2.png";
import slider3 from "./../image/slider3.png";
import { useState } from "react";

function Main() {
  // id pwd name email phone kind(0일반회원,1사업자)
  // 모텔 호텔 펜션 게스트하우스 캠핑 해외
  const images = [
    slider1,
    slider2,
    slider3,
    // 추가 이미지 URL 추가
  ];
  return (
    <div className="backGround">
      <IntroSlider></IntroSlider>
      <div className="container">
        <div className="mainCategory">
          <div className="mainTitle">
            여기로 왔다<span className="ga">가!</span>
          </div>
          <ul className="mainCategoryGridBox">
            <li>
              <img src={모텔} width="100%"></img>
              <p>모텔</p>
            </li>
            <li>
              <img src={호텔} width="100%"></img>
              <p>호텔/리조트</p>
            </li>
            <li>
              <img src={펜션} width="100%"></img>
              <p>펜션</p>
            </li>
            <li>
              <img src={게스트하우스} width="100%"></img>
              <p>게스트하우스</p>
            </li>
            <li>
              <img src={캠핑} width="100%"></img>
              <p>캠핑/글램핑</p>
            </li>
            <li>
              <img src={해외여행} width="100%"></img>
              <p>해외여행</p>
            </li>
          </ul>
        </div>
        <Issue></Issue>
        <SlideShow images={images}></SlideShow>
        <Addask></Addask>
      </div>
    </div>
  );
}

export default Main;
