import { useState } from 'react'
import './Events.css'

const Events = () => {

    const [number, setNumber] = useState(10)

    return(
        <div className="divEvents">
            <div className='divIputs'>
                <input type="text" />
                <input type="text" />
            </div>
            <div className="divBotao">
                <button className='botaoCalcula' onClick={() => {setNumber(number+number)}}>Calcular</button>
            </div>
            <div className='Resultado'>
                {number}
            </div>
        </div>
    )

}

export default Events