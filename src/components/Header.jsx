import '../styles/header.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/login">Connexion</NavLink>
      </nav>
    </header>
  );
}

export default Header;