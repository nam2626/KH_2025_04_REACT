import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { boardCommentDelete, boardCommentHate, boardCommentLike, boardCommentUpdate, boardDelete, boardHate, boardLike, commentWrite, getBoardDetail, getUserData } from '../service/authApi';
import { isAuthenticated } from '../utils/authUtil';

import '../css/BoardView.css';

export default () => {
  const { bno } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState({});
  const [fileList, setFileList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const newCommentRef = useRef(null);

  // 댓글 수정을 위한 수정모드 상태값
  const [editingCommentCno, setEditingCommentCno] = useState(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');

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
  /* 댓글 삭제 */
  const handleCommentDelete = async (cno) => {
    if (!isAuthenticated()) {
      alert('로그인하셔야 이용하실 수 있습니다.');
      return;
    }
    if (!window.confirm('정말로 해당 댓글을 삭제하시겠습니까?')) return;
    try {
      const response = await boardCommentDelete(cno);
      alert(response.msg);
      setCommentList(commentList.filter((item) => cno !== item.cno));
    } catch (error) {
      console.log(error);
      alert('댓글 삭제 실패');
    }
  };
  // 댓글 수정하는 함수 작성.
  const handleBoardCommentUpdate = async (cno) => {
    //댓글 내용이 입력이 되었는지 체크.
    if (editingCommentContent.trim() === 0) {
      alert('수정할 내용을 입력해 주세요');
      return;
    }
    if (!isAuthenticated()) return alert('로그인 하셔야 이용하실 수 있습니다.');
    try {
      //서버로 해당 내용 전송
      const data = await boardCommentUpdate(cno, editingCommentContent);
      //서버가 준 내용으로 교체 - 입력했던 내용으로 최신화
      alert(data.msg);
      setCommentList(
        commentList.map((item) => {
          if (item.cno === cno) {
            return data.comment;
          }
          return item;
        }),
      );
    } catch (error) {
      console.log(error);
    }

    //수정할 때 사용했던 상태값 초기화
    setEditingCommentCno(null);
    setEditingCommentContent('');
  };
  const handleCommentWrite = async () => {
    const content = newCommentRef.current.value;
    if (!content.trim()) return alert('댓글 내용을 입력해 주세요');
    try {
      const res = await commentWrite(bno, content);
      //새 댓글 목록으로 교체
      setCommentList(res.commentList);
      newCommentRef.current.value = '';
    } catch (error) {
      console.log(error);
      alert('댓글 작성 실패');
    }
  };
  if (!board) return <div>게시글 정보가 없습니다.</div>;
  return (
    <div className="container">
      {/* 게시글 출력 */}
      <div className="boardHeader">
        <h2 className="boardTitle">{board.title}</h2>
        <div className="boardMeta">
          <span>작성자 : {board.username}</span>
          <span>조회수 : {board.bcount}</span>
          <span>작성일 : {board.writeDate}</span>
        </div>
        <hr />
        <div className="boardContent" dangerouslySetInnerHTML={{ __html: board.content }}></div>
        <div className="boardActions">
          <button className="likeButton" onClick={() => handleBoardLikeHate(boardLike, bno)}>
            👍좋아요 {board.blike}
          </button>
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
      <div className="fileList">
        {fileList.map((item) => (
          <div key={item.fno}>
            <a href={`http://localhost:9999/api/board/download/${item.fno}`}>{item.fileName}</a>
          </div>
        ))}
      </div>
      {/* 로그인한 사용자만 댓글 작성하는 폼 */}
      {isAuthenticated() ? (
        <div className="commentForm">
          <h3>댓글 작성</h3>
          <textarea ref={newCommentRef} placeholder="댓글을 입력하세요...."></textarea>
          <button onClick={handleCommentWrite}>댓글 작성</button>
        </div>
      ) : (
        <p>로그인 후 댓글을 작성할 수 있습니다.</p>
      )}
      {/* 댓글 출력 */}
      <div className="commentList">
        {commentList.map((item) =>
          item.cno === editingCommentCno ? (
            <div className="editingCommentForm">
              <textarea value={editingCommentContent} onChange={(e) => setEditingCommentContent(e.target.value)}></textarea>
              <button className="commentEditButton" onClick={() => handleBoardCommentUpdate(item.cno)}>
                수정하기
              </button>
              <button className="commentCancelButton" onClick={() => setEditingCommentCno(null)}>
                취소
              </button>
            </div>
          ) : (
            <div className="commentItem">
              <div>
                <strong>{item.username}</strong>
                <span>{item.cdate}</span>
              </div>
              <p className="commentContent" dangerouslySetInnerHTML={{ __html: item.content.replaceAll('\n', '<br>') }}></p>
              <div className="commentActions">
                <button onClick={() => handleBoardCommentLikeHate(boardCommentLike, item.cno)}>👍{item.clike}</button>
                <button onClick={() => handleBoardCommentLikeHate(boardCommentHate, item.cno)}>👎{item.chate}</button>
                {/* 댓글 작성자에게만 수정 삭제 버튼 출력  */}
                {currentUser && currentUser.id === item.id && (
                  <>
                    <button onClick={() => handleCommentDelete(item.cno)}>삭제</button>
                    <button
                      onClick={() => {
                        setEditingCommentCno(item.cno);
                        setEditingCommentContent(item.content);
                      }}
                    >
                      수정
                    </button>
                  </>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
