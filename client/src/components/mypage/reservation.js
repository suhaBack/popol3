import "./reservation.css";
import { useState } from "react";
import 결과없음 from "./../image/결과없음.png";
import 예약 from "./../image/예약.png";

function Reservation() {
  // booking데이터베이스 사용
  let [reservationdata, setReservationdata] = useState([
    {
      id: 1,
      title: "숙소이름1",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 2,
      title: "숙소이름2",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 3,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 4,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 5,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 6,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 7,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 8,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 9,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 10,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 11,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 12,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 13,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
    {
      id: 14,
      title: "숙소이름3",
      startDate: "시작날짜",
      endDate: "마감날짜",
    },
  ]);

  const itemsPerPage = 5; // 한 페이지당 표시할 공지사항 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reservationdata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(reservationdata.length / itemsPerPage);
  const maxVisiblePages = 5; // 보이는 페이지 숫자의 최대 개수
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
    <div id="jsw_maincontainer">
      <div className="reservationContentBox">
        <div className="usepageTitle">
          <img src={예약}></img>
          <span>
            예약 내역
            <span>({reservationdata.length})</span>
          </span>
        </div>
        {reservationdata == "" ? (
          <div className="reservationComentBox">
            <img src={결과없음}></img>
            <div className="reservationComent">예약 내역이 없습니다.</div>
            <div className="reservationSubComent">
              최저가로 예약
              <br />
              숙소들을 지금 만나세요!
            </div>
            <div className="reservationMoreBtnBox">
              <div>다양한 숙소 보러가기</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="historyListBox">
              {currentItems.map((a, i) => {
                return (
                  <div className="historyList" key={a.id}>
                    <div className="historyid">{a.id}</div>
                    <div className="historytitle">{a.title}</div>
                    <div className="historydate">
                      {a.startDate} ~ {a.endDate}
                    </div>
                    <div className="historycancel">
                      <div>예약 취소</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={reservationdata.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
            />{" "}
            {/* 다음 페이지로 이동시켜주는 컴포넌트 영역 */}
          </div>
        )}
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

export default Reservation;
