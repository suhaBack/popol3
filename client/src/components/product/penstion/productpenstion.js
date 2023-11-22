import ProductListP from "./productlistP";
import "./productpenstion.css";
import StickyMenuP from "./stickymenuP";

function ProductPenstion() {
  return (
    <div className="motel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">펜 션</div>
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
        <StickyMenuP></StickyMenuP>
        <ProductListP></ProductListP>
      </div>
    </div>
  );
}


export default ProductPenstion;