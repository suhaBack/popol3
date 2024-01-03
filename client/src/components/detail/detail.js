import React, { useEffect, useState } from "react";
import "./detail.css";
import RoomReservation from "./component/roomreservation";
import RoomInformation from "./component/roominformation";
import Review from "./component/review";
import detailslide1 from "./image/detailslide1.jpg";
import detailslide2 from "./image/detailslide2.jpg";
import detailslide3 from "./image/detailslide3.jpg";
import detailslide4 from "./image/detailslide4.jpg";
import detailslide5 from "./image/detailslide5.jpg";
import detailslide6 from "./image/detailslide6.jpg";
import Detailsilde from "./component/detailslide";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/contansts";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  // console.log(id); // 21
  const [button, setButton] = useState("객실안내/예약");
  const [lodginData, setLodgingData] = useState([]);
  const [end, setEnd] = useState("");

  const ButtonClick = (selectButton) => {
    setButton(selectButton);
  };

  const getData = async () => {
    await axios
      .get(`${API_URL}/lodging/detail`, { params: { lodging_id: id } })
      .then((res) => {
        setLodgingData(res.data);
        console.log("res.data: ", res.data);
      })
      .catch(console.log("lodging실패"));
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [button]);

  const [images, setImages] = useState([
    detailslide1,
    detailslide2,
    detailslide3,
    detailslide4,
    detailslide5,
    detailslide6,
  ]);

  const [selectImg, setSelcetImg] = useState(detailslide1);

  console.log(selectImg);

  return (
    <div className="backGround">
      <div className="detailpage container">
        <div className="detailGridBox">
          <div className="detailImgdBox">
            <img src={lodginData.imageURL} alt="선택된 이미지" />
          </div>
          <div className="right">
            <div className="info">
              <h2>{lodginData.name}</h2>
              <div className="rightrating">
                <span>{lodginData.rating}</span> 만족해요
              </div>
              <p className="adress">{lodginData.location}</p>
              <div className="comment">
                <h4>사장님 한마디</h4>
                <div>
                  <div>{lodginData.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Detailsilde
          images={images}
          setSelcetImg={setSelcetImg}
          selectImg={selectImg}
        ></Detailsilde>

        <div className="detailPageTab">
          <button
            className={button === "객실안내/예약" ? "active" : ""}
            onClick={() => ButtonClick("객실안내/예약")}
          >
            객실안내/예약
          </button>
          <button
            className={button === "숙소정보" ? "active" : ""}
            onClick={() => ButtonClick("숙소정보")}
          >
            숙소정보
          </button>
          <button
            className={button === "리뷰" ? "active" : ""}
            onClick={() => ButtonClick("리뷰")}
          >
            리뷰
          </button>
        </div>

        <div className="room/booking">
          {button === "객실안내/예약" && (
            <div className={"start " + end}>
              <RoomReservation
                button={button}
                setButton={setButton}
              ></RoomReservation>
            </div>
          )}
        </div>
        <div className="roominfo">
          {button === "숙소정보" && (
            <div className={"start " + end}>
              <RoomInformation
                button={button}
                setButton={setButton}
                lodginData={lodginData}
              ></RoomInformation>
            </div>
          )}
        </div>
        <div className="review">
          {button === "리뷰" && (
            <div className={"start " + end}>
              <Review button={button} setButton={setButton}></Review>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
