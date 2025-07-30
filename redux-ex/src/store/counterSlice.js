import { createSlice } from '@reduxjs/toolkit';
/*
    컴포넌트에 관련된 상태값 업데이트하는 리듀서들을 묶어 주는 유틸리티 함수
    개별적인 리듀서를 정의하고 사용하는 패턴을 단순화하는 방법으로 설계되었음.

    name : 슬라이스 이름을 지정하여, 액션 타입을 만듬
    initialState : 초기 상태 값 설정
    reducers : 리듀서 함수들을 작성, 함수 이름은 액션 타입으로 자동 맵핑됨
*/
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
