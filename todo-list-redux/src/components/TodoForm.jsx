import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice';
export default () => {
  const dispatch = useDispatch();
  const txt = useRef(null);
  const handleSubmit = () => {
    dispatch(addTodo(txt.current.value));
    txt.current.value = '';
  };
  return (
    <div className="input-group">
      <input type="text" ref={txt} placeholder="할일을 입력하세요" className="form-control" />
      <button className="btn btn-dark" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
