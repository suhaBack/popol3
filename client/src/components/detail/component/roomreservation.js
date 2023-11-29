import "./roomreservation.css";
import room1 from "./../image/detailslide1.jpg";
import { useEffect, useState } from "react";
import { API_URL } from "../../config/contansts.js";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";

function RoomReservation() {
  const [roomData, setRoomData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [몇박, 몇박수정] = useState(1);
  const { id } = useParams();

  console.log(startDate);
  console.log(endDate);

  const getData = async () => {
    await axios
      .get(`${API_URL}/rooms/detail`, { params: { lodging_id: id } })
      .then((res) => {
        console.log(res);
        setRoomData(res.data);
      })
      .catch(console.log("lodging실패"));
  };

  useEffect(() => {
    getData();
  }, []);

  
  const calculateNightStay = async() => {
    if (startDate && endDate) {
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
      const nightStay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      await 몇박수정(`${nightStay}`);
    }
  };

  useEffect(() => {
    calculateNightStay();
  }, [startDate, endDate]);

  useEffect(() => {
    console.log(typeof(몇박));;
  }, [몇박]);

  return (
    <div className="RoomReservation_container">
      <div className="Calendar">
        <div className="dateBox">
          <div className="dateflexBox">
            <div className="dateflexBox2">
              <div>
                <span>체크인: </span>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    calculateNightStay();
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy/MM/dd"
                />
              </div>
              <span className="dateslash">/</span>
              <div>
                <span>체크아웃: </span>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    calculateNightStay();
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="yyyy/MM/dd"
                />
              </div>
            </div>
          </div>
        </div>
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
                  <Link
                    to="/payment"
                    state={{
                      room_id: a.room_id,
                      lodging_id: id,
                      startDate: startDate,
                      endDate: endDate,
                      price: a.price * 몇박,
                      몇박: 몇박,
                    }}
                  >
                    <button>
                      <p>
                        예약하기 | {a.price * 몇박}원 ({몇박}박)
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            //로그인할때 유저아이디 쿠키적기
          );
        })}
      </div>
    </div>
  );
}

export default RoomReservation;
