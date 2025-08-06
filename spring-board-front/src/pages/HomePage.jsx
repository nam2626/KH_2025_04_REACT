import { use, useEffect, useState } from 'react';
import { getBoardData } from '../service/authApi';

export default () => {
  /* 
    홈 컴포넌트 로드시 한번만 게시글 데이터를 조회
  */
  const [error, setError] = useState('');
  const [boardList, setBoardList] = useState([]);
  const [pagging, setPagging] = useState({});

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const data = await getBoardData();
        setBoardList(data.boardList);
        setPagging(data.pagging);
        console.log(data);
      } catch (error) {
        setError('게시글 데이터를 불러오는데 실패하였습니다.');
        console.log(error);
      }
    };
    fetchBoardData();
  }, []);
  return (
    <div>
      <h2>홈</h2>
      {/* 게시글 목록 출력 */}

      {/* 페이징 정보 출력 */}
    </div>
  );
};
