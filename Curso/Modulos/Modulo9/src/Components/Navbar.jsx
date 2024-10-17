import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/page">Page</NavLink>
    </nav>
  )
}

export default Navbar