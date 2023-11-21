import "./adminPage.css";
import React, { useState } from "react";

function AdminPage() {
  const [managermenu, setManagermenu] = useState();

  const MenuClick = (selectMenu) => {
    setManagermenu(selectMenu);
  };


  return (
    <div className="managercontainer">
      <div className="managermenu">
        <button onClick={() => MenuClick("대시보드")}>유저목록</button>
        <button onClick={() => MenuClick("카테고리")}>카테고리</button>
        <button onClick={() => MenuClick("예약내역")}>예약내역</button>
        <button onClick={() => MenuClick("설정")}>설정</button>
      </div>

      <div className="board">
          {managermenu === "대시보드" && (
            <div>
             유저목록
            </div>
          )}

          {managermenu === "카테고리" && (
            <div>
             카테고리
            </div>
          )}

          {managermenu === "예약내역" && (
            <div>
              예약내역
            </div>
          )}

          {managermenu === "설정" && (
            <div>
              설정
            </div>
          )}
      </div>
    </div>
  )
}

export default AdminPage;