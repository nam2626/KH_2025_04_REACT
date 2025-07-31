export default ({ todo }) => {
  return (
    <tr>
      <td style={{ width: '10%' }}>{todo.id}</td>
      <td>{todo.text}</td>
      <td style={{ width: '10%' }}>
        <button className="btn btn-primary">Complete</button>
      </td>
      <td style={{ width: '10%' }}>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};
