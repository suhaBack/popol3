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
      return <Reveiw />;
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
          <p>이 글을 본 당신생명이 하루밖에 남지 않았습니다. 정말 죄송합니다. 저도 이런 글 올리는 것 죄송한데요 제 친구도 제 말을 거짓말로 알았다가 죽었습니다. 여러분께 피해 입히지 않기 위해 이 글 씁니다. 여러분이 이 글을 보고 바로 끄면 끄는 순간 당신의 목숨이 끝나는 것은 시작됩니다. 끌 때부터 24시간 너무 짧은 시간입니다. 당신의 목숨 제가 살리겠습니다. 만약 24시간 내에 당신이 죽지 않는다면 매일 밤 새벽2시에 얼굴이 반쪽이고 눈이 파란 귀신이 찾아와 당신을 죽이려고 할 것입니다.이 글을 다른곳에 딱 3번만 복사해서 올려도 좋습니다. 시간은 44분 입니다. 이 글을 다른곳에 복사하면 사랑하는 사람에게 고백을 받을 것입니다.</p>
        </div>
      </div>
    </div>

    
  
  </div>
)};

export default Detail;