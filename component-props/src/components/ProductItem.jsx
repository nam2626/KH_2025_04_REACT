export default (props) => {
    const { name, price, description } = props;

    return (
        <div>
            <p>상품명 : {name}</p>
            <p>가격 : {price}원</p>
            <p>설명 : {description}</p>
        </div>
    );
}