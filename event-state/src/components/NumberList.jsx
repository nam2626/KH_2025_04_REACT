import { useState } from 'react';

export default () => {
  const [numbers, setNumbers] = useState([]);
  const addNumber = () => {
    const num = document.querySelector('#num').value;

    //입력을 했는지?
    if (num.trim() === '') {
      alert('숫자를 입력해 주세요');
      return;
    }
    //입력한 것이 숫자가 맞는지?
    if (isNaN(num)) {
      alert('유효하지 않은 숫자입니다.');
      return;
    }
    setNumbers([...numbers, parseInt(num)]);
    //입력된 값 제거
    document.querySelector('#num').value = '';
  };

  return (
    <div>
      <p>
        <input type="text" id="num" placeholder="Enter a number" />
      </p>
      <p>Current Numbers: {numbers.join(',')} </p>
      <p>
        <button onClick={addNumber}>Add Number</button>
      </p>
      <p>
        numbers average :{' '}
        {numbers.length > 0
          ? (numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length).toFixed(2)
          : 0}
      </p>
    </div>
  );
};
