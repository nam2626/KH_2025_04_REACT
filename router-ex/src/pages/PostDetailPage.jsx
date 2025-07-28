//PostDetailPage.jsx

import { useParams } from 'react-router-dom';

export default () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h2>Post Detail Page</h2>
      <p>게시글 번호 : {}</p>
    </div>
  );
};
