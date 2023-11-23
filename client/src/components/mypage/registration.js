import './registration.scss';
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/contansts";



function Registration() {
  const [selectedImage, setSelectedImage] = useState(null);
  // const navigate = useNavigate();

  const uploadimg = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const upload = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.adress.value;
    const review = e.target.review.value;
    const stars = e.target.stars.value;
    const reviewCount = e.target.reviewcount.value;
    const categoryType = e.target.categoryType.value;

    if (!name || !address || !review || !stars || !reviewCount || !categoryType) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    if (stars < 1 || stars > 5) {
      alert("별점은 1부터 5까지의 숫자여야 합니다.");
      return;
    }

    if (!selectedImage) {
      alert("배경 사진을 첨부해주세요");
      return;
    }
    
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        const response = await axios.post(`${API_URL}/upload`, formData);
        console.log("이미지 업로드 성공:", response.data);
      } catch (error) {
        console.error("이미지 업로드 에러:", error);
      }
    }


  return (
    <div className="registration_container">
      <div className="category_filter">
        <form onSubmit={upload}>
          <h3>카테고리</h3>
          <table className='sorting'>
            <tr>
              <td><label>이름</label></td>
              <td><input
                id="name"
                type="text"
                className="registration-control"
                placeholder="이름을 입력해주세요"
              /></td>
            </tr>
            <tr>
              <td><label>주소</label></td>
              <td><input
              id="adress"
              type="text"
              className="registration-control"
              placeholder="주소를 입력해주세요"
              /></td>
            </tr>
            <tr>
              <td><label>리뷰</label></td>
              <td><input
                id="review"
                type="text"
                className="registration-control"
                placeholder="리뷰"
              /></td>
            </tr>
            <tr>
              <td><label>별점 (1~5)</label></td>
              <td><input
                id="stars"
                type="range"
                className="registration-control"
                min="1"
                max="5"
              /></td>
            </tr>
            <tr>
              <td><label>리뷰 수</label></td>
              <td><input
                id="reviewcount"
                type="number"
                className="registration-control"
                placeholder="리뷰 수"
              /></td>
            </tr>
            <tr>
              <td><label>방 유형</label></td>
              <td><select id="categoryType" className="registration-control">
                <option value="0">모텔</option>
                <option value="1">호텔/리조트</option>
                <option value="2">펜션</option>
                <option value="3">게스트하우스</option>
                <option value="4">캠핑/글램핑</option>
              </select></td>
            </tr>
            <tr>
              <td><label>배경 사진 첨부</label></td>
              <td>
                <label for="categoryType_img" id='img_upload'>파일 선택</label>
                <input
                id="categoryType_img"
                type="file"
                className="registration-control"
                placeholder=""
                onChange={uploadimg}
                accept="image/*"
              /></td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">등록하기</button></td>
            </tr>
          </table>
        </form>
      </div>
      <div className='upload_option'>
        <form>
          <h3>방 등록하기</h3>
          <table className='sorting'>
            <tr>
              <td><label>침대 유형</label></td>
              <td><select id="bedtype" className="registration-control">
                <option value="0">싱글 배드</option>
                <option value="1">더블 배드</option>
                <option value="2">트윈 배드</option>
              </select></td>
            </tr>
            <tr>
              <td><label>가격</label></td>
              <td><input
                id="price"
                type="number"
                className="registration-control"
                placeholder="가격을 입력해주세요"/> </td>
            </tr>
            <tr>
              <td><label>수용인원</label></td>
              <td><input
                id="headcount"
                type="number"
                className="registration-control"
                placeholder="입장 가능 최대 인원"/></td>
            </tr>
            <tr>
              <td><label>사장님 한마디</label></td>
              <td><input
                id="bosscomment"
                type="text"
                className="registration-control"
                placeholder="사장님 한마디에 들어갈 코멘트를 적어주세요"/> </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit">등록하기</button></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
export default Registration;