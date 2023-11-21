import { useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "../../../config/contansts";
import "./productHotel.css";
import 싱글 from "./../../image/싱글.png";
import 더블 from "./../../image/더블.png";
import 트윈 from "./../../image/트윈.png";
import product1 from "./../image/product1.jpg";
import product2 from "./../image/product2.jpg";
import product3 from "./../image/product3.jpg";
import product4 from "./../image/product4.jpg";
import product5 from "./../image/product5.jpg";

function ProductHotel() {
  const [productbasedata, setProductbasedata] = useState([]);
  const [customer, setCustomer] = useState(2);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  useEffect(()=>{
    const getList = async () => {
      await axios.get(`${API_URL}/lodging`)
      .then((result)=>{
        const items = result.data
        console.log("items",items);
        setProductbasedata(items)
      })
      .catch((e)=>{
        console.log(e);
      })
      
    }
    getList();
  },[]);
  console.log('new',productbasedata);
  const handleSetCustomer = (value) => {
    // 최소값과 최댓값 설정
    const newValue = Math.max(2, Math.min(10, value));
    setCustomer(newValue);
  };


  const itemsPerPage = 4; // 한 페이지당 표시할 공지사항 수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productbasedata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(productbasedata.length / itemsPerPage);
  const maxVisiblePages = 5; // 보이는 페이지 숫자의 최대 개수
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="hotel-container">
      <div className="productpageTitle">
        <div className="container">
          <div className="productTitle">호텔·리조트</div>
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
        <div className="section-1">
          <div className="section-1Box">
            <div className="select-date">
              <h3>날짜</h3>
              <label for="date">
                <input
                  type="date"
                  id="date"
                  max="2030-12-31"
                  min="2020-01-01"
                ></input>
              </label>
            </div>
            <div className="condition">
              <h3>상세조건</h3>
              <div className="conditionBtnBox">
                <button className="conditionBtn1">초기화</button>
                <button className="conditionBtn2">적용</button>
              </div>
            </div>
            <div className="reserve">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="reserve"
                    name="reservebox"
                    value="reserve"
                  />
                  <label for="reserve">예약가능</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="promotion"
                    name="promotionbox"
                    value="promotion"
                  />
                  <label for="promotion">프로모션</label>
                </li>
              </ul>
            </div>
            <div className="productType">
              <strong>호텔·리조트 유형</strong>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="5stars"
                    name="5starsbox"
                    value="5stars"
                  />
                  <label for="5stars">5성급</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Express1"
                    name="Express1box"
                    value="Express1"
                  />
                  <label for="Express1">특1급</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Express"
                    name="Expressbox"
                    value="Express"
                  />
                  <label for="Express">특급</label>
                </li>
              </ul>
            </div>
            <div className="customerCounterBox">
              <strong>인원</strong>
              <div className="customerCounter">
                <button
                  onClick={() => {
                    handleSetCustomer(customer - 1);
                  }}
                >
                  -
                </button>
                <span>{customer}</span>
                <button
                  onClick={() => {
                    handleSetCustomer(customer + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="bedTypeBox">
              <strong>배드 타입</strong>
              <div className="bedTypeGridBox">
                <div className="bedType1">
                  <img src={싱글} width="100%"></img>
                  <div>싱글 배드</div>
                </div>
                <div className="bedType">
                  <img src={더블} width="100%"></img>
                  <div>더블 배드</div>
                </div>
                <div className="bedType3">
                  <img src={트윈} width="100%"></img>
                  <div>트윈 배드</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="">
            <div className="product-list">
              <div className="productPageListTitle">
                <div>추천 호텔</div>
                <span className="productpageMapBtn">
                  <i className="fa-solid fa-map"></i>지도
                </span>
              </div>
              <div className="product-list-gridBox">
                {currentItems.map((a) => {
                  return(
                  <div className="productBgImg">
                    <img src={a.img}></img>
                    <div className="productpagecontect">
                      <div className="productpagepdtitle">{a.name}</div>
                      <div className="productpagepdevaluation">
                        {a.rating} 만족해요 ({a.review_count})
                      </div>
                      <div className="productpagepdlocation">
                        {a.location}
                      </div>
                    </div>
                  </div>
                )
                })}
              </div>
              <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={productbasedata.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
            />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
  pageNumbers,
}) {
  return (
    <div className="pagination">
      {" "}
      {/* 현재 페이지의 위치를 알려주는 컴포넌트 */}
      {currentPage > 1 && (
        <span onClick={() => onPageChange(currentPage - 1)}>&laquo;</span>
      )}
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </span>
      ))}
      {currentPage < totalPages && (
        <span onClick={() => onPageChange(currentPage + 1)}>&raquo;</span>
      )}
    </div>
  );
}

export default ProductHotel;
