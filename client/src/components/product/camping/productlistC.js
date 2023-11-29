import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from "../../config/contansts";
import { Link } from 'react-router-dom';

function ProductListC() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productbasedata, setProductbasedata] = useState([]);



  useEffect(() => {
    const getList = async () => {
      await axios
        .get(`${API_URL}/lodging`,{ params: { type: 4 }})
        .then((result) => {
          const items = result.data;
          console.log("items", items);
          setProductbasedata(items);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getList();
  }, []);

  console.log("new", productbasedata);

  const itemsPerPage = 4; // 한 페이지당 표시할 공지사항 수

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productbasedata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(productbasedata.length / itemsPerPage);
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
    <div className="section-2">
      <div className="">
        <div className="product-list">
          <div className="productPageListTitle">
            <div>추천 캠핑</div>
          </div>
          <div className="product-list-gridBox">
            {currentItems.map((a) => {
              return (
                <div className="productBgImg">
                  <Link to={`/detail/${a.lodging_id}`}>
                    <img src={a.imageURL}></img>
                    <div className="productpagecontect">
                      <div className="productpagepdtitle">{a.name}</div>
                      <div className="productpagepdevaluation">
                        {a.rating} 만족해요 ({a.review_count})
                      </div>
                      <div className="productpagepdlocation">{a.location}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={productbasedata.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
          />{" "}
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

export default ProductListC;
