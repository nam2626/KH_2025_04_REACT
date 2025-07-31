import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cards: [
    {
      id: 1,
      name: '김철수',
      position: '대표이사',
      company: '행복 주식회사',
      address: '서울시 강남구 테헤란로 123',
      phone: '010-1234-5678',
      email: 'chulsoo.kim@happy.com',
    },
    {
      id: 2,
      name: '이영희',
      position: '팀장',
      company: '미래 테크',
      address: '경기도 성남시 분당구 판교역로 45',
      phone: '010-9876-5432',
      email: 'younghee.lee@futuretech.co.kr',
    },
    {
      id: 3,
      name: '박지민',
      position: '선임 연구원',
      company: '혁신 연구소',
      address: '대전광역시 유성구 과학로 78',
      phone: '010-5555-1111',
      email: 'jimin.park@innovlab.org',
    },
  ],
};
export const businessCardsSlice = createSlice({
  name: 'businessCards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      console.log(action.payload);
      // state.cards = [...state.cards, { ...action.payload, id: Date.now() }];
      state.cards.push({ ...action.payload, id: Date.now() });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action) => {
      const { id, updateData } = action.payload;
      //해당 아이디값 찾아서 수정할 값으로 변경
      // const item = state.cards.find((card) => card.id === id);
      // item.name = updateData.name;
      // item.company = updateData.company;
      // item.address = updateData.address;
      // item.phone = updateData.phone;
      // item.email = updateData.email;
      // item.position = updateData.position;

      // state.cards = [...state.cards.filter((card) => card.id !== id), { ...updateData }];
      const item = state.cards.find((card) => card.id === id);
      Object.assign(item, updateData);
    },
  },
});

export const { addCard, deleteCard, updateCard } = businessCardsSlice.actions;

export default businessCardsSlice.reducer;
