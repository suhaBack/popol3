import "./review.css";
import 프로필 from "./../../image/프로필.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/contansts";

function Review(props) {
    const [review, setReview] = useState([]);
    const INITIAL_REVIEW_COUNT = 3;
    const [visibleReviews, setVisibleReviews] = useState(INITIAL_REVIEW_COUNT);

    const showMoreReviews = () => {
        setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
    };

    const closeReviews = () => {
        setVisibleReviews(INITIAL_REVIEW_COUNT);
    };

    const fetchReviewData = async () => {
    try {
        const res = await axios.get(`${API_URL}/reviews/detail/`,{params:{id:props.lodging}});
        setReview(res.data);
        console.log('해당 데이터를 불러왔습니다')
        console.log(res.data);

    } catch (err) {
      console.error("해당 공지사항 데이터를 가져오지 못하였습니다");
      console.error(err);
    }
    };
    useEffect(() => {
    fetchReviewData();
  }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // getMonth()는 0부터 시작
        const day = date.getDate();
    
        return `${year}년 ${month.toString().padStart(2, '0')}월 ${day.toString().padStart(2, '0')}일`;
    }
    
    function renderStars(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '⭐';
        }
        return stars;
    }    

    return (
        <>
            <div className='KJH_rv_container'>
                
                <div className='KJH_rv_title'>
                    전체 리뷰 : {review.length}
                </div>
                {review.slice(0, visibleReviews).map((item, index) => (
                    <div key={index} className="KJH_rv_info_map">
                        <div className="KJH_rv_image">
                            <img src={프로필} alt="profile" />
                        </div>
                        <div className="KJH_rv_content_section">
                            <div>유저번호 : {item.user_id}</div>
                            <div>{renderStars(item.rating)} | ( {item.rating} )</div>
                            <div className="KJH_rv_content_create">등록일 : {formatDate(item.createdAt)}</div>
                            <div className="KJH_rv_content_review">{item.content}</div>
                        </div>
                    </div>
                ))}
                {review.length > visibleReviews && (
                    <button onClick={showMoreReviews} className="KJH_rv_btn">더보기</button>
                )}
                {visibleReviews > INITIAL_REVIEW_COUNT && (
                    <button onClick={closeReviews} className="KJH_rv_btn">닫기</button>
                )}
            </div>
        </>
    );
}

export default Review;