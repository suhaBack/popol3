import "./test.css";
import { useState } from "react";
import logo from "./../image/로고.png";
import search from "./../image/검색.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../useCookies";
import axios from "axios";
import $ from 'jquery';

// 버튼 클릭 시 검색창 표시를 위한 토글 함수 by 준영
function Test1() {
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


  return(
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
  );
}




// function Test() {
//   // let input = document.querySelector(".input");
//   let btn = document.querySelector(".btn");
//   // let parent = document.querySelector(".parent");
//   console.log('btn = ', btn);
//   // btn.addEventListener("click", () => {
//   //   parent.classList.toggle("active");
//   //   input.focus();
//   // });



//   return (
//     <div className="parent">
//       <input className="input" type="type" placeholder="Search..." />

//       <button className="btn">
//         <i className="fa-solid fa-magnifying-glass"></i>
//       </button>
//       <script>
//       </script>
//     </div>
    
//   );

  
// }



export default Test1;
