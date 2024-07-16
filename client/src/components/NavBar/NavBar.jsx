import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div id="nav-bar">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>Aide</li>
          </NavLink>
          <NavLink to="/sign-in-pro">
            <li>Lumen Pro</li>
          </NavLink>
        </ul>
        <NavLink to="/sign-in">
          <p>Se connecter</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
