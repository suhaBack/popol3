import React, { useState } from "react";
import "./notice.css"

function Notice(props) {
  const [sections, setSections] = useState({
    basic: false,
    convenient: false,
    seller: false,
  });

  const toggleSection = (section) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  return (
    <div>
      <div className="basic_info">
        <div className="basic_info_title">
          <div onClick={() => toggleSection("basic")}>
            <div>공지사항</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className={sections.basic ? "basic_info_visible" : "basic_info_hidden"}> 
          <p>여행과 여가의 모든 경험을 연결합니다 </p>
          <p>숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등 원스톱 여행 플랫폼을 만들고 있어요.</p>
          <p>'왔다가' 는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록 항상 최선을 다하겠습니다.</p>
          <p><a href="https://docs.google.com/spreadsheets/d/1atbk-TzYL6RfvNrGa66EUzoaySWCMWvypsfH3hKKKsU/edit?usp=sharing">작업진행도</a></p>
          <p><a href="https://github.com/IkGy/popol3">코드보기(git)</a></p>
        </div>
      </div>

      <div className="convenient_info">
        <div className="convenient_info_title">
          <div onClick={() => toggleSection("convenient")}>
            <div>23년 11월 리뷰 이벤트 관련 안내입니다</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.convenient
              ? "convenient_info_visible"
              : "convenient_info_hidden"
          }
        >
          <p>안녕하세요 '왔다가' 입니다.</p><br></br>
          <p>23년 11월 리뷰 이벤트가 새로 시작 되었습니다.</p>
          <p>멋진 리뷰를 작성해주신분들 중 추첨을 통해 '왔다가' 에서 사용 가능한 포인트를 보내드릴 예정이오니 사용자 여러분의 많은 참여 부탁드립니다.</p>
          <p>감사합니다</p>
        </div>
      </div>

      <div className="seller_info">
        <div className="seller_info_title">
          <div onClick={() => toggleSection("seller")}>
            <div>23년 10월 리뷰 이벤트가 종료 되었습니다</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.seller ? "seller_info_visible" : "seller_info_hidden"
          }
        >
          <p>안녕하세요 '왔다가' 입니다.</p><br></br>
          <p>23년 10월 리뷰 이벤트가 종료 되었습니다.</p><br></br>
          <p>이벤트 당첨자 목록입니다.</p><br></br><br></br>
          <p>조*익</p><br></br>
          <p>박*호</p><br></br>
          <p>차*민</p><br></br>
          <p>유*재</p><br></br>
          <p>허*영</p><br></br>
          <p>김*훈</p><br></br>
          <p>정*우</p><br></br>
          <p>참여해주신 모든 분들게 감사의 인사를 드립니다. 11월 리뷰이벤트로 찾아뵙겠습니다.</p> 
          <p>감사합니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Notice;
