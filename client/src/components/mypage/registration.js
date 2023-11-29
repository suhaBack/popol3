import './registration.scss';
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Upload } from "antd";
import { API_URL } from "../config/contansts";



function Registration() {
  const [imageUrl, setImageUrl] = useState(null);
  // const navigate = useNavigate();

  const upload = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;//이름
    const address = e.target.adress.value;//위치
    const review = e.target.review.value;//시설 설명
    const categoryType = e.target.categoryType.value;
    const image = imageUrl;

    console.log(image);
    const roomType = e.target.bedtype.value;
    const roomPrice = e.target.price.value;
    const roomHeadcount = e.target.headcount.value;

    if (!name || !address || !review || !categoryType) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    if (!imageUrl) {
      alert("배경 사진을 첨부해주세요");
      return;
    }

    await axios.post('/lodging',{name:name, location:address, imageUrl:image, type:categoryType, description:review}
    )
    .then( async ()=>{
     const lodgingdb = await axios.get('/lodging/add',{params:{name:name}})
     .then( async ()=>{
       console.log('시설아이디',lodgingdb.lodging_id);
      await axios.post('/rooms',{lodging_id:lodgingdb.lodging_id, type:roomType, price:roomPrice, capacity:roomHeadcount})
      .then(()=>{
        console.log("db 시설등록 완료");
      })
     })
    })
    .catch((err)=>{
      console.log('시설 등록 오류');
      console.error(err);
    })

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
            <h3><br></br>방 등록하기</h3>
            <tr>
              <td><label>침대 유형</label></td>
              <td>
                <select id="bedtype" className="registration-control">
                  <option value="싱글">싱글 배드</option>
                  <option value="더블">더블 배드</option>
                  <option value="트윈">트윈 배드</option>
                </select>
              </td>
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
              <td></td>
              <td><button type="submit" className='upload_btn'>등록하기</button></td>
            </tr>
          </table>
        </form>
      </div>
      {/* <div className='upload_option'>
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
              <td></td>
              <td><button type="submit" className='upload_btn'>등록하기</button></td>
            </tr>
          </table>
        </form>
      </div> */}
    </div>
  );
};

export default Registration;