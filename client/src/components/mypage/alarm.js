import { useEffect, useState } from "react";
import "./alarm.css";
import 알람 from "./../image/알람.png";

function Alarm() {
  const [allChecked, setAllChecked] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  useEffect(() => {
    setAllChecked(check1 && check2);
  }, [check1, check2]);

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
    setCheck1(!allChecked);
    setCheck2(!allChecked);
  };

  const handleSingleCheck = (checkbox) => {
    switch (checkbox) {
      case "check1":
        setCheck1((prevCheck1) => !prevCheck1);
        break;
      case "check2":
        setCheck2((prevCheck2) => !prevCheck2);
        break;
      default:
        break;
    }
  };

  return (
    <div className="alarmpage">
      <div className="alarmpageTitle">
        <img src={알람}></img>
        <span>알림 설정</span>
      </div>
      <p>특가, 쿠폰 등 이벤트 정보를 빠르게 알려드릴게요.</p>

      <div className="alarmtipBox">
        <i class="fa-solid fa-circle-info"></i>
        <span>
          앱 잠금, 최근 본 상품 저장, 앱 푸시, 접근 권한 설정은 여기어때 앱에서
          가능해요.
        </span>
      </div>

      <div className="alarmAgreeBigBox">
        <div className="alarmAgreeBox">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={allChecked}
            onChange={handleAllCheck}
            style={{ padding: "0.9vw" }}
          />
          <span style={{ fontSize: "1.5vw" }}>마케팅 알림 수신 동의(선택)</span>
        </div>
        <div className="alarmAgreeBox">
          <i class="fa-solid fa-turn-up"></i>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault1"
            checked={check1}
            onChange={() => handleSingleCheck("check1")}
          />
          <span>문자</span>
        </div>
        <div className="alarmAgreeBox">
          <i class="fa-solid fa-turn-up"></i>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault2"
            checked={check2}
            onChange={() => handleSingleCheck("check2")}
          />
          <span>이메일</span>
        </div>
      </div>

      {/* <div>
          <div>
            <form method="get">
              <label>
                <input type="checkbox" name="color" value="blue" /> 마케팅 알림
                수신 동의(선택)
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <form method="get">
              <label>
                <input type="checkbox" name="color" value="blue" /> 문자
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <form method="get">
              <label>
                <input type="checkbox" name="color" value="blue" /> 이메일
              </label>
            </form>
          </div>
        </div> */}
      <div className="alarmSaveBtn">
        <button>저장</button>
      </div>
    </div>
  );
}

export default Alarm;
