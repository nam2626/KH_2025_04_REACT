import { useState } from 'react';

export default () => {
  //버튼 클릭했을 때 fetch 이용해서 날씨 정보 가져오기
  //weather-info div에 날씨 정보 출력하기
  const [city, setCity] = useState('Seoul');
  const [weather, setWeather] = useState('');

  const callWeather = async () => {
    const API_KEY = '23815d818a51ef76062d119292b5691e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  return (
    <div>
      <h1>OpenWeather Component</h1>
      <hr />
      <button onClick={callWeather}>날씨 정보 가져오기</button>
      <div className="weather-info">
        {weather && (
          <div>
            <h2>{weather.name} 날씨</h2>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp}℃</p>
          </div>
        )}
        {!weather && <p>날씨 정보를 불러오는 중입니다.....</p>}
      </div>
    </div>
  );
};
