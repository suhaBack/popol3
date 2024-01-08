import "./adminPage.css";
import EditModal from "./Modal/EditModal.js";
// import Modal from "react-modal";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config/contansts";
import axios from "axios";
import { Link } from "react-router-dom";
import { error } from "jquery";

function AdminPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [managermenu, setManagermenu] = useState("유저목록");
  const [userList, setUserList] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  const [loging, setLoging] = useState([]);
  const [roomInfo, setRoomInfo] = useState([]);
  const [equalRoom, setEqualRoom] = useState();
  const [selectedLodging, setSelectedLodging] = useState("");
  const roomLoading_Id = 0;

  // 모달창을 위한 공간이야

  let [isModalOpen, setIsModalOpen] = useState(false);
  let [zIndex, setZindex] = useState(1);
  let [end, setEnd] = useState("");

  const open_modal = (id) => {
    console.log("id: ", id);
    setIsModalOpen(true);
    setZindex(0);
  };
  const close_modal = () => {
    setIsModalOpen(false);
    setZindex(1);
  };

  // Modal 활성화로 인한 Class Change Function
  const [modalClassChange, setModalClassChange] = useState(false);

  //

  const MenuClick = (selectMenu) => {
    setManagermenu(selectMenu);
  };

  const getFacility = async () => {
    await axios
      .get(`${API_URL}/lodging/all`)
      .then((res) => {
        setLoging(res.data);
        console.log("res.data: ", res.data);
      })
      .catch(console.log("loading실패"));
  };

  const getRooms = (alodging_id) => {
    console.log("alodging_id: ", alodging_id);
    axios
      .get(`${API_URL}/rooms/detail`, { params: { lodging_id: alodging_id } })
      .then((res) => {
        // roomLoading_Id = alodging_id;
        setRoomInfo(res.data);
        console.log("res.data: ", res.data);
        // console.log("roomLoading_Id: ", roomLoading_Id);
      })
      .catch(console.log("방 정보 로딩 실패"));
  };

  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, [isModalOpen]);

  useEffect(() => {
    getFacility();
    // getRooms();
    const getList = async () => {
      await axios.get(`${API_URL}/user/admin`).then((result) => {
        const items = result.data;
        setUserList(items);
      });
      await axios.get(`${API_URL}/bookings/admin`).then((result) => {
        const items = result.data;
        setBookingList(items);
      });
    };
    getList();
  }, []);

  const itemsPerPage = 20; // 한 페이지당 표시할 항목 수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = loging.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(loging.length / itemsPerPage);
  const maxVisiblePages = 10; // 보이는 페이지 숫자의 최대 개수
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="managercontainer2">
      <div className="managercontainer3" style={isModalOpen ? { backgroundColor: "rgba(79, 79, 79)" } : null}></div>
      <div
        className="managercontainer"
        style={isModalOpen ? { backgroundColor: "rgba(0, 0, 0, 0.578)" } : null}
      >
        <div className="managergirdbox container">
          <div className="managermenu">
            <div>
              <Link to="/" id="MainHome">
                왔다가
              </Link>
            </div>
            <button onClick={() => MenuClick("유저목록")} className="Side_Btn">
              유저목록
            </button>
            <button onClick={() => MenuClick("예약내역")} className="Side_Btn">
              예약내역
            </button>
            <button onClick={() => MenuClick("시설정보")} className="Side_Btn">
              시설정보
            </button>
          </div>
          <div className="board">
            {managermenu === "유저목록" && (
              <div className="Table_Div">
                <h3>유저목록</h3>
                <table className="User_Table">
                  <tr className="Table_Title">
                    <td className="User_Name">이름</td>
                    <td className="User_Id">아이디</td>
                    <td className="User_PW">비밀번호</td>
                    <td className="User_Email">이메일</td>
                    <td className="User_op">권한</td>
                  </tr>
                  {userList.map((a) => {
                    return (
                      <tr key={a.user_id}>
                        <td className="User_Name">{a.name}</td>
                        <td className="User_Id">{a.id}</td>
                        <td className="User_PW">{a.password}</td>
                        <td className="User_Email">{a.email}</td>
                        <td className="User_op">{a.role}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={5}>
                      권한 | 0 = 일반회원, 1 = 기업회원, 2 = 관리자
                      <br />
                      권한은 변경이 불가능합니다.
                    </td>
                  </tr>
                </table>
              </div>
            )}

            {managermenu === "예약내역" && (
              <div className="Table_Div">
                <h3>예약내역</h3>
                <table className="User_Table">
                  <tr className="Table_Title">
                    <td className="User_Name">예약자</td>
                    <td className="Facility">시설이름</td>
                    <td className="C_IN">체크인</td>
                    <td className="C_OUT">체크아웃</td>
                    <td className="Price">가격</td>
                    <td className="Status">상태</td>
                  </tr>

                  {bookingList.map((a) => {
                    //날짜 표시 함수
                    let Sdate = new Date(a.start_date);
                    let Edate = new Date(a.start_date);
                    // 년. 월. 일 형식으로 표시
                    let C_INdate = Sdate.toLocaleDateString();
                    let C_OUTdate = Edate.toLocaleDateString();
                    console.log(a.start_date);
                    // 요일 구하는 함수
                    // 숫자 형태로 리턴되기 때문에 0 - 6이 일 - 토의 형태를 띈다.
                    // 배열에 넣어서 각 숫자에 해당하는 값을 리턴하도록 설정했다.
                    const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
                    let week1 = WEEKDAY[Sdate.getDay()];
                    let week2 = WEEKDAY[Edate.getDay()];
                    // getDay가 숫자로 리턴하기 때문에 배열로 치환해준다.
                    // console.log(week);
                    let time1 =
                      Sdate.getHours() +
                      "시" +
                      Sdate.getMinutes() +
                      "분" +
                      Sdate.getSeconds() +
                      "초";
                    let time2 =
                      Edate.getHours() +
                      "시" +
                      Edate.getMinutes() +
                      "분" +
                      Edate.getSeconds() +
                      "초";

                    // console.log(time1);
                    // 합쳐서 오늘 날짜를 년. 월. 일.(요일) 로 표시하는 함수
                    let indate = C_INdate + "(" + week1 + ") " + time1;
                    let outdate = C_OUTdate + "(" + week2 + ") " + time2;

                    let pri = a.total_price;
                    let price = Math.floor(pri);
                    console.log(price);
                    return (
                      <tr key={a.user_id}>
                        <td className="User_Name">{a.user_id}</td>
                        <td className="Facility">{a.room_id}</td>
                        <td className="C_IN">{indate}</td>
                        <td className="C_OUT">{outdate}</td>
                        <td className="Price">{price}원</td>
                        <td className="Status">{a.status}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            )}
            {managermenu === "시설정보" && (
              <div className="Table_Div">
                {" "}
                <h3>시설정보</h3>
                <table className="User_Table">
                  <tr className="Table_Title">
                    <td className="fac_no">등록번호</td>
                    <td className="fac_name">시설이름</td>
                    <td className="fac_type">유형</td>
                  </tr>
                  {currentItems.map((a) => {
                    return (
                      <tr>
                        <td>{a.lodging_id}</td>
                        <td>
                          <span
                            onClick={() => {
                              getRooms(a.lodging_id);
                              // filtering(a.lodging_id);
                              // setEqualRoom(a.lodging_id);
                              // console.log("roomInfo: ", roomInfo);
                              setSelectedLodging(a);
                              open_modal(a.lodging_id);
                            }}
                          >
                            {a.name}
                          </span>
                        </td>
                        <td>
                          {a.type == 0
                            ? "모텔"
                            : a.type === 1
                            ? "호텔/리조트"
                            : a.type === 2
                            ? "펜션"
                            : a.type === 3
                            ? "게스트하우스"
                            : a.type === 4
                            ? "캠핑장"
                            : ""}
                        </td>
                      </tr>
                    );
                  })}
                </table>
                {isModalOpen && (
                  <EditModal
                    setIsModalOpen={setIsModalOpen}
                    close_modal={close_modal}
                    roomInfo={roomInfo}
                    selectedLodging={selectedLodging}
                    modalClassChange={modalClassChange}
                  />
                )}
                {/* <Modal
              isOpen={isModalOpen}
              bodyOpenClassName="modal-open"
              onRequestClose={() => {
                setIsModalOpen(false);
                setZindex(1);
              }}
            >
              <div>   
                <h3>{}</h3>
                <form>
                  <table>
                    <tr>
                      <td>이름</td>
                      <td>
                        <input type="text" placeholder="" />  
                      </td>
                    </tr>
                    <tr>
                      <td>주소</td>
                      <td>
                        <input type="text" placeholder="" />  
                      </td>
                    </tr>
                    <tr>
                      <td>한마디</td>
                      <td>
                        <input type="text" placeholder="" />  
                      </td>
                    </tr>
                    <tr>
                      <td>이미지</td>
                      <td>
                        <input type="file" />  
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>방 정보</td>
                    </tr>
                    {
                      roomInfo.map((b) => {
                        return(
                          <tr>
                            <td>{b.type}</td>
                            <td>1박 당 가격 
                              <input type="text" placeholder={b.price} />
                            </td>
                            
                          </tr>
                        );
                      })
                    }
                  </table>
                </form>
              </div>
              <div className="modal_btn_section">
                <button className="modal_close" onClick={close_modal}>Close</button>
                <button className="modal_save" onClick={save_modal}> Save </button>
              </div>
            </Modal> */}
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={loging.length}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  totalPages={totalPages}
                  pageNumbers={pageNumbers}
                />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
  pageNumbers,
}) {
  return (
    <div className="pagination">
      {" "}
      {/* 현재 페이지의 위치를 알려주는 컴포넌트 */}
      {currentPage > 1 && (
        <span onClick={() => onPageChange(currentPage - 1)}>&laquo;</span>
      )}
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </span>
      ))}
      {currentPage < totalPages && (
        <span onClick={() => onPageChange(currentPage + 1)}>&raquo;</span>
      )}
    </div>
  );
}
export default AdminPage;
