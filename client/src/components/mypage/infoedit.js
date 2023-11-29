import './infoedit.scss';
import React from "react";
import axios from 'axios';
import { API_URL } from "../config/contansts";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../useCookies";
import { Content } from 'antd/es/layout/layout';

function InfoEdit(props) {
  const navigate = useNavigate()
  const domainListEl = document.querySelector('#domain_list')
  const domainInputEl = document.querySelector('#domain_txt')
  // console.log('list', domainListEl);
  // console.log('input',domainInputEl);

  const updateUser = async (e)=>{
    e.preventDefault()

    const user_id = getCookie('user_Code');
    const id = e.target.editID.value || props.userInfo.id;
    const pwd = e.target.editPWD.value || props.userInfo.password;
    const CK_pwd = e.target.editPWD_check.value || props.userInfo.password;
    const newEmail = CK_email(e.target.domain_name.value,e.target.domain_txt.value);
    const email = newEmail || props.userInfo.email;
  
    

  console.log('client',user_id,id,pwd,email);
    if (pwd == CK_pwd) {
      axios.post(`${API_URL}/user/update`,{user_id:user_id,id:id,password:pwd,email:email})
        .then(
          console.log('수정')
          // alert('다시로그인해주세요'),
          // removeCookie('login'),
          // removeCookie('user_Code'),
          // navigate('/login')
        )
    }
  }

  const CK_email = (name, txt)=>{
    // console.log('client',name, txt);
    if (!name || !txt) {
      if (!name && !txt) {
        return null
      }else return alert('이메일을 완성해주세요');
    }else return name+"@"+txt
  }

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


// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#birth-year')
const birthMonthEl = document.querySelector('#birth-month')
const birthDayEl = document.querySelector('#birth-day')
// option 목록 생성 여부 확인
console.log(birthYearEl);
console.log(birthMonthEl);
console.log(birthDayEl);
var isYearOptionExisted = false;
var isMonthOptionExisted = false;
var isDayOptionExisted = false;

const YearSelect = (event) =>{
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= 2023; i++) {
      // option element 생성
      const YearOption = document.createElement('option')
      YearOption.setAttribute('value', i)
      YearOption.innerText = i
      // birthYearEl의 자식 요소로 추가
      birthYearEl.appendChild(YearOption);
    }
  }
  console.log(birthYearEl.value);
}

const MonthSelect = (event) =>{
  // month 목록 생성되지 않았을 때 (최초 클릭 시)
  if(!isMonthOptionExisted) {
  isMonthOptionExisted = true
    for(var i = 1; i <= 12; i++) {
      // option element 생성
      const MonthOption = document.createElement('option')
      MonthOption.setAttribute('value', i)
      MonthOption.innerText = i
      // birthMonthEl의 자식 요소로 추가
      birthMonthEl.appendChild(MonthOption);
    }
  }
  console.log(birthMonthEl.value);
isDayOptionExisted = false;
birthDayEl.options.length = 1; 
}


const DaySelect = (event) =>{
  var Vdate = 0; //월에 따라 일 최대치 정하기 위한 함수
  
  // day 목록 생성되지 않았을 때 (최초 클릭 시)
  console.log(birthMonthEl.value,"월");
  switch (birthMonthEl.value) {
    case '1':
    case '3':
    case '5':
    case '7':
    case '8':
    case '10':
    case '12':
      Vdate = 31;
      console.log("1,3,5,7,8,10,12월 Vdate=",Vdate);
    break;

      case '4':
      case '6':
      case '9':
      case '11':
        Vdate = 30;
      console.log("4,6,9,11월 Vdate=",Vdate);
    break;
      case '2':
        Vdate = 29;
      console.log("2월 Vdate=",Vdate);
    break;
  } 
    
if(!isDayOptionExisted) {
  isDayOptionExisted = true
    for(var i = 1; i <= Vdate; i++) {
      // option element 생성
      const DayOption = document.createElement('option')
      DayOption.setAttribute('value', i)
      DayOption.innerText = i
      // birthDayEl의 자식 요소로 추가
      birthDayEl.appendChild(DayOption);
    }
  }
  console.log(birthDayEl.value);
}
// Month, Day도 동일한 방식으로 구현

  
  return (
    <div className="mylist_change">
      <h3>내 정보 변경</h3>
      <form onSubmit={updateUser}>
        <table id='edit_Table'>
          <tr>
            <td className='td_1'>이메일</td>
            <td className='td_2'>
              <label className='label_In_td'>
              <input id='domain_name' name='Email_domain' placeholder='이메일 입력' className='small_box'></input>
              <span> @ </span>
                <input className='small_box' id="domain_txt" type="text" />
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
            <td className='td_2'><input id="editPWD" type='password'></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>비밀번호 확인</td>
            <td className='td_2'><input id="editPWD_check" type='password'></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>이름</td>
            <td className='td_2'><input disabled placeholder={props.userInfo.name}></input></td>
            <td className='td_3'></td>
          </tr>
          <tr>
            <td className='td_1'>성별</td>
            <td>
              <label className='radio_btn'>
                <input type='radio' value={'남자'} name='checkS' checked/>남자
              </label>
              <label className='radio_btn'> 
                <input type='radio' value={'여자'} name='checkS'/>여자
              </label>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className='td_1'>생년월일</td>
            <td className='td_2'>
              <label className='label_In_td'>
              <select class="box" id="birth-year" onClick={YearSelect}>
                <option disabled selected>출생 연도</option>
              </select>
              <span className='span_pad'>년</span>
              <select class="box" id="birth-month" onClick={MonthSelect}>
                <option disabled selected>월</option>
              </select>
              <span className='span_pad'>월</span>
              <select class="box" id="birth-day" onClick={DaySelect}>
                <option disabled selected>일</option>
              </select>
              <span className='span_pad'>일</span>
              </label>
            </td>
            <td className='td_3'>
              <label className='radio_btn'>
                <input type='radio' value={'양력'} name='check' checked/>
                양력
              </label>
              <label className='radio_btn'>
                <input type='radio' value={'음력'} name='check'/>
                음력

            </label>
            </td>
          </tr>
          <tr>
            <td className='td_1'>휴대폰 번호</td>
            <td className='td_2'>

              <input type='text' disabled className='num_place' placeholder={props.userInfo.contact_number.slice(0,3)}></input> 
              <span> - </span>
              <input type='text' disabled className='num_place' placeholder={props.userInfo.contact_number.slice(3,7)}></input>
              <span> - </span>
              <input type='text' disabled className='num_place' placeholder={props.userInfo.contact_number.slice(7,11)}></input>
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
