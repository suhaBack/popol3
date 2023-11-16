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

    return (
        <div className="registerBg">
            <span>왔다가</span>
            <form className="sform" onSubmit={handleLogin}>
                <h3>로그인</h3>
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
                    <label>비밀번호</label>
                    <input
                        id="Npwd"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <div>
                    <div>
                        <button type="submit">
                            로그인
                        </button>
                    </div>
                </div>

                <p>
                    계정이 없으신가요? <Link to="/login">로그인</Link>
                </p>

                <button>홈으로 돌아가기</button>
            </form>
        </div>
    );
}

export default Login;
