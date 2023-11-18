import img1 from "./image/잠실체리.jpg";
import img2 from "./image/잠실쿠키.jpg";
import img3 from "./image/신림 홀리데이.jpg";
import img4 from "./image/상봉 호텔버스.jpg";
import img5 from "./image/용전 더휴식 노크인호텔.jpg";
import img6 from "./image/수원역 썸.jpg";
import "./reservation.css";
import { useState } from "react";
import 결과없음 from "./../image/결과없음.png";

function Reservation() {
  let [reservationdata, setReservationdata] = useState([
    // {
    //   id: 1,
    //   img: img1,
    //   title: "숙소이름1",
    //   date: "이용날짜1",
    // },
    // {
    //   id: 2,
    //   img: img2,
    //   title: "숙소이름2",
    //   date: "이용날짜2",
    // },
    // {
    //   id: 3,
    //   img: img3,
    //   title: "숙소이름3",
    //   date: "이용날짜3",
    // },
  ]);

  let [usedata, setUsedata] = useState([
    {
      id: 1,
      img: img1,
      title: "숙소이름1",
      date: "이용날짜1",
    },
    {
      id: 2,
      img: img2,
      title: "숙소이름2",
      date: "이용날짜2",
    },
    {
      id: 3,
      img: img3,
      title: "숙소이름3",
      date: "이용날짜3",
    },
    {
      id: 4,
      img: img4,
      title: "숙소이름4",
      date: "이용날짜4",
    },
  ]);

  let [canceldata, setCanceldata] = useState([
    // {
    //   id: 1,
    //   img: img1,
    //   title: "숙소이름1",
    //   date: "이용날짜1",
    // },
    // {
    //   id: 2,
    //   img: img2,
    //   title: "숙소이름2",
    //   date: "이용날짜2",
    // },
    // {
    //   id: 3,
    //   img: img3,
    //   title: "숙소이름3",
    //   date: "이용날짜3",
    // },
    // {
    //   id: 4,
    //   img: img4,
    //   title: "숙소이름4",
    //   date: "이용날짜4",
    // },
  ]);

  console.log(reservationdata);

  return (
    <div id="jsw_maincontainer">
      <div className="reservationContentBox">
        <div className="usepageTitle">
          <span>예약 내역</span>
        </div>
        {reservationdata == "" ? (
          <div className="reservationComentBox">
            <img src={결과없음}></img>
            <div className="reservationComent">예약 내역이 없습니다.</div>
            <div className="reservationSubComent">
              최저가로 예약
              <br />
              숙소들을 지금 만나세요!
            </div>
            <div className="reservationMoreBtnBox">
              <div>다양한 숙소 보러가기</div>
            </div>
          </div>
        ) : (
          <div className="usepageGridBox">
            {reservationdata.map((a, i) => {
              return (
                <div class="jsw_01">
                  <div>
                    <img src={a.img}></img>
                  </div>
                  <div className="useCardBox">
                    <div>
                      <p>예약완료</p>
                      <h4>{a.title}</h4>
                      <p>{a.date}</p>
                    </div>

                    <div className="rereservationBtnBox">
                      <p>예약 취소</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div id="jsw_subcontainer">
        <div className="usepageTitle">
          <span>이용 내역</span>
        </div>
        {usedata == "" ? (
          <div className="reservationComentBox">
            <img src={결과없음}></img>
            <div className="reservationComent">이용 내역이 없습니다.</div>
            <div className="reservationSubComent">
              최저가로 예약
              <br />
              숙소들을 지금 만나세요!
            </div>
            <div className="reservationMoreBtnBox">
              <div>다양한 숙소 보러가기</div>
            </div>
          </div>
        ) : (
          <div className="usepageGridBox">
            {usedata.map((a, i) => {
              return (
                <div class="jsw_01">
                  <div>
                    <img src={a.img}></img>
                  </div>
                  <div className="useCardBox">
                    <div>
                      <p>이용완료</p>
                      <h4>{a.title}</h4>
                      <p>{a.date}</p>
                    </div>

                    <div className="rereservationBtnBox">
                      <p>다시 예약</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="reservationContentBox">
        <div className="usepageTitle">
          <span>취소 내역</span>
        </div>
        {canceldata == "" ? (
          <div className="reservationComentBox">
            <img src={결과없음}></img>
            <div className="reservationComent">취소 내역이 없습니다.</div>
          </div>
        ) : (
          <div className="usepageGridBox">
            {usedata.map((a, i) => {
              return (
                <div class="jsw_01">
                  <div>
                    <img src={a.img}></img>
                  </div>
                  <div className="useCardBox" style={{display: "block"}}>
                      <p>취소완료</p>
                      <h4>{a.title}</h4>
                      <p>{a.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservation;
