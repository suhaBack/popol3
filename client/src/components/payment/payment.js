import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./payment.css";
import 할인 from "./../image/할인.png";
import 결제수단 from "./../image/결제수단.png";
import 개인정보 from "./../image/개인정보.png";
import axios from "axios";
import { API_URL } from "../config/contansts";
import { getCookie } from "../../useCookies";

function Payment() {
  const [allChecked, setAllChecked] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [roomData, setRoomData] = useState({});
  const [lodgingData, setLodgingData] = useState({});

  let [phoneNumber, setPhoneNumber] = useState("");
  let [consumerName, setConsumerName] = useState("");

  const data = useLocation().state; //{room_id:value, lodging_id:value}
  console.log(data.startDate);

  useEffect(() => {
    const getData = async () => {
      const roomdb = await axios
        .get(`${API_URL}/rooms/payment`, { params: { room_id: data.room_id } })
        .then((res) => {
          const list = res.data;
          console.log("roomdb", list);
          setRoomData(list);
        });
      const lodgingdb = await axios
        .get(`${API_URL}/lodging/payment`, {
          params: { lodging_id: data.lodging_id },
        })
        .then((res) => {
          const list = res.data;
          console.log("lodgingdb", list);
          setLodgingData(list);
        });
    };
    getData();
  }, []);

  const postData = async () => {
    await axios
      .post(`${API_URL}/bookings/newBook`, {
        start_date: data.startDate,
        end_date: data.endDate,
        price: roomData.price,
        room_id: data.room_id,
        user_id: getCookie("user_Code"),
      })
      .then(() => {
        console.log("성공");
      })
      .catch((e) => {
        console.log("에러남");
        console.error(e);
      });
  };

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
    setCheck1(!allChecked);
    setCheck2(!allChecked);
    setCheck3(!allChecked);
  };

  const handleSingleCheck = (checkbox) => {
    switch (checkbox) {
      case "check1":
        setCheck1(!check1);
        break;
      case "check2":
        setCheck2(!check2);
        break;
      case "check3":
        setCheck3(!check3);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setAllChecked(check1 && check2 && check3);
  }, [check1, check2, check3]);
  return (
    <div className="backGround" style={{ padding: "4vh 0" }}>
      <div className="container mainTitle" style={{ fontSize: "3vw" }}>
        결제하고
        <span className="ga" style={{ fontSize: "3.7vw" }}>
          가!
        </span>
      </div>
      <div id="jsw_container" className="container">
        <div id="Act1">
          <div className="reservationInfoBox">
            <div className="paymentTitleBox" style={{ marginTop: "0" }}>
              <img src={개인정보} height="100%"></img>
              <h3 style={{ padding: "0 1vw 0 0" }}>예약자 정보</h3>
            </div>

            <div className="reservationInputBox">
              <p>예약자 이름</p>
              <input
                type="text"
                name="newImage"
                id="contentTitle"
                placeholder=" 체크인시 필요한 정보입니다."
                value={consumerName}
                onChange={(e) => {
                  setConsumerName(e.target.value);
                }}
              ></input>
              {consumerName == "" && (
                <p style={{ fontSize: "1vw", color: "red" }}>
                  *이름를 입력해주세요.
                </p>
              )}
            </div>

            <div className="reservationInputBox">
              <p>휴대폰 번호</p>
              <p style={{ fontSize: "1.2vw" }}>
                개인 정보 보호를 위해 안심번호로 숙소에 전송됩니다.
              </p>
              <input
                type="text"
                name="newImage"
                id="contentTitle"
                placeholder=" 체크인시 필요한 정보입니다."
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              ></input>
              {phoneNumber == "" && (
                <p style={{ fontSize: "1vw", color: "red" }}>
                  *휴대폰 번호를 입력해주세요.
                </p>
              )}
            </div>
          </div>

          <div className="saleInfoBox">
            <div className="paymentTitleBox">
              <img src={할인} height="100%"></img>
              <h3>할인 수단 선택</h3>
            </div>

            <div className="saleGirdBox">
              <p>구매총액</p>
              <p>{data.price}원</p>
            </div>
            <div className="saleGirdBox">
              <button>사용 가능 쿠폰 0장</button>
              <span>-</span>
            </div>
            <div className="saleGirdBox">
              <p>일반쿠폰</p>
              <span>-</span>
            </div>
            <div className="saleGirdBox">
              <p>더하기 쿠폰</p>
              <span>-</span>
            </div>

            <div className="saleGirdBox">
              <button>포인트 사용</button>
              <input
                type="text"
                name="newImage"
                id="contentTitle"
                placeholder="0"
                style={{ width: "20%" }}
              ></input>
            </div>
            <div className="saleGirdBox">
              <button>상품권 사용</button>
              <span>-</span>
            </div>
          </div>

          <div className="paymentInfoBox">
            <div className="paymentTitleBox">
              <img src={결제수단} height="100%"></img>
              <h3>결제수단 선택</h3>
            </div>

            <select id="contnetKind">
              <option value={1}>카카오페이</option>
              <option value={3}>토스페이</option>
              <option value={4}>신용/체크 카드</option>
              <option value={2}>네이버페이</option>
              <option value={2}>법인카드</option>
              <option value={2}>휴대폰 결제</option>
            </select>
            <div className="paymentAgreeBox">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={allChecked}
                onChange={handleAllCheck}
                style={{ padding: "0.9vw" }}
              />
              <span style={{ fontSize: "1.7vw" }}>전체 동의</span>
            </div>
            <div className="paymentAgreeBox">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault1"
                checked={check1}
                onChange={() => handleSingleCheck("check1")}
              />
              <span>숙소이용규칙 및 취소/환불규정 동의(필수)</span>
            </div>
            <div className="paymentAgreeBox">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault2"
                checked={check2}
                onChange={() => handleSingleCheck("check2")}
              />
              <span>개인정보 수집 및 이용 동의(필수)</span>
            </div>
            <div className="paymentAgreeBox">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault3"
                checked={check3}
                onChange={() => handleSingleCheck("check3")}
              />
              <span>개인정보 제 3자 제공 동의(필수)</span>
            </div>
          </div>
        </div>

        <div id="Act2">
          <div className="Act2PositionBox">
            <div className="productInfoBox">
              <div>
                <span className="productInfoTitle">숙소이름</span>
                <p>{lodgingData.name}</p>
              </div>
              <div>
                <span className="productInfoTitle">객실타입/기간</span>
                <p>
                  [블랙프라이데이] ★조식 2인★
                  <br />
                  {roomData.type} / {data.몇박}박
                </p>
              </div>
              <div>
                <span className="productInfoTitle">체크인</span>
                <p>{data.startDate.toLocaleDateString()}</p>
              </div>
              <div>
                <span className="productInfoTitle">체크아웃</span>
                <p>{data.endDate.toLocaleDateString()}</p>
              </div>
            </div>

            <div className="paymentResultBox">
              <p>
                총 결제 금액 <span>(VAT포함)</span>
              </p>
              <p className="productprice" style={{ fontSize: "2vw" }}>
                {data.price}원
              </p>
              <ul>
                <li>해당 객실가는 세금, 봉사료가 포함된 금액입니다</li>
                <li>
                  결제완료 후 <a>예약자 이름</a>으로 바로 <a>체크인</a> 하시면
                  됩니다
                </li>
              </ul>
            </div>
            <div>
              <Link to="./complete">
                <button
                  className="paymentBtn"
                  onClick={() => {
                    postData();
                  }}
                >
                  결제하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
