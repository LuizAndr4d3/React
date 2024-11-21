import React from 'react'
import './Calcular.css'
import { useState } from 'react'
import ExibirTabela from './ExibirTabela'

const Calcular = () => {
  const [valor, setValor] = useState(undefined)
  const [valor1, setValor1] = useState(undefined)
  const [funcao, setFuncao] = useState('')
  const [exibir, setExibir] = useState(false)
  const [iteracoes, setIteracoes] = useState(undefined)

  const handleCalc = (event) => {
    setExibir(true)
    event.preventDefault()
  }

  const handleReset = (event) =>{
    setValor('')
    setValor1('')
    setFuncao('')
    setExibir('')
    setIteracoes('')
    event.preventDefault()
  }

  const handleChangeValor1 = (e) =>{
    setExibir(false)
    setValor1(e.target.value)
  }
  const handleChangeValor = (e) =>{
    setExibir(false)
    setValor(e.target.value)
  }
  const handleChangeFuncao = (e) =>{
    setExibir(false)
    setFuncao(e.target.value)
  }
  const handleChangeIteracao = (e) =>{
    setExibir(false)
    setIteracoes(e.target.value)
  }


  return (
    <div>
      <button className='reset' onClick={handleReset}>Reset</button>
      <h2>Valores</h2>
      <form onSubmit={handleCalc}>
        <label className='form_calc'>
          <input className="input_valor" type="text" value={funcao} name='funcao' placeholder='Digite a função em termos de x (ex: x^3 - x - 2)' onChange={handleChangeFuncao}/>
          <input className="input_valor" type="number" value={iteracoes} name='iteracoes' placeholder='Quantidade Máxima de iterações (Padrão: 6)' onChange={handleChangeIteracao}/>
        </label>
        <label className='form_calc'>
          <input className="input_valor" type="number" value={valor} name='valor' placeholder='Digite o primeiro valor' onChange={handleChangeValor}/>
          <input className="input_valor" type="number" value={valor1} name='valor1' placeholder='Digite o segundo valor' onChange={handleChangeValor1}/>
        </label>
        <input type="submit" value="Calcular" className='enviar_form'/>
      </form>
      {exibir && <ExibirTabela valor={valor} valor1={valor1} funcao={funcao} m_iterac={iteracoes}/>}
    </div>
  )
}

export default Calcular