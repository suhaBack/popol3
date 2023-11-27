import "./roomreservation.css";
import ReservationCalendar from "./../date/date.js";
import room1 from "./../image/detailslide1.jpg";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/contansts.js";
import axios from "axios";
import { useParams } from "react-router-dom";

function RoomReservation() {
  const [roomData, setRoomData] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    await axios
      .get(`${API_URL}/rooms/detail`, { params: { lodging_id: id } })
      .then((res) => {
        console.log(res);
        setRoomData(res.data)
      });
    // .catch(console.log("lodging실패"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="RoomReservation_container">
      <div className="Calendar">
        <ReservationCalendar></ReservationCalendar>
      </div>
      <div className="roominfo">
        {roomData.map((a, i) => {
          return (
            <div className="roominfo_box">
              <div className="roominfo_img">
                <img src={room1} id="roomimg"></img>
              </div>
              <div class="roominfo_text">
                <div class="roominfo_text_flex">
                  <h3>{a.type}</h3>
                  <div>
                    <p>가격</p>
                    <p>{a.price}원/1박</p>
                  </div>
                </div>
                <div className="roominfo_reservationBtn">
                  <div className="roominfo_importent">
                    <div>
                      - 해당 숙소는 예약 대기상태이며, 숙소의 확인 후 예약확정
                      여부가 문자로 발송됩니다.
                    </div>
                    <div>
                      - 숙소의 사정으로 예약 불가능한 경우 결제된 금액은 자동을
                      취소됩니다.
                    </div>
                  </div>
                  <a href="/payment">
                    <button>
                      <p>예약하기 | {a.price}원 (1박)</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomReservation;
