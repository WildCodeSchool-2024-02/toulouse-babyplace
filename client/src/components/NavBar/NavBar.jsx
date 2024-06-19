import { Link, Outlet } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div id="nav-bar">
      <nav>
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/">
            <li>Aide</li>
          </Link>
          <Link to="/">
            <li>Lumen Pro</li>
          </Link>
          <Link to="/map">
            <li>Carte</li>
          </Link>
        </ul>
        <Link to="/">
          <p>Se connecter</p>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
