import React, { useEffect, useState } from "react";
import "./mypage.css";
import InfoManagement from "./infomanagement";
import InfoEdit from "./infoedit";
import Myreview from "./myreview";
import Reservation from "./reservation";
import Alarm from "./alarm";
import UsedInfo from './usedinfo';

function Mypage() {
  const [menu, setMenu] = useState("예약 내역");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  const [end, setEnd] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [menu]);

  //user데이터베이스 사용
  let [userInfo, setUSerInfo] = useState({
    nickName: "왔다가",
    userName: "KDT",
    phoneNumber: "010-1234-5678",
  });

  return (
    <div className="mypagebackGround">
      <div className="mypageTitle">
        <div>마이페이지</div>
      </div>
      <div className="maincontent">
        <div className="mypage_menu">
          <div>
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className={menu === "내 정보 관리" ? "active" : "noactive"}
                    onClick={() => MenuClick("내 정보 관리")}
                  >
                    내 정보 관리
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "내 정보 변경" ? "active" : "noactive"}
                    onClick={() => MenuClick("내 정보 변경")}
                  >
                    내 정보 수정
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "예약 내역" ? "active" : "noactive"}
                    onClick={() => MenuClick("예약 내역")}
                  >
                    예약 내역
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "이용 내역" ? "active" : "noactive"}
                    onClick={() => MenuClick("이용 내역")}
                  >
                    이용 내역
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "알림" ? "active" : "noactive"}
                    onClick={() => MenuClick("알림")}
                  >
                    알림
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "리뷰" ? "active" : "noactive"}
                    onClick={() => MenuClick("리뷰")}
                  >
                    리뷰
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="menu_info">
          {menu === "내 정보 관리" && (
            <div className={"start " + end}>
              <InfoManagement menu={menu} userInfo={userInfo}></InfoManagement>
            </div>
          )}

          {menu === "내 정보 변경" && (
            <div className={"start " + end}>
              <InfoEdit menu={menu} userInfo={userInfo}></InfoEdit>
            </div>
          )}

          {menu === "예약 내역" && (
            <div className={"start " + end}>
              <Reservation></Reservation>
            </div>
          )}

          {menu === "이용 내역" && (
            <div className={"start " + end}>
              <UsedInfo></UsedInfo>
            </div>
          )}

          {menu === "알림" && (
            <div className={"start " + end}>
              <Alarm></Alarm>
            </div>
          )}

          {menu === "리뷰" && (
            <div className={"start " + end}>
              <Myreview />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
