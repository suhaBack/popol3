import "./header.css";
import logo from "./../image/로고.png";
import search from "./../image/검색.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../useCookies";
import { useState } from "react";
import axios from "axios";
import $ from 'jquery';

// 버튼 클릭 시 검색창 표시를 위한 토글 함수 by 준영


function Header() {
  // 버튼 클릭 시 검색창 표시를 위한 토글 함수 by 준영
  //input 창 열고 닫기 위한 코드
  const [isOn, setIsOn] = useState(true);

  //검색함수 (제작 예정)


  //input 창 열기와 검색을 실행하기 위해 합하는 코드
  function ClickMagnifying(){
    if(isOn){
      console.log("검색창 열기");
      setIsOn(!isOn);
      console.log(isOn);
      
    } else if(!isOn) {
      console.log(isOn);
      console.log("검색");
    }
  }

  
  const navigate = useNavigate();
  const login = getCookie("login");
  const LogOut = ()=>{
    removeCookie("login");
    navigate('/');
  }
  
  return (
    <div id="Main_Div">
      <div id="Main_Div_2">
      <div className="Logo_section">
        <Link to="/"><img src={logo}></img></Link>
      </div>
    
      {/* 검색바 들어갈거임 */}
      <div className="search_area">
        {!isOn && (
          <input className="search_Bar" type="type" placeholder="어디로 갈까?" />
        )}

        <button onClick={() => ClickMagnifying()} className="search_btn"><i className="fa-solid fa-magnifying-glass"></i></button>
      
        {!isOn && (
          <button onClick={() => setIsOn(!isOn)} className="close_btn"><i className="fa fa-times"></i>
          </button>
        )}  
      </div>


      <nav className="Main_nav">
        <ul className="Main_menu_ul">
          
          {login ? (
            <div>
              <li className="Main_menu_li">
              <Link to="/mypage">마이페이지 /</Link>
              </li>
              <div id="LogOut">
                <p id='logout'>{login}님 환영합니다. <span>/</span></p>
                <a onClick={LogOut}>로그아웃 /</a>
              </div>
            </div>
          ): (
            <li className="Main_menu_li">
              <p id="login">로그인이 필요합니다. <span>/</span></p>
              <Link to="/login">로그인 /</Link>
            </li>
          )}
          <li className="Main_menu_li" id="SeeMore">
            <a href="/seemore">더 보기</a>
            <ul className="drop_menu" style={{ display: "none" }}>
              <li className="drop_item">
                <a href="??">가</a>
              </li>
              <li className="drop_item">
                <a href="??">나</a>
              </li>
              <li className="drop_item">
                <a href="??">다</a>
              </li>
              <li className="drop_item">
                <a href="??">라</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Header;
