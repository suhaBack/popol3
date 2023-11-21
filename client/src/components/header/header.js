import "./header.css";
import logo from "./../image/로고.png";
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
          검색
        </button>
      </div>
      <nav className="Main_nav">
        <ul className="Main_menu_ul">
          {/* <li className="Main_menu_li">
            <Link to="/mypage">예약내역</Link>
          </li> */}
          {login ? (
            <div>
              <p>{login}님 환영합니다.</p>
              <a onClick={LogOut}>로그아웃</a>
              <Link to={'/mypage'}>마이페이지</Link>
            </div>
          ): (
            <li className="Main_menu_li">
              <Link to="/login">로그인</Link>
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
