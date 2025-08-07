import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { boardCommentHate, boardCommentLike, boardDelete, boardHate, boardLike, getBoardDetail, getUserData } from '../service/authApi';
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

  const handleBoardLikeHate = async (action, bno) => {
    if (!isAuthenticated()) {
      alert('로그인 하셔야 이용하실 수 있습니다.');
      return;
    }

    try {
      const response = await action(bno);
      alert(response.msg);
      setBoard({ ...board, blike: response.count.BLIKE, bhate: response.count.BHATE });
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 좋아요 싫어요 처리
  const handleBoardCommentLikeHate = async (action, cno) => {
    if (!isAuthenticated()) {
      alert('로그인 하셔야 이용하실 수 있습니다.');
      return;
    }

    try {
      const response = await action(cno);
      alert(response.msg);
      //결과값 가지고 변경
      setCommentList(
        commentList.map((comment) => {
          if (cno === comment.cno) {
            return { ...comment, clike: response.count.CLIKE, chate: response.count.CHATE };
          }
          return comment;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleBoardDelete = async (bno) => {
    try {
      const data = await boardDelete(bno);
      alert(data.msg);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
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
          <button onClick={() => handleBoardLikeHate(boardLike, bno)}>👍좋아요 {board.blike}</button>
          <button onClick={() => handleBoardLikeHate(boardHate, bno)}>👎싫어요 {board.bhate}</button>
        </div>
        <div>
          {/* 로그인한 사용자와 게시글 작성자와 같은지 확인 후 삭제 버튼, 수정버튼을 출력 */}
          {currentUser && currentUser.id === board.id && (
            <>
              <button onClick={() => handleBoardDelete(bno)}>삭제</button>
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
      {/* 로그인한 사용자만 댓글 작성하는 폼 */}
      {isAuthenticated() ? (
        <div>
          <h3>댓글 작성</h3>
          <textarea placeholder="댓글을 입력하세요...."></textarea>
          <button>댓글 작성</button>
        </div>
      ) : (
        <p>로그인 후 댓글을 작성할 수 있습니다.</p>
      )}
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
              <button onClick={() => handleBoardCommentLikeHate(boardCommentLike, item.cno)}>👍{item.clike}</button>
              <button onClick={() => handleBoardCommentLikeHate(boardCommentHate, item.cno)}>👎{item.chate}</button>
              {/* 댓글 작성자에게만 수정 삭제 버튼 출력  */}
              {currentUser && currentUser.id === item.id && (
                <>
                  <button>삭제</button>
                  <button>수정</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
