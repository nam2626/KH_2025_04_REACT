//속성 기본값 설정
export default function PropsEx({ name, age, number = 100 }) {
    console.log(name,age, number);
    // age 100으로 바꾸고 실행
    age = 100;
    return (
        <>
            <h2>PropsEx</h2>        
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>number : {number}</p>
        </>
    );
}
