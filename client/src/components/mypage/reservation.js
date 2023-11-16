import img1 from './image/1.jpg'


function Reservation(){
  return (
    <div>
      <div>
        <span>예약 내역</span>
      </div>
      <div>
        <div>
          <span>이용 내역</span>
        </div>
        <div>
          <div>
            <img src={img1}></img>
          </div>
          <div>
            <span>이용완료</span>
            <h4>잠실체리</h4>
            <p>06.24 토 - 06.25 일 • 1박</p>
            <span>다시 예약</span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <span>취소 내역</span>
        </div>
        <div>
          <div>
            
          </div>
          <div>
            <span>예약취소</span>
            <h4>잠실 쿠키</h4>
            <p>06.24 토 - 06.25 일 • 1박</p>
            <span>다시 예약</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation;