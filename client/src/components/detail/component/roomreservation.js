import "./roomreservation.css";
import aabbcc from "./../image/aabbcc.png";
import ReservationCalendar from "./../date/date.js";

function RoomReservation() {
  let roomdata = [
    {
      id: 1,
      title: "부티크 킹 테라스",
      price: "364,667",
    },
    {
      id: 2,
      title: "파노라믹 스위트",
      price: "430,667",
    },
  ];

  return (
    <div className="RoomReservation_container">
      <div className="Calendar">
        <ReservationCalendar></ReservationCalendar>
      </div>
      <div className="roominfo">
        {roomdata.map((a, i) => {
          return (
            <div className="roominfo_box">
              <div className="roominfo_img">
                <img src={aabbcc} id="roomimg"></img>
              </div>
              <div class="roominfo_text">
                <div class="roominfo_text_flex">
                  <h3>{a.title}</h3>
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
