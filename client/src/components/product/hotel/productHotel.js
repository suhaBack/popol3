import "./productHotel.css";

function ProductHotel() {
  return (
    <div className="hotel-container">
      <div className="productpageTitle">
        <div className="container">
          <div>호텔·리조트</div>
          <div class="dropdown">
            <span class="dropbtn">
              지역선택하기 <i class="fa-solid fa-caret-down"></i>
            </span>
            <div class="dropdown-content" style={{ margin: 0 }}>
              <a href="#">- 서울</a>
              <a href="#">- 경기/인천</a>
              <a href="#">- 강원</a>
              <a href="#">- 대전</a>
              <a href="#">- 부산</a>
            </div>
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
                  value="2023-01-01"
                ></input>
              </label>
            </div>
            <div className="condition">
              <h3>상세조건</h3>
              <button>초기화</button>
              <button>적용</button>
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
            <div>
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
            <div>
              <input
                type="hidden"
                id="persons"
                name="persons"
                value="2"
              ></input>
              <strong>인원</strong>
              <div>
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
            <div>
              <strong>배드 타입</strong>
              <div>
                <button>싱글 배드</button>
                <button>더블 배드</button>
                <button>트윈 배드</button>
                <button>온돌</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="">
            <div className="button-list">
              <button>추천 순</button>
              <button>가격 낮은 순</button>
              <button>높은 가격 순</button>
              &nbsp; <button>지도</button>
            </div>
            <div className="hotel-list">
              <div class="title">인기추천</div>
              <div className="hotel-1">
                <li>
                  <a href="">
                    {" "}
                    {/*div의 a태그 안에 사진이 꽉차게 들어가고 p는 사진위에 올라가야 함*/}
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-2">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-3">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-4">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-5">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-6">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-7">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
              <div className="hotel-8">
                <li>
                  <a href="">
                    <div class="name">
                      <p>ㅁ 성급</p>
                      <p>호텔 이름 넣는곳</p>
                      <p>평점: 7.5</p>
                      <p>ㅁㅁ구 | ㅁㅁ역 부근 5분거리</p>
                    </div>
                    <div class="price">
                      <p>ㅁㅁㅁㅁ원</p>
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHotel;
