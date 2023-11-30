import { useState } from "react";
import "./../hotel/productHotel.css";
import StickyMenuM from "./stickymenuM";
import ProductListM from "./productlistM";

function ProductMotel() {
  const [selectedRegion, setSelectedRegion] = useState("지역선택하기");
  const [bedtype, setBedtype] = useState("");
  

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div className="motel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">모텔</div>
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
        <StickyMenuM bedtype={bedtype} setBedtype={setBedtype}></StickyMenuM>
        <ProductListM bedtype={bedtype}></ProductListM>
      </div>
    </div>
  );
}

export default ProductMotel;
