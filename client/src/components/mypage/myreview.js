import "./myreview.css";
import 결과없음 from "./../image/결과없음.png";
import 리뷰 from "./../image/리뷰.png";
import Star_y from "./image/star_y.png";
import Star_n from "./image/star_n.png";

function Myreview(props) {
  //리뷰데이터데이스 사용
  console.log('zxc',props.reviewData[0].content);
  const reviews = props.reviewData
  console.log(reviews);
  const ratingToPercent = (a) => {
    const restaurant = { averageScore: a };
    const score = +restaurant.averageScore * 20;
    return score + 1.5;
  };


function StarRating({ rating }) {
  const totalStars = 5;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(totalStars)].map((_, i) => (
        <span key={i}>
          <StarIcon filled={i < rating} />
        </span>
      ))}
    </div>
  );
}

const StarIcon = ({ filled }) => (
  <img
    src={filled ? Star_y : Star_n}
    alt={filled ? "색칠된 별" : "색칠되지 않은 별"}
    style={{
      marginRight: '2px',
      width: '40px',
      height: '40px',
      display: 'block'
    }}/>
);

function format(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

  return (
    <div>
      <div className="myreviewTitle">
        <img src={리뷰}></img>
        <span>
          작성리뷰 <span>{reviews.length}</span>개
        </span>
      </div>
      {reviews == "" ? (
        <div className="reservationComentBox">
          <img src={결과없음}></img>
          <div className="reservationComent">작성된 리뷰가 없습니다.</div>
        </div>
      ) : (
        <div className="usepageGridBox">
          {reviews.map((a, i) => {
            return (
              <div>
                {/* 마이페이지 - 리뷰 전체 */}
                <div className="myreview_info">
                  {/* 별점 */}
                  <div className="star_info">
                    <StarRating rating={a.rating} />
                  </div>
                  {/* 작성일자 */}
                  <div className="date_info">
                    작성일자 : {format(a.createdAt)}
                  </div>
                  {/* 리뷰 내용 관련 */}
                  <div className="content_info">
                    {a.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Myreview;
