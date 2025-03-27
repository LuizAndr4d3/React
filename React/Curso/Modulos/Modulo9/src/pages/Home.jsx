//import { useContext } from 'react'
//import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../Components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
        <h2 style={{color: color}}>Página ínicial</h2>
        <p>Valor do contator: {counter}</p>
        <ChangeCounter />
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
    </div>
  )
}

export default Home