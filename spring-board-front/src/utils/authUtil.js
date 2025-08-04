const ACCESS_TOKEN_KEY = 'accessToken';
const USER_DATA_KEY = 'userData';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
