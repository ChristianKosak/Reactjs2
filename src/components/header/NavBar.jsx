import Carrito from "./Carrito"

 export const NavBar = () => {
  return (
    <header>
              <nav className="nav">
            <ul>
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Camisetas</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pantalones</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Camperas</a></li>
            </ul>
        </nav>

        <Carrito />

        


    </header>
  )
}

export default NavBar