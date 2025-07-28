export default (props) => {
  const { id, userName, nickName } = props.member;
  //   console.log(props);
  return (
    <tr>
      <td>{id}</td>
      <td>{userName}</td>
      <td>{nickName}</td>
      <td>수정 / 삭제</td>
    </tr>
  );
};
