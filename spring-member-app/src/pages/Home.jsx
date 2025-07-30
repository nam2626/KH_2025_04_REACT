import { useEffect, useRef, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import MemberItem from '../components/MemberItem';
export default () => {
  const [memberList, setMemberList] = useState([]);
  const kindRef = useRef(null);
  const searchRef = useRef(null);

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
  const reloadData = () => {
    axios
      .get('http://localhost:9999/member/list')
      .then((res) => {
        console.log(res.data);
        setMemberList(res.data.memberList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchMember = () => {};
  return (
    <div className="home-container">
      <h2>회원 리스트</h2>
      <table>
        <thead>
          <tr>
            <td colSpan={4}>
              <select ref={kindRef}>
                <option value={'id'}>아이디</option>
                <option value={'userName'}>이름</option>
                <option value={'nickName'}>닉네임</option>
              </select>
              <input type="text" ref={searchRef} placeholder="검색어 입력하세요" />
              <button onClick={searchMember}>검색</button>
              <button onClick={reloadData}>초기화</button>
            </td>
          </tr>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>{memberList && memberList.map((item) => <MemberItem key={item.id} member={item} reloadData={reloadData} />)}</tbody>
      </table>
    </div>
  );
};
