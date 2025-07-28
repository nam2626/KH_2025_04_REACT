import { Link, Outlet } from 'react-router-dom';

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="team">팀 소개</Link>
        </li>
        <li>
          <Link to="company">회사 소개</Link>
        </li>
      </ul>
      <h1>소개 페이지</h1>
      <p>이 프로젝트에 대한 간단한 설명을 보여줍니다.</p>
      {/* 중첩 라우트로  매칭된 하위 컴포넌트가 렌더링될 위치*/}
      <Outlet />
    </div>
  );
};
