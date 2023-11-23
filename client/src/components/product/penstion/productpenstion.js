import ProductListP from "./productlistP";
import "./../hotel/productHotel.css";
import StickyMenuP from "./stickymenuP";
import { useState } from 'react';

function ProductPenstion() {
  const [selectedRegion, setSelectedRegion] = useState("지역선택하기");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div className="motel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">펜션</div>
          <div>
            <span class="dropdown">
              <div className="dropbtn">
                <div>{selectedRegion}</div>
                <i class="fa-solid fa-caret-down"></i>
              </div>
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
        <StickyMenuP></StickyMenuP>
        <ProductListP></ProductListP>
      </div>
    </div>
  );
}

export default ProductPenstion;
