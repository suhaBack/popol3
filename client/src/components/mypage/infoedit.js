import './infoedit.scss';
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

  // 도메인 직접 입력 or domain option 선택
  const domainListEl = document.querySelector('#domain-list')
  const domainInputEl = document.querySelector('#domain-txt')
  // console.log('list', domainListEl);
  // console.log('input',domainInputEl);
  

const tlqkf = (event) => {
  console.log("domainInputEl : " , domainInputEl);
  console.log("domainListEl : " , domainListEl);
  console.log("event.target : " , event.target);
  // option에 있는 도메인 선택 시
  if(event.target.value !== "type") {
  // 선택한 도메인을 input에 입력하고 disabled
    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { // 직접 입력 시
  // input 내용 초기화 & 입력 가능하도록 변경
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
}


  
  return (
    <div className="mylist_change">
      <h3>내 정보 변경</h3>
      <form onSubmit={updateUser}>
        <table id='edit_Table'>
          <tr>
            <td className='td_1'>이메일</td>
            <td className='td_2'>
              <input name='Email_domain' placeholder='이메일 입력' className='small_box'></input>
              <span> @</span>
              <label>
                <input className='small_box' id="domain-txt" type="text"  />
                  <select className='small_box' id="domain-list" onChange={tlqkf}>
                    <option value="type">직접 입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="kakao.com">kakao.com</option>
                    <option value="kookje.ac.kr">kookje.ac.kr</option>
                </select>     
              </label>
            </td>
            <td className='td_3'>
              <input type='button' value='중복확인'></input>
              <></>
            </td>
          </tr>
          <tr>
            <td className='td_1'>닉네임</td>
            <td className='td_2'><input id="editID" placeholder={props.userInfo.id}></input></td>
            <td className='td_3'><input type='button' value='중복확인'></input></td>
          </tr>
          <tr>
            <td className='td_1'>비밀번호</td>
            <td className='td_2'><input id="editPWD" placeholder={props.userInfo.password} type='password'></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>비밀번호 확인</td>
            <td className='td_2'><input id="editPWD_check" type='password'></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>이름</td>
            <td className='td_2'><input placeholder={props.userInfo.name}></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>성별</td>
            <td>
              <label className='radio_btn'>
                <input type='radio' value={'남자'} name='man' checked/>남자
              </label>
              <label className='radio_btn'> 
                <input type='radio' value={'여자'} name='woman'/>여자
              </label>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className='td_1'>생년월일</td>
            <td className='td_2'>
              <label>
              <select class="box" id="birth-year">
                <option disabled selected>출생 연도</option>
              </select>
              <select class="box" id="birth-month">
                <option disabled selected>월</option>
              </select>
              <select class="box" id="birth-day">
                <option disabled selected>일</option>
              </select>











                <select name='year'>
                  <option value={1900}>1900</option>
                </select>
                년
              </label>
              <label>
                <select name='month'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                월
              </label>
                <select name='day'></select>
                일
              <label>

              </label>
            </td>
            <td className='td_3'>
              <label className='radio_btn'>
                <input type='radio' value={'양력'} name='양력' checked/>
                양력
              </label>
              <label className='radio_btn'>
                <input type='radio' value={'음력'} name='음력'/>
                음력
            </label>
            </td>
          </tr>
          <tr>
            <td className='td_1'>휴대폰 번호</td>
            <td className='td_2'>
              <span>
                {props.userInfo.contact_number}
              </span>
            </td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td colSpan={3}>개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className='td_3'><button type="submit" >수정하기</button></td>
          </tr>
        </table>

        
      </form>
    </div>
  );
}

export default InfoEdit;
