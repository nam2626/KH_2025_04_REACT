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

  // 쿼리 파라미터 업데이트 (예 : 필터 변경 - 카테고리 변경)
  const changeCategory = (newCategory) => {
    //기존 파라미터 유지
    setSerchParams({ category: newCategory, sort: sort });
  };
  const linkPostDetail = (id) => {
    //원하는 페이지로 이동
    navigate(`/post/${id}`);
  };
  return (
    <>
      <h2>상품 목록</h2>
      {category && <p>선택된 카테고리 : {category}</p>}
      {sort && <p>정렬기준 : {sort}</p>}
      {search && <p>검색어 : {search}</p>}
      <p>
        <button onClick={() => changeCategory('clothes')}>카테고리 변경</button>
        <button onClick={() => linkPostDetail(30)}>PostDetailPage로 이동</button>
      </p>
    </>
  );
};
