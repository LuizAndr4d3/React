import './App.css'
import { CarDetails } from './components/CarDetails'

function App() {
  const carros = [
    {id: 1, marca: 'Fiat', modelo: 'Palio'},
    {id:2, marca: 'Lamborghini', modelo: 'Urus'},
    {id:3, marca: 'Chevrolet', modelo: 'Camaro'}
  ]

  return (
      <div className='App'>
        <h1 className='Titulo'>Carros</h1>

        <div className='Carros'>
        {carros.map((car) =>(
          <CarDetails key={car.id} id={car.id} marca={car.marca} modelo={car.modelo}/>
        ))}
        </div>
      </div>
  )
}

export default App
