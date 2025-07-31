import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';
export default () => {
  const todo = useSelector((state) => state.todo);
  return (
    <div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Complate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.todoList.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
