import React, { useState } from "react";
import "./../hotel/productHotel.css";
import ProductListC from "./productlistC";
import StickyMenuC from "./stickymenuC";

function ProductCamping() {
  const [selectedRegion, setSelectedRegion] = useState("지역선택하기");
  const [bedtype, setBedtype] = useState("");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="hotel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">캠핑·글램핑</div>
          <div>
            <span className="dropdown">
              <span className="dropbtn">
                {selectedRegion} <i className="fa-solid fa-caret-down"></i>
              </span>
              <div className="dropdown-content" style={{ margin: 0 }}>
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
        <StickyMenuC bedtype={bedtype} setBedtype={setBedtype}></StickyMenuC>
        <ProductListC bedtype={bedtype}></ProductListC>
      </div>
    </div>
  );
}

export default ProductCamping;
