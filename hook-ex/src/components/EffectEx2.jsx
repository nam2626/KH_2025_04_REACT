import { useEffect, useState } from 'react';

//Openweathermap API 호출해서 결과를 출력
export default () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const changeCity = () => {
    let txt = document.querySelector('#txt').value;
    if (txt === '') txt = 'Seoul';
    setCity(txt);
  };
  useEffect(() => {
    //openweather api 호출해서
    //weather에 저장
    //호출결과를 콘솔로 출력
  }, [city]);
  return (
    /* 
        도시명 입력하면 API 호출
        1. 도시명 입력 받는 input
        2. 버튼을 누르면 도시명 저장하는 상태값에 저장
        3. 날씨 정보 출력할 영역 지정
    */
    <div>
      <input type="text" id="txt" placeholder="도시명 입력" />
      <button onClick={changeCity}>날씨조회</button>
      <p></p>
    </div>
  );
};
