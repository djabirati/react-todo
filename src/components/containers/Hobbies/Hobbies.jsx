export function Hobbies() {
    const hobbiesFromDB = [
        {
            id: "fzovf24ZF4234",
            name: "volleyball",
        },
        {
            id: "esgh53Gef3",
            name: "lecture",
        },

    ]
    return (
        <div>
            <h2>Mes hobbies</h2>
            <ul>
                {hobbiesFromDB.map((hobby) => {
                    return (
                        <li
                            key={hobby.id}
                            style={{
                            padding: "10px",
                            border: "1px solid white",
                            margin: "0.5rem",
                        }}>
                            {hobby.name}
                        </li>)
                })}
            </ul>
        </div>
)
}