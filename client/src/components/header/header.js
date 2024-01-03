import "./header.css";
import logo from "./../image/로고.png";
import search from "./../image/검색.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../useCookies";
import { useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Tab } from "react-bootstrap";

// 버튼 클릭 시 검색창 표시를 위한 토글 함수 by 준영

function Header() {
  // 버튼 클릭 시 검색창 표시를 위한 토글 함수 by 준영
  //input 창 열고 닫기 위한 코드
  // 사용 x
  const [isOn, setIsOn] = useState(true);

  //검색함수 (제작 예정)

  //input 창 열기와 검색을 실행하기 위해 합하는 코드
  // 사용 x

  // const test = async ()=>{
  //   await axios.get('/test')
  // }
  function ClickMagnifying() {
    if (isOn) {
      console.log("검색창 열기");
      setIsOn(!isOn);
      console.log(isOn);
    } else if (!isOn) {
      console.log(isOn);
      console.log("검색");
    }
  }

  const navigate = useNavigate();
  const login = getCookie("login");
  const LogOut = () => {
    removeCookie("login");
    navigate("/");
  };

  return (
    <div id="Main_Div">
      <div id="Main_Div_2">
        <div className="Logo_section">
          <Link to="/">
            <img src={logo} width="60%" height="100%"></img>
          </Link>
        </div>
        <div className="Search_area">
          {/* <button type="button" className="btn_srch_srch_open">
          <input type="text" id="search_place" placeholder="조금 쉬었다 가야겠는걸..." ></input>
          
          <img src={search} onClick={display_popLayer('search_place')}></img>
        </button> */}
        </div>
        <nav className="Main_nav">
          {login ? (
            <div className="Inner_Div1">
              <div id="MyPage">
                <div id="LogOut">
                  <span>{login}님 환영합니다.</span>
                  <span className="LogOutspan2">
                    <Link to="/mypage">마이페이지</Link>
                    <a className="aTag_header" href="/seemore">
                      더 보기
                    </a>
                    <a className="aTag_header" onClick={LogOut}>
                      로그아웃
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
              <div className="Inner_Div2">
                <span id="login">로그인이 필요합니다.</span>
                <div id="LogIn">
                  <Link to="/login">로그인</Link>
                </div>
                <div className="SeeMore">
                  <a href="/seemore">더 보기</a>
                </div>
              </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
