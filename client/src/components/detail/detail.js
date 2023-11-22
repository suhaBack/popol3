import React, { useEffect, useState } from "react";
import "./detail.css";
import RoomReservation from "./component/roomreservation";
import RoomInformation from "./component/roominformation";
import Review from "./component/review";
import abc from "./image/abc.png";
import ReservationCalendar from "./date/date";

function Detail() {
  const [button, setButton] = useState("객실안내/예약");

  const ButtonClick = (selectButton) => {
    setButton(selectButton);
  };

  const [end, setEnd] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [button]);
  return (
    <div className="backGround">
      <div className="detailpage container">
        <div className="detailGridBox">
          <div className="detailImgdBox">
            <img src={abc} alt="사진추가예정"></img>
            <div className="imgslider"></div>
          </div>
          <div className="right">
            <div className="info">
              <h2>호텔 크레센도 서울</h2>
              <p className="adress">서울 강남구 삼성동 113-5</p>
              <div className="comment">
                <h4>사장님 한마디</h4>
                <div>
                  <div>
                    컴팩트하고 아늑한 객실과 최고급 구스다운 침구,
                    매트릭스(시몬스) 제공
                    <br />
                    "9호선, 분당선 '선정릉역' 3번출구 도보 3분 거리 위치 /
                    코엑스, 봉은사 도보 이동 가능"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="detailPageTab">
          <button
            className={button === "객실안내/예약" ? "active" : ""}
            onClick={() => ButtonClick("객실안내/예약")}
          >
            객실안내/예약
          </button>
          <button
            className={button === "숙소정보" ? "active" : ""}
            onClick={() => ButtonClick("숙소정보")}
          >
            숙소정보
          </button>
          <button
            className={button === "리뷰" ? "active" : ""}
            onClick={() => ButtonClick("리뷰")}
          >
            리뷰
          </button>
        </div>

        <div className="room/booking">
          {button === "객실안내/예약" && (
            <div className={"start " + end}>
              <RoomReservation
                button={button}
                setButton={setButton}
              ></RoomReservation>
            </div>
          )}
        </div>
        <div className="roominfo">
          {button === "숙소정보" && (
            <div className={"start " + end}>
              <RoomInformation
                button={button}
                setButton={setButton}
              ></RoomInformation>
            </div>
          )}
        </div>
        <div className="review">
          {button === "리뷰" && (
            <div className={"start " + end}>
              <Review button={button} setButton={setButton}></Review>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
