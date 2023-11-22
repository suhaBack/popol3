import "./addask.css";
import 광고 from "./../../image/광고.png"
import 숙소등록 from "./../../image/숙소등록.png"

const advertising= ()=>{
  alert("신규 업체 가입 문의는 고객센터 (1234-5678) 로 연락해주세요");
}

function Addask() {
  return (
    <div className="addAskGridBox1">
      <div id="my-div" className="addAskGridBox2" onClick={advertising}>
        <div className="addAskContentBox">
          <div className='addAskTitle'>왔다가<br/>광고 신청하기</div>
          <div className='addAskContent'>고정고객 확보,<br/>신규회원 유치 가능합니다.</div>
        </div>
        <div className="addAskImgBox">
          <img src={광고} width="100%" height="100%"></img>
        </div>
      </div>
      <div className="addAskGridBox2">
        <div className="addAskContentBox">
          <div className='addAskTitle'>게스트하우스<br/>숙소 등록하기</div>
          <div className='addAskContent'>숙소 등록하고<br/>더 많은 고객 확보하세요!</div>
        </div>
        <div className="addAskImgBox">
        <img src={숙소등록} width="100%" height="100%"></img>
        </div>
      </div>
    </div>
  );
}

export default Addask;
