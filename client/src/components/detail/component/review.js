import "./review.css";
import 프로필 from "./../../image/프로필.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from "../../config/contansts";

function Review(props) {

  const [review, setReview] = useState([]);

  const fetchReviewData = async () => {
    try {
        const res = await axios.get(`${API_URL}/detail/`,{params:{id:props.lodging}});
        setReview(res.data);
        console.log('해당 데이터를 불러왔습니다')
        console.log(res.data);
    } catch (err) {
        console.error('해당 공지사항 데이터를 가져오지 못하였습니다')
        console.error(err);
    }
  };
  useEffect(() => {
    fetchReviewData();
  }, );

  function Review() {
    const ratingToPercent = (a) => {
      const restaurant = { averageScore: a };
  
      const score = +restaurant.averageScore * 20;
      return score + 1.5;
    };
    return (
      <div className="reviewpage">
        <div className="reviewpageMain">
          <div className="reviewpageMainTitle">최고예요</div>
          <div className="reviewpagerating">
            <div class="star-ratings">
              <div
                className="star-ratings-fill space-x-2 text-lg"
                style={{ width: ratingToPercent(4.8) + "%" }}
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
            <span className="rating">4.8</span>
          </div>
  
          <div className="reviewpagecount">
            <div>전체 리뷰 32</div>
            <div>제휴점 답변 3</div>
          </div>
        </div>
  
        <div className="reveiwBox">
          <div className="img1">
            <img src={프로필} alt="profile"></img>
          </div>
          <div>
            <div className="Title1">
              <h2>여기 너무 좋아요</h2>
            </div>
            <div className='starBox'>
              <div class="star-ratings">
                <div
                  className="star-ratings-fill space-x-2 text-lg"
                  style={{ width: ratingToPercent(5) + "%" }}
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
              <span className="rating">5.0</span>
            </div>
  
            <div className="name1">
              <b>풀빌라 (201호) 객실이요 / 시고르자브종 </b>
            </div>
  
            <div className="txt1">
              <div>
                "너무 조용하고 좋은 여행였지만 폰 충전기를 깜박하고 못챙겨가서
                추가비용 온수+숯불 5만원문자를 늦게 확인되서 입금이 늦었네요"
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  }

export default Review;
