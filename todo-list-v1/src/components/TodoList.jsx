import TodoListItem from './TodoListItem';

export default ({ todoList, deleteTodo }) => {
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
          {todoList.map((todo) => {
            return <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
