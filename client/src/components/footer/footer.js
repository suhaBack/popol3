import "./footer.css";

const footer = () => {
  return (
    <div className='footerBox'>
      <div id="footer">
        <div id="footer-copy">
          <ul>
            <li id="li1">회사소개 |</li>
            <li id="li2">이용약관 |</li>
            <li id="li3">개인정보처리방침 |</li>
            <li id="li4">사업자 정보확인</li>
          </ul>
          <br/>
          <br/>
          <p>고객센터 1577-1577 (오전9시 ~ 오전12시)</p>
        </div>
        <div id="footer-address">
          <span>(주)리얼 컴퍼니</span>
          <br/>
          <br/>
          <span>주소 : 경기도 평택시 서정동 장안웃길 56</span>
          <br/>
          <span>사업자 등록번호 : 112-050-45895 |</span>
          <span> 전자우편주소 : deeha@gmail.com |</span>
          <span> 관광사업자 등록번호 : 제 1002-09호</span>
          <br/> 
          <span>(주) 리얼 컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </span>
          <br/>
          <br/>
          <span id="copyright">Copyright RA COMPANY Corp. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default footer;
