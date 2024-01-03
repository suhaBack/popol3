import "./pushinquiry1.css"

function Pushinquiry2(props) {
  return (
    <div className="Pushinquiry2_main">
      <div className="Pushinquiry2_main1">
        <h4>여기어때 이용 중 불편하신 점을 문의주시면 최대한 빠른 시일 내에 답변 드리겠습니다.</h4>
      </div>
      <div className="Pushinquiry2_main2">
        <div className="inquiry1">
          <span>카테고리유형</span><br></br>
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
        <div className="inquiry1">
          <span>문의유형</span><br></br>
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
        <div className="inquiry1">
          <span>휴대폰 번호</span><br/>
          <input type="text" placeholder="선택사항입니다."/>
        </div>
        <div className="inquiry1">
          <span>이메일</span><br/>
          <input type="text" placeholder="선택사항입니다."/>
        </div>
        <div className="inquiry1">
          <span>문의 내용</span><br/>
          <input type="text"  placeholder="문의하실 내용을 10자 이상 입력해 주세요.<br/>
          문의하시는 제휴점 이름과 예약정보를 남겨주시면 보다 빠른 상담이 가능합니다.<br/>
          문의 내용 작성시 개인정보가 입력되지 않도록 주의 부탁드립니다."/>
        </div>
        <div>
          <button>작성 완료</button>
        </div>
      </div>
    </div>
  );
}

export default Pushinquiry2;
