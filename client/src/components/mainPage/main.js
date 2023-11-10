import { Image } from "./imageScroll/image";
import { Issue } from "./issue/issue";
import { NewEvent } from "./event/newEvent";
function Main() {
  // id pwd name email phone kind(0일반회원,1사업자)
  // 모텔 호텔 펜션 게스트하우스 캠핑 해외
  return(
    <div>
      <Image></Image> 
      <ul>
        <li>
          icon예정
          <p>모텔</p>
        </li>
        <li>
          icon예정
          <p>호텔|리조트</p>
        </li>
        <li>
          icon예정
          <p>펜션</p>
        </li>
        <li>
          icon예정
          <p>게스트하우스</p>
        </li>
        <li>
          icon예정
          <p>캠핑|글램핑</p>
        </li>
        <li>
          icon예정
          <p>해외여행</p>
        </li>
      </ul>
      <Issue></Issue>
      {/* <div className="mainDownApp">

      </div> */}
      <NewEvent></NewEvent>
      <Addask></Addask>
    </div>
  )
}

export default Main;