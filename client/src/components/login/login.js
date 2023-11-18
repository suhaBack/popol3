import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 이메일 형식 검사 함수
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  }

  // 비밀번호 강도 검사 함수 (6자 이상)
  function validatePassword(pwd) {
    return pwd.length >= 6;
  }

  // 로그인 처리 함수
  const handleLogin = async (e) => {
    let errorMessage = "";

    e.preventDefault();
    const email = e.target.Nemail.value;
    const pwd = e.target.Npwd.value;

    // 빈 값 검사
    if (pwd !== "" && email !== "") {
      // 이메일 형식 검사
      if (!validateEmail(email)) {
        errorMessage = "유효한 이메일 주소를 입력해주세요.";
      }
      // 비밀번호 길이 검사 (6자 이상)
      if (!validatePassword(pwd)) {
        errorMessage = "비밀번호는 6자 이상이어야 합니다.";
      }

      // 로그인 처리 로직 추가 (서버와의 통신 등)
    } else {
      errorMessage = "전부 입력해주세요";
    }

    // 에러 메시지가 있으면 표시
    if (errorMessage) {
      alert(errorMessage);
    }
  };

  const initialIconColors = {
    emailIcon: "gray",
    pwdIcon: "gray",
  };

  const changeIconColor = (iconId, color) => {
    const icon = document.getElementById(iconId);
    if (icon) {
      icon.style.color = color;
    }
  };

  const resetOtherIconColors = (clickedIconId) => {
    Object.keys(initialIconColors).forEach((iconId) => {
      if (iconId !== clickedIconId) {
        changeIconColor(iconId, initialIconColors[iconId]);
      }
    });
  };

  return (
    <div className="loginBg">
      <div className="loginpage container">
        <form className="sform" onSubmit={handleLogin}>
          <Link to="/">
            <h3>
              왔다<spna className="ga">가!</spna>
            </h3>
          </Link>

          <div
            className="inputBox"
            onClick={() => {
              changeIconColor("emailIcon", "black");
              resetOtherIconColors("emailIcon");
            }}
          >
            <i id="emailIcon" class="fa-solid fa-envelope"></i>
            <input id="Nemail" type="email" placeholder="Email" />
          </div>

          <div
            className="inputBox"
            onClick={() => {
              changeIconColor("pwdIcon", "black");
              resetOtherIconColors("pwdIcon");
            }}
          >
            <i id="pwdIcon" class="fa-solid fa-lock"></i>
            <input id="Npwd" type="password" placeholder="Password" />
          </div>

          <div>
            <div className="loginBtn">
              <button type="submit">로그인</button>
            </div>
          </div>
          <div className="hr-sect">또는</div>
          <div className="kakaologin">카카오톡 로그인</div>
          <p className="loginhelp">
            계정이 없으신가요? <Link to="/register">회원가입</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
