import "./Yea.css";

function Yea() {
  return(
    <div id="jsw_container">

      <div id="Act1">  

        <div>
          <div>
            <h3>예약자 정보</h3>
          </div>

          <div>
            <p>예약자 이름</p>
            <input type="text" name="newImage" id="contentTitle" placeholder=" 체크인시 필요한 정보입니다."></input>
          </div>

          <div>
            <p>휴대폰 번호</p>
            <span>개인 정보 보호를 위해 안심번호로 숙소에 전송됩니다.</span>
            <input type="text" name="newImage" id="contentTitle" placeholder=" 체크인시 필요한 정보입니다."></input>
            <p>휴대폰 번호를 확인해 주세요.</p>
          </div>
        </div>


        <div>
          <div>
            <h3>할인 수단 선택</h3>
          </div>

          <div>
              <p>구매총액</p>
              <p>409,000원</p>
          </div>
          <div>
              <button>사용 가능 쿠폰 0장</button>
              <span>-</span>
          </div>
          <div>
            <div>
             <span>일반쿠폰</span>
             <span>-</span>
            </div>
             <div>
             <span>더하기 쿠폰</span>
             <span>-</span>
            </div>
            
            <div>
              <button>포인트 사용 0P</button>
              <input type="text" name="newImage" id="contentTitle"placeholder="0"></input>
            </div>
            <div>
              <button>상품권 사용</button>
              <span>-</span>
            </div>
          </div>
        </div>

  
        <div>
          <div>
            <h3>결제수단 선택</h3>
          </div>
            <select id="contnetKind">
              <option value={1}>카카오페이</option>
              <option value={3}>토스페이</option>
              <option value={4}>신용/체크 카드</option>
              <option value={2}>네이버페이</option>
              <option value={2}>법인카드</option>
              <option value={2}>휴대폰 결제</option>
           </select>
           <p>전체 동의</p>
           <p>숙소이용규칙 및 취소/환불규정 동의<span>(필수)</span></p>
           <p>개인정보 수집 및 이용 동의<span>(필수)</span></p>
           <p>개인정보 제 3자 제공 동의<span>(필수)</span></p>

        
        </div>
  
      </div>

      <div id="Act2">
        <div>
          <div>
            <span>숙소이름</span>
            <p>인터컨티넨탈 서울 코엑스</p>
          </div>
          <div>
            <span>객실타입/기간</span>
            <p>[블랙프라이데이] ★조식 2인★ 클래식 킹 / 1박</p>
          </div>
          <div>
            <span>체크인</span>
            <p>11.10 금 15:00</p>
          </div>
          <div>
            <span>체크아웃</span>
            <p>11.11 토 11:00</p>
          </div>
        </div>

        <div>
          <h3>총 결제 금액<span>(VAT포함)</span></h3>
          <span>409,000원</span>
          <ul>
            <li>해당 객실가는 세금, 봉사료가 포함된 금액입니다</li>
            <li>결제완료 후 <a>예약자 이름</a>으로 바로 <a>체크인</a> 하시면 됩니다</li>
          </ul>
        </div>
        <div>
          <button>결제하기</button>
        </div>
      </div>
    </div>
    
    
  );

}



export default Yea;