import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtil';

export default () => {
  if (isAuthenticated()) {
    //로그인 했을때만 중첩된 라우트 출력
    return <Outlet />;
  }
  //로그인 안했으면 로그인 페이지로 이동
  alert('로그인 하셔야 이용하실 수 있습니다.');
  return <Navigate to="/login" replace />;
};
