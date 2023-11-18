import { useState } from "react";
import img1 from "./image/잠실체리.jpg";
import img2 from "./image/잠실쿠키.jpg";
import img3 from "./image/신림 홀리데이.jpg";
import img4 from "./image/상봉 호텔버스.jpg";
import img5 from "./image/용전 더휴식 노크인호텔.jpg";
import img6 from "./image/수원역 썸.jpg";
import "./myreview.css";
import 결과없음 from "./../image/결과없음.png";

function Myreview() {
  let [myreview, setMyreview] = useState([
    {
      id: 1,
      img: img1,
      rating: 0.5,
      ment: "존나 더러워요... 가지마세요;;하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하하",
      date: "2023-11-18",
    },
    {
      id: 2,
      img: img2,
      rating: 3.8,
      ment: "사장님께서 친절하십니다.",
      date: "2024-10-31",
    },
    {
      id: 3,
      img: img3,
      rating: 5,
      ment: "깨끗하고 넓고 좋습니다!!",
      date: "2025-07-08",
    },
    {
      id: 4,
      img: img4,
      rating: 1,
      ment: "빈대나옴",
      date: "2026-01-28",
    },
    {
      id: 5,
      img: img5,
      rating: 0,
      ment: "죽여줘",
      date: "2027-11-13",
    },
  ]);

  const ratingToPercent = (a) => {
    const restaurant = { averageScore: a };

    const score = +restaurant.averageScore * 20;
    return score + 1.5;
  };

  return (
    <div>
      <div className="myreviewTitle">
        <span>
          작성리뷰 <span>{myreview.length}</span>개
        </span>
      </div>
      {myreview == "" ? (
        <div className="reservationComentBox">
          <img src={결과없음}></img>
          <div className="reservationComent">작성된 리뷰가 없습니다.</div>
        </div>
      ) : (
        <div className="usepageGridBox">
          {myreview.map((a, i) => {
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
