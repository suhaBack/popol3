import React, { useState } from "react";
import Room from "./component/room";
import Information from "./component/information";
import Reveiw from "./component/review";

function Detail(){

  const [selectedSection, setSelectedSection] = useState("공연정보");

  const showAdditionalInfo = () => {
    if (selectedSection === "객실안내/예약") {
      // return <ShowInfo />;
      return  <Room/>
    } else if (selectedSection === "숙소정보") {
      // return <SalesInfo />;
      return  <Information/>
    } else if (selectedSection === "리뷰") {
      // return <SalesInfo />;
      return <Reveiw/>;
    }
  };
  
return(
  <div>
    <div className="top">
      <div className="picture">
        사진 넣는 칸
      </div>
      <div className="info">
        <h2>풀빌라 월</h2>
        <p>경기도 ....</p>
      </div>
      <div className="comment">
        <strong>사장님 한마디</strong>
        <button>더보기</button>
        <div className="clamp">
          <p>설명 란</p>
        </div>
      </div>
    </div>

    <div className="sticky-section">
      <button className={selectedSection === "객실안내/예약" ? "active" : ""}
            onClick={() => setSelectedSection("객실안내/예약")}> 
            객실안내/예약
          </button> {/* 버튼 클릭시 객실안내를 보여줌 */}
      <button className={selectedSection === "숙소정보" ? "active" : ""}
            onClick={() => setSelectedSection("숙소정보")}>
            숙소정보
      </button> {/* 버튼 클릭시 숙소정보를 보여줌 */}
      <button className={selectedSection === "리뷰" ? "active" : ""}
            onClick={() => setSelectedSection("리뷰")}>
            리뷰
      </button> {/* 버튼 클릭시 리뷰를 보여줌 */}
    </div>
  </div>
)};

export default Detail;