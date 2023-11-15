function InfoManagement(props) {
  return (
    <div>
      <div className="menu_info_title">{props.menu}</div>
      <div className="user_profile">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="mylist">
        {/* 내 정보 관리에 대한 div */}
        <form name="mylist_form1">
          <div className="login_info">
            <div>
              <b>닉네임: </b>
              <span>{props.userInfo.nickName}</span>
            </div>
          </div>
        </form>
        <form name="mylist_form2">
          <div>
            <div>
              <b>예약자 이름: </b>
              <span>{props.userInfo.userName}</span>
            </div>
          </div>
        </form>
        <form name="mylist_form3">
          <div>
            <div>
              <b>휴대폰 번호: </b>
              <span>{props.userInfo.phoneNumber}</span>
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
          <a href=""> 로그아웃</a> <a href=""> 회원탈퇴</a>
        </div>
      </div>
    </div>
  );
}

export default InfoManagement;
