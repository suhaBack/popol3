import "./adminPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/contansts";
import { Link } from "react-router-dom";

function AdminPage() {
  const [managermenu, setManagermenu] = useState("유저목록");
  const [userList, setUserList] = useState([]);
  const [lodgingList, setLodgingList] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  
  const MenuClick = (selectMenu) => {
    setManagermenu(selectMenu);
  };

  useEffect(() => {
    const getList = async () => {
      await axios.get(`${API_URL}/user/admin`)
      .then((result) => {
        const items = result.data;
        setUserList(items);
      });
      await axios.get(`${API_URL}/lodging/admin`).then((result) => {
        const items = result.data;
        setLodgingList(items);
      });
      await axios.get(`${API_URL}/bookings/admin`).then((result) => {
        const items = result.data;
        setBookingList(items);
      });
    };
    getList();
  }, []);

  




  return (
    <div className="managercontainer">
      <div className="managergirdbox container">
        <div className="managermenu">
          <div>
            <Link to="/">왔다가</Link>
          </div>
          <button onClick={() => MenuClick("유저목록")}   className="Side_Btn">유저목록</button>
          {/* <button onClick={() => MenuClick("카테고리")}   className="Side_Btn">카테고리</button> */}
          <button onClick={() => MenuClick("예약내역")}   className="Side_Btn">예약내역</button>
          <button onClick={() => MenuClick("설정")}       className="Side_Btn">설정</button>
        </div>
        <div className="board">
          {managermenu === "유저목록" && (
            <div className="Table_Div">
              <h3>유저목록</h3>
              <table className="User_Table">
                <tr className="Table_Title">
                  <td className="User_Name">이름</td>
                  <td className="User_Id">아이디</td>
                  <td className="User_PW">비밀번호</td>
                  <td className="User_Email">이메일</td>
                  <td className="User_op">권한</td>
                </tr>
                {userList.map((a) => {
                  return (
                    <tr key={a.user_id}>
                      <td className="User_Name">{a.name}</td>
                      <td className="User_Id">{a.id}</td>
                      <td className="User_PW">{a.password}</td>
                      <td className="User_Email">{a.email}</td>
                      <td className="User_op">{a.role}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={5}>
                    권한 | 0 = 일반회원, 1 = 기업회원, 2 = 관리자
                    <br />
                    권한은 변경이 불가능합니다.
                  </td>
                </tr>
              </table>
            </div>
          )}

          {/* {managermenu === "카테고리" && (
            <div className="Table_Div">
              <h3>카테고리</h3>
              <table className="User_Table">
                <tr className="Table_Title">
                  <td className="">숙소명</td>
                  <td className="Location">위치</td>
                  <td className="Description">설명</td>
                </tr>
              {lodgingList.map((a) => {
                return (
                  <tr key={a.lodging_id}>
                    <td className="User_Name">{a.name}</td>
                    <td className="Location">{a.location}</td>
                    <td className="Description">{a.description}</td>
                  </tr>
                );
              })}
              </table>
            </div>
          )} */}
          {managermenu === "예약내역" && (
            <div className="Table_Div">
              <h3>예약내역</h3>              
              <table className="User_Table">
                <tr className="Table_Title">
                  <td className="User_Name">예약자</td>
                  <td className="Facility">시설이름</td>
                  <td className="C_IN">체크인</td>
                  <td className="C_OUT">체크아웃</td>
                  <td className="Price">가격</td>
                  <td className="Status">상태</td>
                </tr>

                {bookingList.map((a) => {
                  //날짜 표시 함수
                  let Sdate = new Date(a.start_date);
                  let Edate = new Date(a.start_date);
                  // 년. 월. 일 형식으로 표시
                  let C_INdate = Sdate.toLocaleDateString();
                  let C_OUTdate = Edate.toLocaleDateString();
                  console.log(a.start_date);
                  // 요일 구하는 함수
                  // 숫자 형태로 리턴되기 때문에 0 - 6이 일 - 토의 형태를 띈다.
                  // 배열에 넣어서 각 숫자에 해당하는 값을 리턴하도록 설정했다.
                  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
                  let week1 = WEEKDAY[Sdate.getDay()];
                  let week2 = WEEKDAY[Edate.getDay()];
                  // getDay가 숫자로 리턴하기 때문에 배열로 치환해준다.
                  // console.log(week);
                  let time1 = Sdate.getHours() + "시" + Sdate.getMinutes() + "분" + Sdate.getSeconds() + "초";
                  let time2 = Edate.getHours() + "시" + Edate.getMinutes() + "분" + Edate.getSeconds() + "초";
                  
                  // console.log(time1);
                  // 합쳐서 오늘 날짜를 년. 월. 일.(요일) 로 표시하는 함수
                  let indate = C_INdate + "(" + week1 + ") " + time1;
                  let outdate = C_OUTdate + "(" + week2 + ") " + time2;
                  
                  let pri = a.total_price;
                  let price = Math.floor(pri);
                  console.log(price);
                return ( 
                  <tr key={a.user_id}>
                      <td className="User_Name">{a.user_id}</td>
                      <td className="Facility">{a.room_id}</td>
                      {/* <td className="C_IN">{a.start_date}</td> */}
                      <td className="C_IN">{indate}</td>
                      {/* <td className="C_OUT">{a.end_date}</td> */}
                      <td className="C_OUT">{outdate}</td>
                      <td className="Price">{price}원</td>
                      {/* <td className="Price">{a.total_price}원</td> */}
                      <td className="Status">{a.status}</td>
                    </tr>
                  );
                })}
                </table>
            </div>
          )}
          {managermenu === "설정" && <div className="Table_Div"> <h3>설정</h3>
            <table>
              <tr>
                <td>
                  페이지 삭제
                </td>
              </tr>
            </table>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
