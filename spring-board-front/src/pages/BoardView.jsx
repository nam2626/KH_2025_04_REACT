import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBoardDetail } from '../service/authApi';

export default () => {
  const { bno } = useParams();
  const navigate = useNavigate();

  //게시글 API 호출하는 코드 작성
  useEffect(() => {
    const fetchBoardData = async () => {
      //api 호출 코드 작성 - get
      //  /board/detail/글번호
      const data = await getBoardDetail(bno);
      console.log(data);
    };

    fetchBoardData();
  }, [bno]); //bno 변경시 실행
};
