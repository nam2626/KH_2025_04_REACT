import ProductItem from "./ProductItem";

export default () => {
    const arr = [{name : '컴퓨터', price : 1500000, description : '고성능 게이밍 컴퓨터 입니다.' },
    {name : '폰', price : 500000, description : '고성능 폰 입니다.' },
    {name : '게이밍 키보드', price : 150000, description : '고성능 키보드 입니다.' }];
 
    return  (
        <>
        {arr.map((item, index) => (
            <ProductItem key={index} name={item.name} price={item.price} description={item.description} />
        ))}
        </>) ;
}
