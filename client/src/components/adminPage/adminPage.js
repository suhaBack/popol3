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
      await axios.get(`${API_URL}/user/admin`).then((result) => {
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
          <button onClick={() => MenuClick("카테고리")}   className="Side_Btn">카테고리</button>
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
              </table>
            </div>
          )}

          {managermenu === "카테고리" && (
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
          )}
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
                return ( 
                  <tr key={a.user_id}>
                      <td className="User_Name">{a.user_id}</td>
                      <td className="Facility">{a.room_id}</td>
                      <td className="C_IN">{a.start_date}</td>
                      <td className="C_OUT">{a.end_date}</td>
                      <td className="Price">{a.total_price}</td>
                      <td className="Status">{a.status}</td>
                    </tr>
                  );
                })}
                </table>
            </div>
          )}
          {managermenu === "설정" && <div className="Table_Div"> <h3>설정</h3></div>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
