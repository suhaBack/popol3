function Alarm(){
  return (
   <div>
     <div>
      <div>
        <span>알림 설정</span>
        <p>특가, 쿠폰 등 이벤트 정보를 빠르게 알려드릴게요.</p>
      </div>
      <div>
        <span>앱 잠금, 최근 본 상품 저장, 앱 푸시, 접근 권한 설정은 여기어때 앱에서 가능해요.</span>
      </div>
      <div>
        <div>
          <form method='get'>
           <label><input type="checkbox" name="color" value="blue"/> 마케팅 알림 수신 동의(선택)</label>
          </form>
        </div>
      </div>
      <div>
        <div>
          <form method='get'>
           <label><input type="checkbox" name="color" value="blue"/> 문자</label>
          </form>
        </div>
      </div>
      <div>
        <div>
          <form method='get'>
            <label><input type="checkbox" name="color" value="blue"/> 이메일</label>
          </form>
        </div>
      </div>
    </div>
    <div>
      <button>저장</button>
    </div>
   </div>
  )
}

export default Alarm;