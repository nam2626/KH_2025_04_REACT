import { useSelector } from 'react-redux';
export default () => {
  //redux store에서 명함 데이터 읽어옴
  const cards = useSelector((state) => state.businessCards.cards);

  return (
    <div>
      <h1>명함 관리 앱</h1>
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
