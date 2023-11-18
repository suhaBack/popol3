
function Room(){
  return(
    <div className="room">
      <div className="Calendar">
        <input
                type="date"
                id="date"
                max="2030-12-31"
                min="2020-01-01"
                value="2023-01-01">
        </input>
      </div>
      <div className="room1">
        <div className="photo1">
          이미지
        </div>
        <div className="content1">
          <div className="Place1">
            <h3>스파빌(201호)</h3>
          </div>
          <div className="Price1">
            <p>310,000</p>
            <div className="discount1">
              <p>가격</p>
              <b>209,999원</b>
            </div>
            <div className="Advice1">
              <button type="button" onclick="">
                "객실 이용 안내"
              </button>
            </div>
          </div>
        </div>
        <div className="Reservation1">
          <button class="favorite styled" type="button">
            예약
          </button>
        </div>
      </div>

      <div className="room2">
        <div className="photo2">
          이미지
        </div>
        <div className="content2">
          <div className="Place2">
            <h3>스파빌(201호)</h3>
          </div>
          <div className="Price2">
            <p>310,000</p>
            <div className="discount2">
              <p>가격</p>
              <b>209,999원</b>
            </div>
            <div className="Advice2">
              <button type="button" onclick="">
                "객실 이용 안내"
              </button>
            </div>
          </div>
        </div>
        <div className="Reservation2">
          <button class="favorite styled" type="button">
            예약
          </button>
        </div>
      </div>

      <div className="room3">
        <div className="photo3">
          이미지
        </div>
        <div className="content3">
          <div className="Place3">
            <h3>스파빌(201호)</h3>
          </div>
          <div className="Price3">
            <p>310,000</p>
            <div className="discount3">
              <p>가격</p>
              <b>209,999원</b>
            </div>
            <div className="Advice3">
              <button type="button" onclick="">
                "객실 이용 안내"
              </button>
            </div>
          </div>
        </div>
        <div className="Reservation3">
          <button class="favorite styled" type="button">
            예약
          </button>
        </div>
      </div>
    </div>
  )};

export default Room;