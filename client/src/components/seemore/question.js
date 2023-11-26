import React, { useState } from "react";

function Question(props) {
  const [sections, setSections] = useState({
    basic: false,
    basic2: false,
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
            <div>천재지변/감염병으로 인한 예약취소는 어떻게 하나요?</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.basic ? "basic_info_visible" : "basic_info_hidden"
          }
        >
          <p>천재지변(기상악화), 법정 감염병 등 불가항력적인 사유로 제휴점 이용이 불가할 경우 고객행복센터로 예약내역 및 증빙서류
            (결항확인서, e-티켓, 진단확인서 등)를 보내주시면 확인 후 예약취소 가능 여부를 확인해 드립니다.
          </p><br></br>
          <p>다만, 당사는 판매 중개 플랫폼의 입장으로 제휴점에 대하여 취소/환불을 강제할 수 없어 각 제휴점의 규정에 
            근거하여 상황에 따라 수수료가 발생하거나 취소가 어려울 수 있는 점 양해 부탁드립니다.
          </p><br></br>
          <p>[접수방법]<br></br>
            ※ 이메일 : 123@goodchoice.kr (예약자명, 숙소명, 체크인 날짜 필수)</p>
          <p>※ 카카오톡 : 카카오톡 내 플러스 친구 --{'>'} 여기어때 고객행복센터 추가</p>
        </div>
      </div>

      <div className="basic_info">
        <div className="basic_info_title">
          <div onClick={() => toggleSection("basic2")}>
            <div>[숙박] 예약을 취소하고 싶어요.</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.basic2 ? "basic_info_visible" : "basic_info_hidden"
          }
        >
          <p>예약취소는  앱/웹 {'>'} 내정보 {'>'}예약/구매내역에서 직접 가능합니다.</p><br></br>
          <p>예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다.</p>
          <p>일부 숙소에 한해 취소가 가능한 시점이나 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다.</p>
        </div>
      </div>

      <div className="basic_info">
        <div className="basic_info_title">
          <div onClick={() => toggleSection("basic3")}>
            <div>[회원정보] 회원정보 수정은 어떻게 하나요?</div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div
          className={
            sections.basic3 ? "basic_info_visible" : "basic_info_hidden"
          }
        >
          <p>앱 하단 내정보 {'>'}  내 정보 관리에서 회원정보를 수정할 수 있습니다.</p> <br></br>
          <p>닉네임 변경 시, 이미 사용중인 닉네임으로는 변경이 어려우며, 최근 30일 동안 1회만 변경 가능합니다.</p><br></br>
          <p>* 회원정보 : 닉네임, 예약자명, 휴대폰 번호, 비밀번호(이메일 로그인 시에만 변경 가능)</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Question;
