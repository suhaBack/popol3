import "./productguesthouse.css";
import ProductListG from "./productlistG";
import StickyMenuG from "./stickymenuG";

function productguesthouse() {
  return (
    <div className="hotel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">게스트하우스</div>
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
        <StickyMenuG></StickyMenuG>
        <ProductListG></ProductListG>
      </div>
    </div>
  );
}

export default productguesthouse;