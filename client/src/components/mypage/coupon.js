import './coupon.css'

function Coupon(props) {
  const drawStar = (target) => {
    document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
  }
  return (
    <div>
      <div>
        <p> 작성리뷰 <span>0건</span></p>
      </div>
      <div>
       <span class="star">
          ★★★★★
          <span>★★★★★</span>
          <input type="range" oninput="drawStar(this)" value="1" step="1" min="0" max="10"/>
        </span>
      </div>
      <div>
        <button>작성하기</button>
      </div>
    </div>
  );
}

export default Coupon;
