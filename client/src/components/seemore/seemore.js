import React, { useEffect, useState } from "react";
import "./seemore.css";
import Question from "./question";
import Inquiry from "./inquiry";
import Notice from "./notice";


function Seemore() {
  const [menu, setMenu] = useState("공지사항");

  const MenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };
  const [end, setEnd] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [menu]);

  let [userInfo, setUSerInfo] = useState({
    nickName: "왔다가",
    userName: "KDT",
    phoneNumber: "010-1234-5678",
  });

  return (
    <div className="seemorebackGround">
      <div className="seemoreTitle">
        <div>더보기</div>
      </div>
      <div className="seemore_maincontent">
        <div className="seemore_menu">
          <div>
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className={menu === "공지사항" ? "active" : "noactive"}
                    onClick={() => MenuClick("공지사항")}
                  >
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "자주 묻는 질문" ? "active" : "noactive"}
                    onClick={() => MenuClick("자주 묻는 질문")}
                  >
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={menu === "1:1 문의" ? "active" : "noactive"}
                    onClick={() => MenuClick("1:1 문의")}
                  >
                    1:1 문의
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>

        <div className="see_info">
          {menu === "공지사항" && (
            <div className={"start " + end}>
              <Notice menu={menu} userInfo={userInfo}></Notice>
            </div>
          )}

          {menu === "자주 묻는 질문" && (
            <div className={"start " + end}>
              <Question menu={menu} userInfo={userInfo}></Question>
            </div>
          )}

          {menu === "1:1 문의" && (
            <div className={"start " + end}>
              <Inquiry menu={menu} userInfo={userInfo}></Inquiry>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Seemore;
