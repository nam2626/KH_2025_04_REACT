import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const list = [
  { id: 1, text: '1번째 할일', done: false },
  { id: 2, text: '2번째 할일', done: false },
  { id: 2, text: '3번째 할일', done: false },
  { id: 3, text: '4번째 할일', done: false },
  { id: 4, text: '5번째 할일', done: false },
];

export default () => {
  const [todoList, setTodoList] = useState(list);
  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
};
