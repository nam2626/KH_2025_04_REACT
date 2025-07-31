export default ({ todo, deleteTodo, updateTodo }) => {
  return (
    <tr>
      <td style={{ width: '10%' }}>{todo.id}</td>
      <td style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</td>
      <td style={{ width: '10%' }}>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>
          Complete
        </button>
      </td>
      <td style={{ width: '10%' }}>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
