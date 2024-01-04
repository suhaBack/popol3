import "./pushinquiry1.css"

function Pushinquiry2(props) {
  return (
    <div className="Pushinquiry2_main">

      <div>
        <div>
          <div className='CHM_pq1tt'>카테고리유형</div>

          <select name="language" id="language">
            <option value="main">카테고리유형을 선택하세요</option>
            <option value="1">모텔</option>
            <option value="2">호텔·리조트</option>
            <option value="3">펜션</option>
            <option value="4">게스트하우스</option>
            <option value="5">캠핑/글램핑</option>
            <option value="6">한옥</option>
            <option value="7">액티비티</option>
            <option value="8">현금성(유상)포인트</option>
          </select>
        </div>

        <div>
          <div className='CHM_pq1tt'>문의유형</div>

          <select name="language" id="language">
            <option value="main">문의유형을 선택하세요</option>
            <option value="1">이벤트</option>
            <option value="2">예약/결제</option>
            <option value="3">취소/환불</option>
            <option value="4">이용문의</option>
            <option value="5">회원정보</option>
            <option value="6">리뷰</option>
            <option value="7">환불신청</option>
          </select>
        </div>

        <div>
          <div className='CHM_pq1tt'>휴대폰 번호</div>
          <input type="text" placeholder="선택사항입니다." />
        </div>
        <div>
          <div className='CHM_pq1tt'>이메일</div>
          <input type="text" placeholder="선택사항입니다." />
        </div>
        <div>
          <div className='CHM_pq1tt custom-input'>문의 내용</div>
          <input
            type="text"
            placeholder="문의하실 내용을 10자 이상 입력해 주세요."
            style={{height: "10vw"}}
          />

        </div>
        <div className='CHM_pq1ct'>
        * 여기어때 이용 중 불편하신 점을 문의주시면 최대한 빠른 시일 내에 답변
        드리겠습니다.
      </div>
        <div className='CHM_pq1bt'>
          <button>작성 완료</button>
        </div>
      </div>
    </div>
  );
}

export default Pushinquiry2;