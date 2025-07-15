export default function Item(props) {
    const fun = () => {
        alert(`이름: ${props.name}, 나이: ${props.age}, 직업: ${props.job}`);
    }
    return (
        <li onClick={fun}>
            이름: {props.name}, 나이: {props.age}, 직업: {props.job}
        </li>
    );
}
