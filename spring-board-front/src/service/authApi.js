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

//게시글 목록 조회
export const getBoardData = async (pageNo = 1, pageContentEa = 30) => {
  const response = await authApi.get('/board/list', {
    params: {
      pageNo,
      pageContentEa,
    },
  });
  return response.data;
};

//게시글 조회
export const getBoardDetail = async (bno) => {
  const response = await authApi.get(`/board/detail/${bno}`);
  return response.data;
};

//게시글 좋아요
export const boardLike = async (bno) => {
  const response = await authApi.get(`/board/like/${bno}`);
  return response.data;
};
//게시글 싫어요
export const boardHate = async (bno) => {
  const response = await authApi.get(`/board/hate/${bno}`);
  return response.data;
};

//댓글 좋아요
export const boardCommentLike = async (bno) => {
  const response = await authApi.get(`/board/comment/like/${bno}`);
  return response.data;
};
//댓글 싫어요
export const boardCommentHate = async (bno) => {
  const response = await authApi.get(`/board/comment/hate/${bno}`);
  return response.data;
};
//게시글 삭제
export const boardDelete = async (bno) => {
  const response = await authApi.delete(`/board/${bno}`);
  return response.data;
};
//댓글 삭제
export const boardCommentDelete = async (cno) => {
  const response = await authApi.delete(`/board/comment/${cno}`);
  return response.data;
};
//댓글 수정
export const boardCommentUpdate = async (cno, content) => {
  const response = await authApi.patch('/board/comment', {
    cno,
    content,
  });
  return response.data;
};
//게시판 글쓰기
export const boardWrite = async (formData) => {
  const response = await authApi.post('/board/write', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
//댓글 글쓰기
export const commentWrite = async (bno, content) => {
  const response = await authApi.post('/board/comment', { bno, content });
  return response.data;
};
//댓글 더 불러오기
export const boardMoreComment = async (bno, start) => {
  const response = await authApi.get(`/board/comment/list/${bno}`, {
    params: { start },
  });
  return response.data;
};
