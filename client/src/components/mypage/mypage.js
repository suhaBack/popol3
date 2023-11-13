import React, { useState } from "react";
import "./mypage.css";

function Mypage() {
  const [menu, setMenu] = useState ("내 정보 관리");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };


  let [userInfo, setUSerInfo] = useState({
    nickName: "왔다가",
    userName: "KDT",
    phoneNumber: "010-1234-5678",
  });



  return (
    <div className="backGround">
      <div className="maincontent container">
        <div className="mypage_menu">
          <div>
            <nav>
              <ul>
                <li>
                  <a href="#" onClick={() => MenuClick("내 정보 관리")}>내 정보 관리</a>
                </li> 
                <li>
                  <a href="#" onClick={() => MenuClick("내 정보 변경")}>내 정보 수정</a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("예약 내역")}>예약 내역</a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("알림")}>알림</a>
                </li>
                <li>
                  <a href="#" onClick={() => MenuClick("쿠폰함")}>쿠폰함</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="menu_info">
          {menu === "내 정보 관리" && (
            <div>
              <div className="menu_info_title">{menu}</div>
              <div className="user_profile">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="mylist">
                {/* 내 정보 관리에 대한 div */}
                <form name="mylist_form1">
                  <div className="login_info">
                    <div>
                      <b>닉네임: </b>
                      <span>{userInfo.nickName}</span>
                    </div>
                  </div>
                </form>
                <form name="mylist_form2">
                  <div>
                    <div>
                      <b>예약자 이름: </b>
                      <span>{userInfo.userName}</span>
                    </div>
                  </div>
                </form>
                <form name="mylist_form3">
                  <div>
                    <div>
                      <b>휴대폰 번호: </b>
                      <span>{userInfo.phoneNumber}</span>
                      <div id="security">
                        개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="giveUpBox">
                <div>
                  여기어때를 이용하고 싶지 않으신가요?
                  <a href=""> 로그아웃</a> <a href=""> 회원탈퇴</a>
                </div>
              </div>
            </div>
          )}

          {menu === "내 정보 수정" && (
            <div className="mylist_change">
              <div>내 정보 수정</div>
            </div>
          )}

          {menu === "예약 내역" && (
            <div className="mylist_reservation">
              <div>예약 내역이 없습니다!</div>
            </div>
          )}

          {menu === "알림" && (
            <div className="mylist_">
              <div>알림</div>
            </div>
          )}

          {menu === "쿠폰함" && (
            <div className="mylist_">
              <div>쿠폰함</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
