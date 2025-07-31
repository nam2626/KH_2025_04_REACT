import { createSlice } from '@reduxjs/toolkit';
const list = [
  { id: 1, text: '1번째 할일', done: false },
  { id: 2, text: '2번째 할일', done: false },
  { id: 3, text: '3번째 할일', done: false },
  { id: 4, text: '4번째 할일', done: false },
  { id: 5, text: '5번째 할일', done: false },
];
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: list,
    count: list.length,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, { id: ++state.count, text: action.payload, done: false }];
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      console.log(action);
      console.log(state);

      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
