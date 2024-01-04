import 할인 from "./../image/할인.png";
import 결제수단 from "./../image/결제수단.png";
import 개인정보 from "./../image/개인정보.png";

import 싱글 from "../image/싱글.png";
import 더블 from "../image/더블.png";
import 트윈 from "../image/트윈.png";

import "./newroom.css"
import "../payment/payment.css"

function Newroom(props) {
  return(
    <div id="jsw_all_container">
      
      <div className="jsw_newroom_container">
        <div style={{ fontSize: "3vw" }}>
          방 등록하기
        <div className="jsw_newroom_container2">
          <div className="paymentTitleBox" style={{ marginTop: "0" }}>
                <img src={개인정보} height="100%"></img>
                <h3 style={{ padding: "0 1vw 0 0" }}>판매자 정보</h3>
          </div>
          <div className="reservationInputBox">
                <p>판매자 이름</p>
                <input
                  type="text"
                  name="newImage"
                  id="contentTitle"
                  placeholder=" 방 등록시 필요한 정보입니다."
                  style={{width:"700px"}}
                ></input>
                <p style={{ fontSize: "1vw", color: "red" }}>
                    *이름를 입력해주세요.
                </p>
          </div>
          <div className="reservationInputBox">
                <p>휴대폰 번호</p>
                <p style={{ fontSize: "1.2vw" }}>
                  기입해주신 번호는 방 등록시 손님들에게 노출됩니다.
                </p>
                <input
                  type="text"
                  name="newImage"
                  id="contentTitle"
                  placeholder=" 방 등록시 필요한 정보입니다."
                  style={{width:"700px"}}

                ></input>
                <p style={{ fontSize: "1vw", color: "red" }}>
                    *휴대폰 번호를 입력해주세요.
                </p>
          </div>
          <div className="reservationInputBox">
                <p>주소</p>
                <p style={{ fontSize: "1.2vw" }}>
                  등록하실 방의 주소를 입력해주세요
                </p>
                <input
                  type="text"
                  name="newImage"
                  id="contentTitle"
                  placeholder=" 방 등록시 필요한 정보입니다."
                  style={{width:"700px"}}

                ></input>
                <p style={{ fontSize: "1vw", color: "red" }}>
                    *주소를 입력해주세요.
                </p>
          </div>
          

            <label for="file">
              <div class="jsw_btn-upload">방 사진</div>
            </label>
            <input type="file" name="file" id="jsw_file"/>
        </div>
        </div>

      <div className="jsw_container3">
        <label for="text">
          <div class="jsw_btn-upload">등록</div>
        </label>
          <input type="text" name="file" id="jsw_file"/>
        <label for="text">
          <div class="jsw_btn-upload">취소</div>
        </label>
          <input type="text" name="file" id="jsw_file"/>
      </div>
      
      </div>
    </div>
  )
}

export default Newroom