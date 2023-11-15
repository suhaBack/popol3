import WorkImg from "../../image/b2b_banner.png"
import './issue.css'

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
    <div  className='issueBox'>
      <div className='mainTitle'>왔다<span className='ga'>가</span> 뉴스</div>
      <div className='issueGridBox1'>
        {bener.map(contents =>
          <div className='issueGridBox2'>
            <img src={contents.ImgURL} width='100%' height='100%'></img>
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