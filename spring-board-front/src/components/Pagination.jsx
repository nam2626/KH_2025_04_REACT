export default ({ pagging, onPageChange }) => {
  //데이터가 없으면 아무것도 렌더링 하지 않음
  if (!pagging || Object.keys(pagging).length == 0) return null;

  const { currentPage, currentPageGroupNo, endPageOfPageGroup, nextPageGroup, pageOfContentCount, priviousPageGroup, startPageOfPageGroup, totalPage, totalPageGroup } = pagging;

  //표시할 페이지 번호 배열 생성
  const pageNumbers = [];
  for (i = startPageOfPageGroup; i <= endPageOfPageGroup; i++) pageNumbers.push(i);

  return (
    <>
      {/* 이전 페이지 그룹 ◀ */}

      {/* 페이지 번호 */}

      {/* 다음 페이지 그룹 ▶ */}
    </>
  );
};
