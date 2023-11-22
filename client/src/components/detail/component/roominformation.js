import React, { useState } from 'react';
import './roominformation.css';

function RoomInformation(props) {
  const [sections, setSections] = useState({
    basic: true,
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
        <div>
          <button onClick={() => toggleSection('basic')}>
            <p>기본정보</p>
          </button>
        </div>
        <div className={sections.basic ? 'basic_info_visible' : 'basic_info_hidden'}>
          <p>기본 정보 입력란 입니다.</p>
        </div>
      </div>

      <div className="convenient_info">
        <div>
          <button onClick={() => toggleSection('convenient')}>
            <p>편의시절 및 서비스</p>
          </button>
        </div>
        <div className={sections.convenient ? 'convenient_info_visible' : 'convenient_info_hidden'}>
          <p>편의시절 및 서비스 입력란 입니다.</p>
        </div>
      </div>

      <div className="seller_info">
        <div>
          <button onClick={() => toggleSection('seller')}>
            <p>판매자 정보</p>
          </button>
        </div>
        <div className={sections.seller ? 'seller_info_visible' : 'seller_info_hidden'}>
          <p>판매자 정보 입력란 입니다.</p>
        </div>
      </div>
    </div>
  );
}

export default RoomInformation;