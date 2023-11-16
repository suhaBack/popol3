import "./productHotel.css";

function ProductHotel(){
  return (
    <div className="hotel-container">
      <div className="section-1">
        <div>
          <h1>호텔·리조트</h1>
          <div class="dropdown">
            <span class="dropbtn">지역선택하기</span>
              <div class="dropdown-content">
                <a href="#">서울</a>
                <a href="#">경기/인천</a>
                <a href="#">강원</a>
                <a href="#">대전</a>
                <a href="#">부산</a>
              </div>
          </div> 
        </div>
      </div>
      <div>
        <div className="section-2">
          <div className="select-date">
            <h3>날짜</h3>
            <label for="date">
              <input  
                type="date"
                id="date"
                max="2030-12-31"
                min="2020-01-01"
                value="2023-01-01">
              </input>
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
                <input type="checkbox" id="reserve" name="reservebox" value="reserve"/>
                <label for="reserve">예약가능</label>
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" id="promotion" name="promotionbox" value="promotion"/>
                <label for="promotion">프로모션</label>
              </li>
            </ul>
          </div>
          <div>
            <strong>호텔·리조트 유형</strong>
            <ul>
              <li>
                <input type="checkbox" id="5stars" name="5starsbox" value="5stars"/>
                <label for="5stars">5성급</label>
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" id="Express1" name="Express1box" value="Express1"/>
                <label for="Express1">특1급</label>
              </li>
            </ul>
            <ul>
              <li>
                <input type="checkbox" id="Express" name="Expressbox" value="Express"/>
                <label for="Express">특급</label>
              </li>
            </ul>
          </div>
          <div>
            <input type="hidden" id="persons" name="persons" value="2">
            </input>
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
                <button>싱글</button>
                <button>더블</button>
                <button>트윈</button>
                <button>온돌</button>
              </div>
          </div>
          <div>
            <strong>공용 시설</strong>
          </div>
          <div>
            <strong>객실 내 시설</strong>
          </div>
          <div>
            <strong>기타</strong>
          </div>

        </div>

        <div className="section-3">
          <div className="hotel-list">
            내용 추가 예정
          </div>
        </div>
      </div>
    </div>
  )
}


export default ProductHotel;