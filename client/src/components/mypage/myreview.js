import { useState } from "react";
import img1 from "./image/잠실체리.jpg";
import img2 from "./image/잠실쿠키.jpg";
import img3 from "./image/신림 홀리데이.jpg";
import img4 from "./image/상봉 호텔버스.jpg";
import img5 from "./image/용전 더휴식 노크인호텔.jpg";
import img6 from "./image/히히.jpg";
import "./myreview.css";
import 결과없음 from "./../image/결과없음.png";
import 리뷰 from "./../image/리뷰.png";

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
              <div class="jsw_01">
                <div>
                  <img src={a.img}></img>
                </div>
                <div className="useCardBox">
                  <div>
                    <div className='flexCardBox'>
                      <div class="star-ratings">
                        <div
                          className="star-ratings-fill space-x-2 text-lg"
                          style={{ width: ratingToPercent(a.rating) + "%" }}
                        >
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <div class="star-ratings-base space-x-2 text-lg">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                      <div>{a.date}</div>
                    </div>
                    <div>{a.ment}</div>
                  </div>

                  <div className="rereservationBtnBox">
                    <p>리뷰 삭제</p>
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
