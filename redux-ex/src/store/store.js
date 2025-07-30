import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 저장소에 작성한 slice 등록
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
