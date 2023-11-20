import "./complete.css";


function Complete() {
  return (
    <div className="complete_container">
      <div>
        <p>성공적으로 예약 되었습니다.</p>
        <p class="gotomain"><a href="/"> {'>'} 메인화면으로 돌아가기</a></p>
        <p class="gotomain"><a href="/mypage"> {'>'} 예약 내역 상세정보 확인하기</a></p>
      </div>
    </div>
  )
}

export default Complete;