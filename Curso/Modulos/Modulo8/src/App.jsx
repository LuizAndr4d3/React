import './App.css'

//1 - config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Component
import Navbar from './components/Navbar'

//rotas
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/Product'
import Info from './pages/Info'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        {/*links com react router*/}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
            {/* nested route */}
            <Route path="/products/:id/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
