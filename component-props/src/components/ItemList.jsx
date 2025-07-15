import Item from "./Item";

export default function ItemList(props) {
    console.log(props);
    return (
        <div>
            <h2>Item List</h2>
            {/* props로 전달된 데이터를 사용하여 리스트를 렌더링합니다. */}
            <ul>
                {
                props.profile.map((item, index) => (
                    <Item key={index} name={item.name} age={item.age} job={item.job} />
                ))}
            </ul>

        </div>
    );
}