import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])

  const {data: items, httpConfig, loading, error} = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  //resgatando dados

  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    
    fetchData()
  }, [])*/

  //adicionando dados
  const handleSubmit = async(e) => {
    e.preventDefault()
    const product = {
      name, 
      price
    }

    /*const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    //carregamento dinamico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])*/

    httpConfig(product, "POST")
    setName("")
    setPrice(0)
  }

  const handleRemove = async(id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <>
      <div>
        <h1>Lista de produtos</h1>
        {/* loading */}
        {error && <p>{error.message}</p>}
        {loading && <p>Carregando dados...</p>}
        {!loading && <ul>
          {items && items.map((product) => (
            <li className='products' key={product.id}>{product.name} - R${product.price} <button onClick={() => handleRemove(product.id)}>Remover</button></li>
          ))}
        </ul>}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome: <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço: <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* state de loading no post */}
            {!loading && <input type="submit" value="criar"/>}
            {loading && <input type="submit" disabled value="aguarde"/>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
