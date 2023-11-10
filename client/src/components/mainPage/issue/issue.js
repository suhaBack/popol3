import WorkImg from "../../image/b2b_banner.png"
export function Issue(){
  const bener = [
    {
      ImgURL:WorkImg,
      Title:"일하러 왔다가",
      content: "출장부터 복지까지 '일하러 왔다가'에서 간편하게"
    },
    {
      ImgURL:WorkImg,
      Title:"왔다가 신상품 출시",
      content: "왔다가에서 만든 신상품 다운로드 받으세요"
    }]
  return(
    <div>
      <h2>왔다가 뉴스</h2>
      <div>
        {bener.map(contents =>
          <div>
            <img src={contents.ImgURL}></img>
            <span>
              <h3>{contents.Title}</h3>
              <p>{contents.content}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}