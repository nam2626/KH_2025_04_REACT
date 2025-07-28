import { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import MemberItem from '../components/MemberItem';
export default () => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9999/member/list')
      .then((res) => {
        console.log(res.data);
        setMemberList(res.data.memberList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home-container">
      <h2>회원 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>{memberList && memberList.map((item) => <MemberItem key={item.id} member={item} />)}</tbody>
      </table>
    </div>
  );
};
