import { useState } from "react"

const ListRender = () => {
    const [users, setUsers] = useState([
        {id: 1, nome: "Matheus"}, 
        {id: 2, nome: "Pedro"}, 
        {id: 3, nome: "Josias"}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random Use</button>
    </div>
  )
}

export default ListRender