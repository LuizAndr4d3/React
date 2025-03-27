import React, { useState } from 'react'
import './ExibirTabela.css'
import { evaluate, compile, number, abs} from 'mathjs'

const ExibirTabela = ({ valor, valor1, funcao, m_iterac }) => {
    let raiz = 0
    const [maxiterac, setMaxIterac] = useState(m_iterac ? m_iterac : 6)
    let iteracoes = 0
    const tolerancia = 0.0001

    
    const func = compile(funcao)
    const f = (x) => func.evaluate({ x })

    const valores_ar = [{'valor': valor, 'valor1': valor1, 'Xi': ((Number(valor)+Number(valor1))/2), 'c': ((Number(valor1) - Number(valor)))}]


    while(iteracoes < maxiterac-1){
        var x0 = ((Number(valor) + Number(valor1)) / Number(2))
        var fc = f(x0)

        if(abs(fc) < tolerancia || ((Number(valor1) - Number(valor)) / Number(2) < tolerancia)){
            raiz = x0
            break
        }

        if(f(valor) * fc < 0){
            valor1 = x0;
            valores_ar.push({'valor': valor, 'valor1': valor1, 'Xi': x0, 'c':(Number(valor1)-Number(valor))})
        } else{
            valor = x0
            valores_ar.push({'valor': valor, 'valor1': valor1, 'Xi': x0, 'c':(Number(valor1)-Number(valor))})
        }

        iteracoes++
    }

const validar_casas = (numero) => {
    let n_string = numero.toString().split('.')
    if(n_string.length > 1){
        return (n_string[1].length > 6 ? numero.toFixed(6) : numero)
    } else{
        return numero
    }
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
                    <li>{validar_casas(valores.valor)}</li>
                    <li>{validar_casas(valores.valor1)}</li>
                    <li>{validar_casas(valores.Xi)}</li>
                    <li>{validar_casas((f(valores.valor)))}</li>
                    <li>{validar_casas((f(valores.valor1)))}</li>
                    <li>{validar_casas((f(valores.Xi)))}</li>
                    <li>{validar_casas((valores.c))}</li>
                </ul>
            ))}
        </div>
    </div>
    
    )
}
}

export default ExibirTabela


