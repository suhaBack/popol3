import './registration.scss';
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import { API_URL } from "../config/contansts";



function Registration() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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

    const onChangeImage = (info) => {
      // 파일이 업로드 중일 때
      console.log("new", info.file);
      if (info.file.status === "uploading") {
        console.log("업로드중");
        return;
      }
      // 파일이 업로드 완료 되었을 때
      if (info.file.status === "done") {
        console.log("성공");
        const response = info.file.response;
        const imageUrl = response.imageUrl;
        // 받은 이미지경로를 imageUrl에 넣어줌
        setImageUrl(imageUrl);
      }
    };

  return (
    <div className="registration_container">
      <div className="category_filter">
        <form onSubmit={upload}>
          <h3>시설 등록하기</h3>
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
              <td><label>시설설명</label></td>
              <td><input
                id="review"
                type="text"
                className="registration-control"
                placeholder="시설을 한 줄로 표현해주세요"
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
              <Upload
                name="image"
                action={`${API_URL}/image`}
                listType="picture"
                showUploadList={false}
                onChange={onChangeImage}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="" width="200px" height="200px" />
                ) : (
                  <div id="upload-img-placeholder">
                    <i class="fa-regular fa-file-image"></i><br/>
                    <span>포스터를 등록 해주세요.</span>
                  </div>
                )}
              </Upload>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button type="submit" className='upload_btn'>등록하기</button></td>
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
              <td><button type="submit" className='upload_btn'>등록하기</button></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Registration;