export default function ButtonOK() {
    const func = () => {
        alert("OK 버튼 클릭");
    }
  return <button onClick={func}>OK</button>;
}