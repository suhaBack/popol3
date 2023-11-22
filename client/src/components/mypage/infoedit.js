import React from "react";
import axios from 'axios';
import { API_URL } from "../config/contansts";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../useCookies";

function InfoEdit(props) {
  const navigate = useNavigate()

  const updateUser = async (e)=>{
    e.preventDefault()
    const user_id = props.userInfo.user_id
    const id = e.target.editID.value
    const pwd = e.target.editPWD.value
  // console.log('client',user_id,id,pwd);
  axios.post('/user/update',{user_id,id,pwd})
    .then(
      alert('다시로그인해주세요'),
      removeCookie('login'),
      navigate('/login')
    )
  }
  
  return (
    <div className="mylist_change">
      <div>내 정보 변경</div>
      <form onSubmit={updateUser}>
        <div>
          <b>닉네임: </b>
          <input id="editID" placeholder={props.userInfo.id}></input>
        </div>
        <div>
          <b>비밀번호: </b>
          <input id="editPWD" placeholder={props.userInfo.password}></input>
        </div>
        <div>
          <b>예약자 이름: </b>
          <span>{props.userInfo.name}</span>
        </div>
        <div>
          <b>휴대폰 번호: </b>
          <span>{props.userInfo.contact_number}</span>
          <div id="security">
            개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.
          </div>
        </div>
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}

export default InfoEdit;
