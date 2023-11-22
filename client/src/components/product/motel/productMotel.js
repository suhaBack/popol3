import { useEffect, useState } from "react";
import "./productmotel.css";
import axios from "axios";
import { API_URL } from "../../config/contansts";
import StickyMenuM from "./stickymenuM";
import ProductListM from "./productlistM";

function ProductMotel() {
  return (
    <div className="motel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">모 텔</div>
          <div>
            <span class="dropdown">
              <span className="dropbtn">
                지역선택하기 <i class="fa-solid fa-caret-down"></i>
              </span>
              <div class="dropdown-content" style={{ margin: 0 }}>
                <a href="#">- 서울</a>
                <a href="#">- 경기/인천</a>
                <a href="#">- 강원</a>
                <a href="#">- 대전</a>
                <a href="#">- 부산</a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="productpageGridBox container">
        <StickyMenuM></StickyMenuM>
        <ProductListM></ProductListM>
      </div>
    </div>
  );
}


export default ProductMotel;