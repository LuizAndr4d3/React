import React, { useState } from 'react'
import './ExibirTabela.css'
import { evaluate, compile, number, abs} from 'mathjs'

const ExibirTabela = ({ valor, valor1, funcao, m_iterac }) => {
    const [raiz, setRaiz] = useState(null)
    const [maxiterac, setMaxIterac] = useState(null)
    if(m_iterac !== null){
        var max_iterac = m_iterac
    } else{
        var max_iterac = 6
    }
    let iteracoes = 0
    const tolerancia = 0.0001

    
    const func = compile(funcao)
    const f = (x) => func.evaluate({ x })

    const valores_ar = [{'valor': valor, 'valor1': valor1, 'Xi': ((Number(valor)+Number(valor1))/2), 'c': ((Number(valor1) - Number(valor)))}]


    while(iteracoes < max_iterac-1){
        var x0 = ((Number(valor) + Number(valor1)) / Number(2))
        var fc = f(x0)

        if(abs(fc) < tolerancia || ((Number(valor1) - Number(valor)) / Number(2) < tolerancia)){
            setRaiz(x0)
            break
        }

        if(f(valor) * fc < 0){
            valor1 = x0;
            valores_ar.push({'valor': valor, 'valor1': valor1, 'Xi': ((Number(valor)+Number(valor1))/Number(2)), 'c':(Number(valor1)-Number(valor))})
        } else{
            valor = x0
            valores_ar.push({'valor': valor, 'valor1': valor1, 'Xi': ((Number(valor)+Number(valor1))/Number(2)), 'c':(Number(valor1)-Number(valor))})
        }

        iteracoes++
    }

if(f(valor) * f(valor1) >= 0){
    return(
        <div>
            <h2>Não possui raiz no intervalo</h2>
        </div>
    )
}else{
    return (
    <div>
        <div className='tabela'>
            <ul className='cabeçalho-tabela'>
                <li>A</li>
                <li>B</li>
                <li>Xₙ</li>
                <li>F(A)</li>
                <li>F(B)</li>
                <li>F(Xₙ)</li>
                <li>C</li>
            </ul>
            {valores_ar.map((valores) => (
                <ul key='corpo' className='corpo-tabela'>
                    <li>{valores.valor}</li>
                    <li>{valores.valor1}</li>
                    <li>{(valores.Xi)}</li>
                    <li>{(f(valores.valor)).toFixed(6)}</li>
                    <li>{(f(valores.valor1).toFixed(6))}</li>
                    <li>{(f(valores.Xi)).toFixed(6)}</li>
                    <li>{(valores.c).toFixed(6)}</li>
            </ul>
            ))}
        </div>
    </div>
    
    )
}
}

export default ExibirTabela


