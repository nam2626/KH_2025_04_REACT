import { useRef } from 'react';

export default () => {
  const txt = useRef(null);
  return (
    <div className="input-group">
      <input type="text" ref={txt} placeholder="할일을 입력하세요" className="form-control" />
      <button className="btn btn-dark">Submit</button>
    </div>
  );
};
