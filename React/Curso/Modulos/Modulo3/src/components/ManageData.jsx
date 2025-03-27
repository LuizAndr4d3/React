import { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(10);

 
    return (
        <>
            <p>Valor: {number} </p>
            <button onClick={() => {setNumber(15)}}>Mudar Variável</button>
        </>
  )
}

export default ManageData