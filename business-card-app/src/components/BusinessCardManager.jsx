import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from '../store/businessCardsSlice';
export default () => {
  //redux store에서 명함 데이터 읽어옴
  const cards = useSelector((state) => state.businessCards.cards);
  const dispath = useDispatch();
  const [newData, setNewData] = useState({
    name: '',
    position: '',
    company: '',
    address: '',
    phone: '',
    email: '',
  });

  //   Object.keys(newData).map((key, idx, arr) => {
  //     console.log(key, idx, arr);
  //   });
  //   console.log(newData);
  const addData = () => {
    //모든 항목 입력이 되었는지 체크
    const isFieldEmpty = Object.values(newData).some((value) => value.trim() === '');
    if (isFieldEmpty) {
      alert('모든 항목을 입력하세요');
      return;
    }
    //데이터 추가
    dispath(addCard(newData));
    //입력한 항목 초기화
    setNewData({
      name: '',
      position: '',
      company: '',
      address: '',
      phone: '',
      email: '',
    });
  };

  return (
    <div>
      <h1>명함 관리 앱</h1>
      <div>
        {/* 명함 추가 폼 */}
        <h2>명함 추가 폼</h2>
        <div>
          {Object.keys(newData).map((key) => {
            return (
              <input
                key={key}
                type={key === 'email' ? 'email' : 'text'}
                id={key}
                placeholder={
                  key === 'name' ? '이름' : key === 'position' ? '직급' : key === 'company' ? '회사명' : key === 'address' ? '회사 주소' : key === 'phone' ? '연락처' : key === 'email' ? '이메일' : ''
                }
                value={newData[key]}
                onChange={(e) => {
                  const { id, value } = e.target;
                  setNewData({ ...newData, [id]: value });
                }}
              />
            );
          })}
          <button onClick={addData}>추가</button>
        </div>
      </div>
      <div>
        <h2>명함 목록({cards.length}개)</h2>
        {cards.map((card) => (
          <div key={card.id}>
            <h3>
              {card.name}
              <span>({card.position})</span>
            </h3>
            <p>
              <b>회사 : </b> {card.company}
            </p>
            <p>
              <b>주소 : </b> {card.address}
            </p>
            <p>
              <b>연락처 : </b> {card.phone}
            </p>
            <p>
              <b>이메일 : </b> {card.email}
            </p>
            <p>
              <button>수정</button>
              <button>삭제</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
