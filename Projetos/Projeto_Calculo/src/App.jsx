import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExibirTabela from './components/ExibirTabela'
import Calcular from './components/Calcular'

function App() {
  return (
    <div>
      <Header/>
      <Calcular/>
    </div>
  )
}

export default App
