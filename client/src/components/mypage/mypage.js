import React, { useState } from "react";

function Mypage() {
 
  return (
    <div className="maincontent">
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
        <div className="reservation_list">
          <h2>예약 내역이 없습니다.</h2>
          <p>최저가로 예약 가능한</p>
          <p>숙소들로 지금 만나세요!</p>
        </div>
        <div className="mylist">
          <form name="form1">
            <section>
              <strong>내 정보 수정</strong>
              <div className="login_info">
                <img src="#"></img>
                <div>
                  <p>KaKaoTalk 회원으로 로그인</p>
                </div>
                <div>
                  <b>닉네임</b>
                  <span></span>
                </div>
              </div>
            </section>
          </form>
          <form name="form2">
            <section>
              <div>
                <div>
                  <b>예약자 이름</b>
                  <span></span>
                </div>
              </div> 
            </section>
          </form>
          <form name="form3">
            <section>
              <div>
                <div>
                  <b>휴대폰 번호</b>
                  <span>0101234****</span>
                  <p>개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.</p>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Mypage;
