import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

//ProductList.jsx
export default () => {
  const navigate = useNavigate();

  // useSearchParams 훅을 이용해서 URL 쿼리 파라미터를 가져옴
  const [searhParams, setSerchParams] = useSearchParams();

  const category = searhParams.get('category');
  const sort = searhParams.get('sort');
  const search = searhParams.get('search');

  useEffect(() => {
    console.log('카테고리:', category);
    console.log('정렬:', sort);
    console.log('검색어:', search);
  }, [category, sort, search]);

  return (
    <>
      <h2>상품 목록</h2>
      {category && <p>선택된 카테고리 : {category}</p>}
      {sort && <p>정렬기준 : {sort}</p>}
      {search && <p>검색어 : {search}</p>}
    </>
  );
};
