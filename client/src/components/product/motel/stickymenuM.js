import { useState } from "react";
import 싱글 from "./../../image/싱글.png";
import 더블 from "./../../image/더블.png";
import 트윈 from "./../../image/트윈.png";

function StickyMenuM() {
  const [customer, setCustomer] = useState(2);

  const handleSetCustomer = (value) => {
    // 최소값과 최댓값 설정
    const newValue = Math.max(2, Math.min(10, value));
    setCustomer(newValue);
  };
  return (
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
          <strong>모텔 유형</strong>
          <ul>
            <li>
              <input
                type="checkbox"
                id="5stars"
                name="5starsbox"
                value="5stars"
              />
              <label for="5stars">객실내 PC</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Express1"
                name="Express1box"
                value="Express1"
              />
              <label for="Express1">애완동반</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Express"
                name="Expressbox"
                value="Express"
              />
              <label for="Express">주차가능</label>
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
  );
}

export default StickyMenuM;