export default function ButtonProps({name,age}) {
    const func = () => {
        alert(`이름: ${name}, 나이: ${age}`);
    }
    return <button onClick={func}>Props 버튼</button>;
}