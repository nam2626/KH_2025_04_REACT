import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default () => {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
};
