import React, { useEffect, useState } from "react";
import "./mypage.css";
import InfoManagement from "./infomanagement";
import InfoEdit from "./infoedit";
import Myreview from "./myreview";
import Reservation from "./reservation";
import Alarm from "./alarm";
import UsedInfo from './usedinfo';
import Registration from "./registration";
import axios from "axios";
import { getCookie } from "../../useCookies";
import { API_URL } from '../config/contansts';

function Mypage() {
  const [menu, setMenu] = useState("내 정보 관리");
  let [userInfo, setUSerInfo] = useState({});
  let [reviewData, setReviewData] = useState([]);
  let [bookingList, setBookingList] = useState([]);
  const [end, setEnd] = useState("");

  useEffect(() => {
    const getList = async () => {
      await axios.get(`${API_URL}/user`,{params: {userID:getCookie('login')}})
        .then((res)=>{
          console.log('user',res.data[0]);
          setUSerInfo(res.data[0]);
        })

      await axios.get(`${API_URL}/bookings`,{params: {userID: getCookie('user_Code')}})
        .then((result) => {
          const items = result.data;
        console.log('book',items);
        setBookingList(items);
        });

      await axios.get(`${API_URL}/reviews/mypage`,{params: {userID: getCookie('user_Code')}})
        .then((result) => {
          const items = result.data;
          console.log("review",result.data);
          setReviewData(items);
        });
    };
    getList();
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [menu]);


  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  


  //user데이터베이스 사용

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
                    onClick={() => MenuClick("내 정보 관리")}>
                    내 정보 관리
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "내 정보 변경" ? "active" : "noactive"}
                    onClick={() => MenuClick("내 정보 변경")}>
                    내 정보 수정
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "예약 내역" ? "active" : "noactive"}
                    onClick={() => MenuClick("예약 내역")}>
                    예약 내역
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "이용 내역" ? "active" : "noactive"}
                    onClick={() => MenuClick("이용 내역")}>
                    이용 내역
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "알림" ? "active" : "noactive"}
                    onClick={() => MenuClick("알림")}>
                    알림
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "리뷰" ? "active" : "noactive"}
                    onClick={() => MenuClick("리뷰")}>
                    리뷰
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "방 등록하기" ? "active" : "noactive"}
                    onClick={() => MenuClick("방 등록하기")}>
                    방 등록하기
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
              <Reservation bookingList={bookingList}></Reservation>
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
              <Myreview  reviewData={reviewData}/>
            </div>
          )}

          {menu === "방 등록하기" && (
            <div className={"start " + end}>
              <Registration />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
