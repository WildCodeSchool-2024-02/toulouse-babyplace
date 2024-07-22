import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div>
        <p>Lumen</p>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/help">
            <li>Aide</li>
          </NavLink>
          <NavLink to="/sign-in-pro">
            <li>Lumen Pro</li>
          </NavLink>
          <NavLink to="/sign-in">
            <li>Se connecter</li>
          </NavLink>
        </ul>
      </div>
      <p id="p">© 2024 | Tous droits réservés</p>
    </div>
  );
}

export default Footer;
