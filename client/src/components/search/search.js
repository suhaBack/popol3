import "./../product/hotel/productHotel.css";
import "./search.css";
import StickyMenu from "./searchmenu";
import ProductList from "./searchlist";
import { useState } from 'react';

function Search() {
  const [selectedRegion, setSelectedRegion] = useState("지역선택하기");

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div className="hotel-container">
      <div className="searchpageTitle">
        <div className="container">
          <div className="searchTitle">검색결과</div>
        </div>
      </div>
      <div className="productpageGridBox container">
        <StickyMenu></StickyMenu>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default Search;
