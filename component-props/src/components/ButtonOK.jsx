export default function ButtonOK(props) {
    console.log(props);
    let { data, var1, attr } = props;
    console.log(data, var1, attr);
    //props.data = "변경된 데이터"; // props는 읽기 전용이므로 변경할 수 없음.
    const func = () => {
        // alert("OK 버튼 클릭");
        alert(`${props.data} / ${props.var1} / ${props.attr}`);
    }
  return <button onClick={func}>OK</button>;
}