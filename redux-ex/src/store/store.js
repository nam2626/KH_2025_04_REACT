import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
//로컬 스토리지에 저장하는 방식
//redux-persist를 설치해서 사용

//로컬 스토리지 셋팅
const persistConfig = {
  key: 'root',
  storage,
};

//작성한 슬라이스를 persistReducer에 등록
const counterPersistReducer = persistReducer(persistConfig, counterReducer);

// 저장소에 작성한 slice 등록
export const store = configureStore({
  reducer: {
    counter: counterPersistReducer,
  },
});

export const persistor = persistStore(store);
