import { useState } from 'react';
import axios from 'axios';
export default () => {
  //버튼 클릭했을 때 fetch 이용해서 날씨 정보 가져오기
  //weather-info div에 날씨 정보 출력하기
  const [city, setCity] = useState('Seoul');
  const [weather, setWeather] = useState('');

  const callWeather = async () => {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;
    console.log(url);
    try {
      const response = await axios.get(url);
      console.log(response);
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
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
