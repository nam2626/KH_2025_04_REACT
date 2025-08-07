import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBoardDetail, getUserData } from '../service/authApi';
import { isAuthenticated } from '../utils/authUtil';

export default () => {
  const { bno } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});
  const [fileList, setFileList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  //게시글 API 호출하는 코드 작성
  useEffect(() => {
    const fetchBoardData = async () => {
      //api 호출 코드 작성 - get
      //  /board/detail/글번호
      const data = await getBoardDetail(bno);
      setBoard(data.board);
      setFileList(data.fileList);
      setCommentList(data.commentList);

      // 로그인 상태일때만 사용자 정보를 읽어오기
      if (isAuthenticated()) {
        const user = await getUserData(); //서버에 다시 요청
        setCurrentUser(user);
        console.log(user);
      }

      console.log(data);
    };

    fetchBoardData();
  }, [bno]); //bno 변경시 실행
  if (!board) return <div>게시글 정보가 없습니다.</div>;
  return (
    <div>
      {/* 게시글 출력 */}
      <div>
        <h2>{board.title}</h2>
        <div>
          <span>작성자 : {board.username}</span>
          <span>조회수 : {board.bcount}</span>
          <span>작성일 : {board.writeDate}</span>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: board.content }}></div>
        <div>
          <button>👍좋아요 {board.blike}</button>
          <button>👎싫어요 {board.bhate}</button>
        </div>
        <div>
          {/* 로그인한 사용자와 게시글 작성자와 같은지 확인 후 삭제 버튼, 수정버튼을 출력 */}
          {currentUser && currentUser.id === board.id && (
            <>
              <button>삭제</button>
              <button onClick={() => navigate(`/edit/${bno}`)}>수정</button>
            </>
          )}
        </div>
      </div>
      {/* 첨부 파일 목록 출력 */}
      <div>
        {fileList.map((item) => (
          <div key={item.fno}>
            <a href={`http://localhost:9999/api/board/download/${item.fno}`}>{item.fpath}</a>
          </div>
        ))}
      </div>
      {/* 댓글 출력 */}
      <div>
        {commentList.map((item) => (
          <div>
            <div>
              <strong>{item.username}</strong>
              <span>{item.cdate}</span>
            </div>
            <p>{item.content}</p>
            <div>
              <button>👍{item.clike}</button>
              <button>👎{item.chate}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
