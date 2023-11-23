import { useState } from 'react';
import { Nav } from "react-bootstrap";
import Recommened_motel from './recommend_motel';
import Recommened_hotel from './recommend_hotel';
import Recommened_penstion from './recommened_penstion';
import Recommened_guesthouse from './recommend_guesthouse';
import Recommened_camping from './recommened_camping';

function Recommend_main(props) {
  let [select, setSelect] =useState(0);
  return (
    <div className="inquiry_main">
      <div>
        <Nav style={{paddingLeft: '2vw'}}variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
              setSelect(0)
            }}>[추천] 모텔</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
              setSelect(1)
            }}>[추천] 호텔/리조트</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link2" onClick={()=>{
              setSelect(2)
            }}>[추천] 펜션</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link3" onClick={()=>{
              setSelect(3)
            }}>[추천] 게스트하우스</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link4" onClick={()=>{
              setSelect(4)
            }}>[추천] 캠핑/글램핑</Nav.Link>
          </Nav.Item>
        </Nav>
        <Uicontent selcet={select}></Uicontent>
      </div>
    </div>
  );
}
function Uicontent(props) {
  return [<Recommened_motel/>,<Recommened_hotel/>,<Recommened_penstion/>,<Recommened_guesthouse/>,<Recommened_camping/>][props.selcet]
}

export default Recommend_main;
