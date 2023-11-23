import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../useCookies";
import 프로필 from "./../image/프로필.png"

function InfoManagement(props) {
  const navigate = useNavigate();
  const logOut = (e)=>{
    removeCookie('login');
    navigate('/')
  }
  
  return (
    <div>
      <div className="menu_info_title">{props.menu}</div>
      <div className="user_profile">
        <img src={프로필} width="100%"></img>
      </div>
      <div className="mylist">
        {/* 내 정보 관리에 대한 div */}
        <form name="mylist_form1">
          <div className="login_info">
            <div>
              <b>닉네임: </b>
              <span>{props.userInfo.id}</span>
            </div>
          </div>
        </form>
        <form name="mylist_form2">
          <div>
            <div>
              <b>예약자 이름: </b>
              <span>{props.userInfo.name}</span>
            </div>
          </div>
        </form>
        <form name="mylist_form3">
          <div>
            <div>
              <b>휴대폰 번호: </b>
              <span>{props.userInfo.contact_number}</span>
              <div id="security">
                개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="giveUpBox">
        <div>
          여기어때를 이용하고 싶지 않으신가요?
          <a onClick={logOut}> 로그아웃</a> <a href=""> 회원탈퇴</a>
        </div>
      </div>
    </div>
  );
}

export default InfoManagement;
