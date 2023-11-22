import "./notice.css";

function Notice(props) {
  return (
    <div className="Notice_main">
      <div>
        <h4>서비스 공지사항</h4>
      </div>
      <div>
        <div>
        <input id="check-btn" type="checkbox" />
          <label for="check-btn"><p>[공지] 여기어때 포인트 지급 정책 변경 안내</p></label><br/>
          <span>2023.11.15</span>
            <div class="menubars">
              <div>
                <p>안녕하세요. 여기어떄입니다.</p>
                <p>여기어때의 포인트 지급 정책이 아래와 같이 변경됩니다.</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1atbk-TzYL6RfvNrGa66EUzoaySWCMWvypsfH3hKKKsU/edit?usp=sharing">작업진행도 보기</a></p>
                <p><a href="https://github.com/IkGy/popol3.git">코드 전체보기(GIT)</a></p>
              </div>
              <div>
                <span>1. 주요 사항</span>
                <p>1000포인트, 2000 포인트 지급 기준을 '200자 이상 + 사진 3장 이상'으로 변경</p>
              </div>
              <div>
                <span>2. 변경 사항</span>
                <div>
                  
                </div>
              </div>
            </div>   
        </div>
      </div>
    </div>
  );
}

export default Notice;
