import { useState } from 'react';
import { Nav } from "react-bootstrap";
import Pushinquiry1 from './pushinquiry1';
import Pushinquiry2 from './pushinquiry2';

function Inquiry(props) {
  let [select, setSelect] =useState(0);
  return (
    <div className="inquiry_main">
      <div>
        <Nav style={{paddingLeft: '2vw'}}variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
              setSelect(0)
            }}>나의 문의 내역</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
              setSelect(1)
            }}>새 문의 작성</Nav.Link>
          </Nav.Item>
        </Nav>
        <Uicontent selcet={select}></Uicontent>
      </div>
    </div>
  );
}
function Uicontent(props) {
  return [<Pushinquiry1/>,<Pushinquiry2/>][props.selcet]
}

export default Inquiry;
