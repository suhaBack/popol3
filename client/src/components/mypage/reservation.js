import img1 from './image/잠실체리.jpg'
import img2 from './image/잠실쿠키.jpg'
import img3 from './image/신림 홀리데이.jpg'
import img4 from './image/상봉 호텔버스.jpg'
import img5 from './image/용전 더휴식 노크인호텔.jpg'
import './reservation.css'
// import img6 from './image/수원역 썸.jpg'


function Reservation(){
  return (
    <div id='jsw_maincontainer'>
      <div>
        <span>예약 내역</span>
      </div>
      <div id='jsw_subcontainer'>
        <div>
          <span>이용 내역</span>
        </div>
        <div class="jsw_01">
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
        <div class="jsw_02">
          <div>
            <img src={img3}></img>
          </div>
          <div class="jsw_text">
            <span>이용완료</span>
            <h4>신림 홀리데이</h4>
            <p>06.05 월 - 06.06 화 • 1박</p>
            <span>다시 예약</span>
          </div>
        </div>
        <div class="jsw_01">
          <div>
            <img src={img4}></img>
          </div>
          <div>
            <span>이용완료</span>
            <h4>상봉 호텔버스</h4>
            <p>02.18 토 - 02.19 일 • 1박</p>
            <span>다시 예약</span>
          </div>
        </div>
        <div class="jsw_02">
          <div>
            <img src={img5}></img>
          </div>
          <div>
            <span>이용완료</span>
            <h4>용전 더휴식 노크인호텔</h4>
            <p>06.27 월 - 06.28 화 • 1박</p>
            <span>다시 예약</span>
          </div>
        </div>
      </div>

      <div class='jsw_03'>
        <div>
          <span>취소 내역</span>
        </div>
        <div>
          <div>
            <img src={img2}></img>
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