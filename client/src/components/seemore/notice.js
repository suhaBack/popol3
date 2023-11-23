import React, { useState } from "react";
import "./notice.css"

function Notice(props) {
  const [sections, setSections] = useState({
    basic: false,
    convenient: false,
    seller: false,
  });

  const toggleSection = (section) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  return (
    <div>
      <div className="basic_info">
        <div className="basic_info_title">
          <div onClick={() => toggleSection("basic")}>
            <div>공지사항</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.basic ? "basic_info_visible" : "basic_info_hidden"
          }
        >
          <p><a href="https://docs.google.com/spreadsheets/d/1atbk-TzYL6RfvNrGa66EUzoaySWCMWvypsfH3hKKKsU/edit?usp=sharing">작업진행도</a></p>
          <p><a href="https://github.com/IkGy/popol3">코드보기(git)</a></p>
        </div>
      </div>

      <div className="convenient_info">
        <div className="convenient_info_title">
          <div onClick={() => toggleSection("convenient")}>
            <div>이벤트 관련 공지</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.convenient
              ? "convenient_info_visible"
              : "convenient_info_hidden"
          }
        >
          <p>입력 바랍니다.</p>
        </div>
      </div>

      <div className="seller_info">
        <div className="seller_info_title">
          <div onClick={() => toggleSection("seller")}>
            <div>이 궈 궈 던 ~</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.seller ? "seller_info_visible" : "seller_info_hidden"
          }
        >
          <p>입력 바랍니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Notice;
