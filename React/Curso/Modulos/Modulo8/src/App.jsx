import './App.css'

//1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//Component
import Navbar from './components/Navbar'

//rotas
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        {/*links com react router*/}
          <Navbar />
          {/* search */}
          <SearchForm/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* rota dinamica */}
            <Route path="/products/:id" element={<Product />} />
            {/* nested route */}
            <Route path="/products/:id/info" element={<Info />} />
            <Route path='/search' element={<Search/>}/>
            {/* redirect */}
            <Route path="/company" element={<Navigate to="/about"/>}/>
            {/* no match route */}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
