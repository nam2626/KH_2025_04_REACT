import '../css/Pagination.css';
export default ({ pagging, onPageChange }) => {
  //데이터가 없으면 아무것도 렌더링 하지 않음
  if (!pagging || Object.keys(pagging).length == 0) return null;

  const { currentPage, currentPageGroupNo, endPageOfPageGroup, nextPageGroup, pageOfContentCount, priviousPageGroup, startPageOfPageGroup, totalPage, totalPageGroup } = pagging;

  //표시할 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = startPageOfPageGroup; i <= endPageOfPageGroup; i++) pageNumbers.push(i);

  return (
    <ul className="pagination-container">
      {/* 이전 페이지 그룹 ◀ */}
      <li>
        <button onClick={() => onPageChange(startPageOfPageGroup - 1)} disabled={!priviousPageGroup}>
          ◀
        </button>
      </li>
      {/* 페이지 번호 */}
      {pageNumbers.map((num) => (
        <li key={num}>
          <button onClick={() => onPageChange(num)} disabled={num === currentPage}>
            {num}
          </button>
        </li>
      ))}
      {/* 다음 페이지 그룹 ▶ */}
      <li>
        <button onClick={() => onPageChange(endPageOfPageGroup + 1)} disabled={!nextPageGroup + 1}>
          ▶
        </button>
      </li>
    </ul>
  );
};
