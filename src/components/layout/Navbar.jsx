import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {path !== "/" && (
          <li>
            <Link to="/">Inicio</Link>
          </li>
        )}
        {path !== "/services" && (
          <li>
            <Link to="/services">Servicios</Link>
          </li>
        )}
        {path !== "/destinations" && (
          <li>
            <Link to="/destinations">Destinos recomendados</Link>
          </li>
        )}
        {path !== "/contact" && (
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}