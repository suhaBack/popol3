import "./productcamping.css";
import ProductListC from "./productlistC";
import StickyMenuC from "./stickymenuC";

function ProductCamping(){
  return (
    <div className="hotel-container">
    <div className="productpageTitle">
      <div className="container">
        <div className="productTitle">캠핑</div>
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
      <StickyMenuC></StickyMenuC>
      <ProductListC></ProductListC>
    </div>
  </div>
);
}
export default ProductCamping;