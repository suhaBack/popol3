import "./reviewwrite.css";
import reviewImg from "./../detail/image/detailslide1.jpg";

function ReviewWrite() {
  return (
    <div className="hotel-container">
      <div className="reviewWritepageTitle">
        <div className="container">
          <div className="searchTitle">리뷰작성</div>
        </div>
      </div>
      <div className="reviewWritebackGround">
        <div className="reviewWriteGridBox container">
          <div className="reviewWriteImg">
            <img src={reviewImg}></img>
          </div>

          <div className="reviewWriteinputBox">
            <div className="reviewWriteinput">
              <div className="reviewproductTtile">호텔이름</div>
              <form>
                <div className="reviewWriteinputGridBox">
                  <div className="reviewFormTitle">
                    <input
                      className="reviewTitleInput"
                      placeholder="리뷰 제목"
                    ></input>
                  </div>
                  <div className="reviewFormrating">
                    <div class="star-rating space-x-4 mx-auto">
                      <input
                        type="radio"
                        id="5-stars"
                        name="rating"
                        value="5"
                        v-model="ratings"
                      />
                      <label for="5-stars" class="star pr-4">
                        ★
                      </label>
                      <input
                        type="radio"
                        id="4-stars"
                        name="rating"
                        value="4"
                        v-model="ratings"
                      />
                      <label for="4-stars" class="star">
                        ★
                      </label>
                      <input
                        type="radio"
                        id="3-stars"
                        name="rating"
                        value="3"
                        v-model="ratings"
                      />
                      <label for="3-stars" class="star">
                        ★
                      </label>
                      <input
                        type="radio"
                        id="2-stars"
                        name="rating"
                        value="2"
                        v-model="ratings"
                      />
                      <label for="2-stars" class="star">
                        ★
                      </label>
                      <input
                        type="radio"
                        id="1-star"
                        name="rating"
                        value="1"
                        v-model="ratings"
                      />
                      <label for="1-star" class="star">
                        ★
                      </label>
                    </div>
                  </div>
                </div>

                <textarea
                  className="reviewFormcontent"
                  placeholder="리뷰 내용"
                ></textarea>
              </form>
            </div>

            <div className="reviewWriteBtnBox">
              <a href="/mypage">
                <div>작성 완료</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewWrite;
