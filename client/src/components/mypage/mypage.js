import React, { useState } from "react";
import "./mypage.css";

function Mypage() {
  let [userInfo, setUSerInfo] = useState({
    nickName: "왔다가",
    userName: "KDT",
    phoneNumber: "010-1234-5678",
  });

  return (
    <div className="backGround">
      <div className="maincontent container">
        <div className="mypage_menu">
          <nav>
            <ul>
              <li>
                <a href="">예약 내역</a>
              </li>
              <li>
                <a href="">내 정보 관리</a>
              </li>
              <li>
                <a href="">알림</a>
              </li>
              <li>
                <a href="">상품권</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mypage_info">
          <div className="mypage_info_title">내 정보 수정</div>
          <div className="user_profile">
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="mylist">
            <form name="form1">
              <section>
                <div className="login_info">
                  <div>
                    <b>닉네임: </b>
                    <span>{userInfo.nickName}</span>
                  </div>
                </div>
              </section>
            </form>
            <form name="form2">
              <section>
                <div>
                  <div>
                    <b>예약자 이름: </b>
                    <span>{userInfo.userName}</span>
                  </div>
                </div>
              </section>
            </form>
            <form name="form3">
              <section>
                <div>
                  <div>
                    <b>휴대폰 번호: </b>
                    <span>{userInfo.phoneNumber}</span>
                    <div>
                      개인 정보 보호를 위해 내 정보는 모두 안전하게
                      암호화됩니다.
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
          <div className="giveUpBox">
            <div>여기어때를 이용하고 싶지 않으신가요? 로그아웃 회원탈퇴</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
