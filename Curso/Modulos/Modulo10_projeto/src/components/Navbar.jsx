import styles from "./Navbar.module.css"

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/Login' className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
                    Entrar
                </NavLink>
            </li>
            <li>
                <NavLink to='/Register' className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
                    Registrar
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : styles.notActive)}>
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar