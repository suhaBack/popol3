import 싱글 from "./../../image/싱글.png";
import 더블 from "./../../image/더블.png";
import 트윈 from "./../../image/트윈.png";

function StickyMenu(props) {
  return (
    <div className="section-1">
      <div className="section-1Box">
        <div className="bedTypeBox">
          <strong>침실 타입</strong>
          <div className="bedTypeGridBox">
            <div className="bedType1" onClick={() => {
              props.setBedtype("싱글")
            }}>
              <img src={싱글} width="100%"></img>
              <div className={props.bedtype === "싱글" ? "active" : "noactive"}>싱글</div>
            </div>
            <div className="bedType" onClick={() => {
              props.setBedtype("더블")
            }}>
              <img src={더블} width="100%"></img>
              <div className={props.bedtype === "더블" ? "active" : "noactive"}>더블</div>
            </div>
            <div className="bedType3" onClick={()=>{
              props.setBedtype("트윈")
            }}>
              <img src={트윈} width="100%"></img>
              <div className={props.bedtype === "트윈" ? "active" : "noactive"}>트윈</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyMenu;
