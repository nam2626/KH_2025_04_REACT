import axios from 'axios';
import { useEffect, useState } from 'react';
export default () => {
  const [major, setMajor] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:9999/major/list')
      .then((response) => {
        setMajor(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching majors:', error);
      });
  }, []);

  return (
    <div>
      {!major && <div>로딩중...</div>}
      {major &&
        major.majorList.map((item, index) => (
          <div key={item.mno}>
            {item.mno} / {item.mname}
          </div>
        ))}
    </div>
  );
};
