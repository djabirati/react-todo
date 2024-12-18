export function Hobbies(props) {
    return (
        <div>
            <h2>Mes hobbies</h2>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li
                        key={index}
                        style={{
                            padding: "10px",
                            border: "1px solid white",
                            margin: "0.5rem",
                        }}
                    >
                        {hobby}
                    </li>
                ))}
            </ul>
        </div>
    );
}
