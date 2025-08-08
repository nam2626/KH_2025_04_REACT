import { useEffect } from 'react';
import '../css/BoardWrite.css';
import { isAuthenticated } from '../utils/authUtil';
import { useNavigate } from 'react-router-dom';
export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      alert('로그인 하셔야 글쓰기 작업을 하실 수 있습니다.');
      navigate('/login');
    }
  }, []);
  return (
    <div className="board_write_container">
      <h2>게시글 작성</h2>
      <div className="form-group">
        <label htmlFor="title">제목</label>
        <input type="text" id="title" placeholder="제목을 입력하세요" />
      </div>
      <div className="form-group">
        <label htmlFor="content">내용</label>
      </div>
      <div className="form-actions">
        <button className="btn_write">글쓰기</button>
        <button className="btn_cancel" onClick={() => navigate(-1)}>
          취소
        </button>
      </div>
      <h3>파일 첨부</h3>
      <div className="file_drop_area"></div>
    </div>
  );
};
