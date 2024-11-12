//import { useContext } from 'react'
//import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../Components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color} = useTitleColorContext()

  return (
    <div>
        <h2 style={{color: color}}>Página ínicial</h2>
        <p>Valor do contator: {counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Home