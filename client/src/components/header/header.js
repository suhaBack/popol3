import './header.css';

function Header() {
  return(
    <div id="Main_Div">
      <div className="Logo_section">
        <a href="/"><h1 >
          모텔이름
        </h1></a>
      </div>
      <div className="Search_area">
        
        <button type="button" classname="btn_srch srch_open">검색</button>
      </div>
      <nav className="Main_nav">
        <ul classname="Main_menu_ul">
          <li className="Main_menu_li"><a href="??">내 주변</a></li>
          <li className="Main_menu_li"><a href="??">예약내역</a></li>
          <li className="Main_menu_li">
            <a href="??">더 보기</a>
            <ul className="drop_menu"> 
              <li><a href="??">가</a></li>
              <li><a href="??">나</a></li>
              <li><a href="??">다</a></li>
              <li><a href="??">라</a></li>
            </ul>
          </li>
          <li className="Main_menu_li"><a href="??">로그인</a></li>
      </ul>
      </nav>
    </div>
  )
}

export default Header;