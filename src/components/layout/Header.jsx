import { Link, useLocation } from "react-router-dom";
import "../../styles/header.css";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <h1>Calm Travel</h1>
      <p className="tagline">
        Viajá en calma, dejando tus vacaciones en nuestras manos.
      </p>

    <nav>
  <ul className="navbar-list">
    {pathname !== "/" && (
      <li>
        <Link to="/">
          <i className="fa-solid fa-house"></i> Inicio
        </Link>
      </li>
    )}
    {pathname !== "/services" && (
      <li>
        <Link to="/services">
          <i className="fa-solid fa-suitcase-rolling"></i> Servicios
        </Link>
      </li>
    )}
    {pathname !== "/destinations" && (
      <li>
        <Link to="/destinations">
          <i className="fa-solid fa-earth-americas"></i> Destinos recomendados
        </Link>
      </li>
    )}
    {pathname !== "/contact" && (
      <li>
        <Link to="/contact">
          <i className="fa-solid fa-envelope"></i> Contacto
        </Link>
      </li>
    )}
  </ul>
</nav>
    </header>
  );
}