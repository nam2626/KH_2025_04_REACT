//src/service/authApi.js
import axios from 'axios';
import { clearToken, getAccessToken, setAccessToken, setUserData } from '../utils/authUtil';

//백엔드 서버 주소
const API_BASE_URL = 'http://localhost:9999/api';

const authApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, //Refresh Token 쿠키 전송을 위해 필수
});

//요청 인터셉터 : 모든 요청에 Access Token 추가
authApi.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
//응답 인터셉터 : Access Token 만료 처리(401 Unauthorized)
authApi.interceptors.response.use(
  (response) => {
    console.log('응답 : ', response);
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);
//회원 가입 호출 함수
export const signup = async (userid, username, password) => {
  console.log(userid, username, password);
  const response = await authApi.post('/auth/signup', {
    userid,
    username,
    password,
  });
  return response.data;
};

//로그인 호출 함수
export const login = async (userid, password) => {
  const response = await authApi.post('/auth/login', { userid, password });
  setAccessToken(response.data.accessToken);
  return response.data;
};

//사용자 데이터 가져오는 함수
export const getUserData = async () => {
  const response = await authApi.get('/auth/user-data');
  setUserData(JSON.stringify(response.data));
  return response.data;
};

//로그아웃 함수
export const apiLogout = async () => {
  const response = await authApi.post('/auth/logout');
  clearToken();
};
