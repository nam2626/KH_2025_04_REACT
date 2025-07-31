export default ({ todoList }) => {
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
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
