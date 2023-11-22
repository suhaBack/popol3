import "./roomreservation.css";
import aabbcc from "./../image/aabbcc.png";


function RoomReservation(){
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
  ]

  return(
    <div className="RoomReservation_container">
      <div className="Calendar">
        <input
          type="date"
          id="date"
          max="2030-12-31"
          min="2020-01-01"
          value="2023-01-01">
        </input>
      </div>
      <div className="roominfo">
        {roomdata.map((a, i)=>{
          return (
            <div>
              <div className="roominfo_img">
                <img src={aabbcc} id="roomimg"></img>
              </div>
              <div class="roominfo_text">
                <h3>{a.title}</h3>
                <p>{a.price}원</p>
                  <a href="/payment">
                    <button>
                      <p>예약하기 / {a.price}원</p>
                    </button>
                  </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )};

export default RoomReservation;