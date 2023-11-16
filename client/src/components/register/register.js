import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const NewUser = async (e) => {
    e.preventDefault();
    const id = e.target.Nid.value;
    const pwd = e.target.Npwd.value;
    const CKpwd = e.target.CKpwd.value;
    const email = e.target.Nemail.value;
    const name = e.target.Nname.value;
    const phone = e.target.Nphone.value;
    if (id !== "" && pwd !== "" && name !== "" && email !== "" && phone !== "") {
      if (pwd === CKpwd) {
        await axios
          .post(`/user`, { id, pwd, name, email, phone })
          .then(() => {
            console.log("회원가입");
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        return alert("비밀번호가 다릅니다");
      }
    } else {
      return alert("전부 입력해주세요");
    }
  };
  return (
    <div>
      <span>왔다가</span>
      <form onSubmit={NewUser}>
        <h3>회원가입</h3>

        <div>
          <label>아이디</label>
          <input
            id="Nid"
            type="text"
            className="form-control"
            placeholder="ID"
          />
        </div>

        <div>
          <label>비밀번호</label>
          <input
            id="Npwd"
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input
            id="CKpwd"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <label>이름</label>
          <input
            id="Nname"
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div>
          <label>이메일</label>
          <input
            id="Nemail"
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div>
          <label>연락처</label>
          <input
            id="Nphone"
            type="text"
            className="form-control"
            placeholder="Phone number"
          />
        </div>

        <div>
          <div>
            <button type="submit">
              가입하기
            </button>
          </div>
        </div>

        <p>
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>

        <button>홈으로 돌아가기</button>
      </form>
    </div>
  );
}

export default Register;
