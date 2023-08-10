import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            
            <a href="#" className="navbar-brand">MercadoCoder</a>

            
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Vehiculos</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Muebles</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Tecnologia</a>
                </li>
            </ul>

            
            <CartWidget/>
            </div>

        </nav>
    )
}

export default Navbar;