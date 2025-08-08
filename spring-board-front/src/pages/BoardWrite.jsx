import { useEffect, useRef, useState } from 'react';
import '../css/BoardWrite.css';
import { isAuthenticated } from '../utils/authUtil';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
export default () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    if (!isAuthenticated()) {
      alert('로그인 하셔야 글쓰기 작업을 하실 수 있습니다.');
      navigate('/login');
    }
  }, []);
  const fileDropHandler = (e) => {
    e.preventDefault();
    //drop한 파일 목록 배열
    console.log(e.dataTransfer.files);
    setIsDragging(false);
    setFileList([...fileList, ...e.dataTransfer.files]);
    console.log(fileList);
  };
  const dropClassName = `file_drop_area ${isDragging ? 'drag_over' : ''}`;
  //게시글 전송하는 함수
  const handleBoardWrite = async () => {
    //제목, 내용
    const title = document.getElementById('title').value;
    const content = editor.current.getInstance().getMarkdown();
    //제목 내용을 JSON으로 변환하고, 파일 목록까지 폼 데이터로 전환
    const formData = new FormData();
    formData.append('params', JSON.stringify({ title, content }));
    fileList.forEach((item) => {
      formData.append('file', item);
    });
    formData.forEach((val, key) => {
      console.log(key, val);
    });
  };

  return (
    <div className="board_write_container">
      <h2>게시글 작성</h2>
      <div className="form-group">
        <label htmlFor="title">제목</label>
        <input type="text" id="title" placeholder="제목을 입력하세요" />
      </div>
      <div className="form-group">
        <label htmlFor="content">내용</label>
        <Editor ref={editor} initialValue=" " previewStyle="vertical" height="600px" initialEditType="wysiwyg" useCommandShortcut={true} />
      </div>
      <div className="form-actions">
        <button className="btn_write" onClick={handleBoardWrite}>
          글쓰기
        </button>
        <button className="btn_cancel" onClick={() => navigate(-1)}>
          취소
        </button>
      </div>
      <h3>파일 첨부</h3>
      <div
        className={dropClassName}
        onDrop={fileDropHandler}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
          console.log('onDragOver');
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          console.log('onDragEnter');
        }}
        onDragLeave={(e) => {
          setIsDragging(false);
          console.log('onDragLeave');
        }}
      ></div>
    </div>
  );
};
