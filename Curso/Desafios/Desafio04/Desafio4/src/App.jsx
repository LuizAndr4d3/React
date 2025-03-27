import './App.css'
import { UserDetails } from './components/UserDetails/UserDetails'

function App() {
  const pessoas = [{nome: "João", idade: 23, profissão: "Engenheiro"},
     {nome: "Carlos", idade: 17, profissão: "Atendente"},
     {nome: "André", idade: 29, profissão: "Professor"}]
  return (
    <div className='App'>
      <h1>Lista de Pessoas</h1>
      <div className='Usuarios-container'>
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.i} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissão}/>
      ))}
      </div>
    </div>
  )
}

export default App
