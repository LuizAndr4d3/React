import { useState } from 'react'
import './App.css'
import ChangeMessageState from './components/ChangeMessageState'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/carDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'

function App() {
  const[userName] = useState("Carlos")

  const cars = [
    {id: 1, brand: "Toyota", color: "Azul", newCar: false, km: 200000},
    {id: 1, brand: "Fiat", color: "Amaelo", newCar: false, km: 500000},
    {id: 1, brand: "Lamborghini", color: "Branco", newCar: true, km: 0}
  ]

  function showMessage(){
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='principal'>
      <h1>Olá</h1>
      <div>
        <img src="/img1.jpg" alt="aa" />
      </div>
      <ManageData />
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUsername name={userName}/>
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true}/>
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={50000} color="Vermelho" newCar={false}/>
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
      {/* fragments */}
      <Fragments/>
      {/*childern*/}
      <Container>
        <p>este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunctione={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}

export default App
