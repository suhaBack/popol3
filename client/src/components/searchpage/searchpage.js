import "./searchpage.css";
import StickyMenu from "./../product/hotel/stickymenu";
// import Recommend_main from "./recommend_main";
import { useState } from 'react';

function Searchpage() {
  const [selectedRegion, setSelectedRegion] = useState("지역선택하기");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div className="hotel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">무엇을 찾으시나요?</div>
          <div>
            <span class="dropdown">
              <span className="dropbtn">
              {selectedRegion} <i class="fa-solid fa-caret-down"></i>
              </span>
              <div class="dropdown-content" style={{ margin: 0 }}>
              <a href="#" onClick={() => handleRegionChange("서울")}>
                  - 서울
                </a>
                <a href="#" onClick={() => handleRegionChange("경기/인천")}>
                  - 경기/인천
                </a>
                <a href="#" onClick={() => handleRegionChange("강원")}>
                  - 강원
                </a>
                <a href="#" onClick={() => handleRegionChange("대전")}>
                  - 대전
                </a>
                <a href="#" onClick={() => handleRegionChange("부산")}>
                  - 부산
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="productpageGridBox container">
        <StickyMenu></StickyMenu>
        {/* <Recommend_main></Recommend_main> */}
      </div>
    </div>
  );
}



export default Searchpage;