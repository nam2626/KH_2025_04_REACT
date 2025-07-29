import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default (props) => {
  const { id, userName, nickName } = props.member;
  const { reloadData } = props;

  const navigate = useNavigate();
  //   console.log(props);
  const btnDelete = async () => {
    if (window.confirm(`정말로 ${id} 데이터를 삭제하시겠습니까?`)) {
      const response = await axios.delete(`http://localhost:9999/member/${id}`);
      console.log(response.data);
      alert(response.data.msg);
      //result가 1이면 데이터가 새로고침
      if (response.data.result === 1) reloadData();
    } else {
      alert('데이터 삭제를 취소하셨습니다.');
    }
  };
  const btnUpdate = () => {
    navigate(`/update/${id}`);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{userName}</td>
      <td>{nickName}</td>
      <td>
        <button onClick={btnUpdate}>수정</button> / <button onClick={btnDelete}>삭제</button>
      </td>
    </tr>
  );
};
