import { use, useCallback, useEffect, useState } from 'react';
import { getBoardData } from '../service/authApi';
import Pagination from '../components/Pagination';

import '../css/HomePage.css';

export default () => {
  /* 
    홈 컴포넌트 로드시 한번만 게시글 데이터를 조회
  */
  const [error, setError] = useState('');
  const [boardList, setBoardList] = useState([]);
  const [pagging, setPagging] = useState({});
  const fetchBoardData = useCallback(async (pageNo = 1, pageContentEa = 30) => {
    try {
      const data = await getBoardData(pageNo, pageContentEa);
      setBoardList(data.boardList);
      setPagging(data.pagging);
      console.log(data);
    } catch (error) {
      setError('게시글 데이터를 불러오는데 실패하였습니다.');
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchBoardData();
  }, []);
  return (
    <div className="board-container">
      <h2>게시판</h2>
      {/* 게시글 목록 출력 */}
      <table>
        <thead>
          <tr>
            <td>글번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
            <td>좋아요</td>
            <td>싫어요</td>
          </tr>
        </thead>
        <tbody>
          {!boardList && (
            <tr>
              <td colSpan={7}>데이터 로딩 중입니다.</td>
            </tr>
          )}
          {boardList &&
            boardList.map((item) => (
              <tr key={item.bno}>
                <td>{item.bno}</td>
                <td>{item.title}</td>
                <td>{item.username}</td>
                <td>{item.writeDate}</td>
                <td>{item.bcount}</td>
                <td>{item.blike}</td>
                <td>{item.bhate}</td>
              </tr>
            ))}
        </tbody>
        {/* 페이징 정보 출력 */}
        <tfoot>
          <tr>
            <td colSpan={7}>
              <Pagination pagging={pagging} onPageChange={fetchBoardData} />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
