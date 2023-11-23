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
          <button onClick={() => MenuClick("유저목록")}>유저목록</button>
          <button onClick={() => MenuClick("카테고리")}>카테고리</button>
          <button onClick={() => MenuClick("예약내역")}>예약내역</button>
          <button onClick={() => MenuClick("설정")}>설정</button>
        </div>
        <div className="board">
          {managermenu === "유저목록" && (
            <div>
              유저목록
              <ul>
                {userList.map((a) => {
                  return (
                    <li key={a.user_id}>
                      <p>
                        이름: {a.name}, 아이디: {a.id}, 비밀번호: {a.password},
                        이메일: {a.email}, 권한: {a.role}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {managermenu === "카테고리" && (
            <div>
              카테고리
              {lodgingList.map((a) => {
                return (
                  <li key={a.lodging_id}>
                    <p>
                      이름: {a.name}, 위치: {a.location}
                    </p>
                    <p>설명: {a.description}</p>
                    <br></br>
                  </li>
                );
              })}
            </div>
          )}
          {managermenu === "예약내역" && (
            <div>
              예약내역
              {bookingList.map((a) => {
                return (
                  <li key={a.user_id}>
                    <p>
                      예약자: {a.user_id}, 시설이름: {a.room_id}, 체크인:{" "}
                      {a.start_date}, 체크아웃: {a.end_date}, 가격:{" "}
                      {a.total_price}
                      상태: {a.status}
                    </p>
                  </li>
                );
              })}
            </div>
          )}
          {managermenu === "설정" && <div>설정</div>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
