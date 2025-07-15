export default function ButtonOK(props) {
    console.log(props);
    let { data, var1, attr } = props;
    console.log(data, var1, attr);
    const func = () => {
        // alert("OK 버튼 클릭");
        alert(`${props.data} / ${props.var1} / ${props.attr}`);
    }
  return <button onClick={func}>OK</button>;
}