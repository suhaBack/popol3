import React, { useState } from "react";

function Question(props) {
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
            <div>자주 묻는 질문</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.basic ? "basic_info_visible" : "basic_info_hidden"
          }
        >
          <p>정보 입력 바람.</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
