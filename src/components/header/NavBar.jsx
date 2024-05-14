import Carrito from "./Carrito"

 export const NavBar = () => {
  return (
    <header>
              <nav className="nav">
            <ul>
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Smartphones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Notebooks</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Consolas</a></li>
            </ul>
        </nav>

        <Carrito />

        


    </header>
  )
}

export default NavBar