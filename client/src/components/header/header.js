import "./header.css";
import logo from "./../image/로고.png";
import search from "./../image/검색.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../useCookies";
import axios from "axios";

function Header() {
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
      <div className="Search_area">
        <button type="button" className="btn_srch_srch_open">
          <input type="text" placeholder="조금 쉬었다 가야겠는걸..."></input>
          <img src={search}></img>
        </button>
      </div>
      <nav className="Main_nav">
        <ul className="Main_menu_ul">
          
          {login ? (
            <>
              <li className="Main_menu_li">
              <Link to="/mypage">마이페이지 /</Link>
              </li>
              <div id="LogOut">
                <p id='logout'>{login}님 환영합니다. <span>/</span></p>
                <a onClick={LogOut}>로그아웃 /</a>
              </div>
            </>
          ): (
            <li className="Main_menu_li">
              <p id="login">로그인이 필요합니다. <span>/</span></p>
              <Link to="/login">로그인 /</Link>
            </li>
          )}
          <li className="Main_menu_li">
            <a href="/seemore">더 보기</a>
            <ul className="drop_menu" style={{ display: "none" }}>
              <li>
                <a href="??">가</a>
              </li>
              <li>
                <a href="??">나</a>
              </li>
              <li>
                <a href="??">다</a>
              </li>
              <li>
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
