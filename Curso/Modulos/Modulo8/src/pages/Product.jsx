import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } = useParams();

    //carregamento de dado individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

  return (
    <>
        <p>Id do produto: {id}</p>
        {error && <p>ocorreu um erro</p>}
        {loading && <p>carregando...</p>}
        {product && (
            <div>
                <h2>Nome: {product.name}</h2>
                <p>Preço: R$ {product.price}</p>
                {/* nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product