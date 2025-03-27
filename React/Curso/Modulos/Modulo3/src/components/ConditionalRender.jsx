import { useState } from "react"

function ConditionalRender() {
    let [x] = useState(true)

    const [name, setName] = useState("Carlos")


    return (
        <>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {name === "João" ? (
                <div>
                    <p>o nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p>o nome não é João, é {name}</p>
                </div>
            )}
            <button onClick={() => setName("João")}>botão</button>
        </>
    )
}

export default ConditionalRender