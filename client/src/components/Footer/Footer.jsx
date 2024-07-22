import { NavLink } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div id="footer-top">
        <h2>Essayez c’est gratuit !</h2>
        <div>
          <button id="btn-more" type="button">
            En savoir plus
          </button>
          <button id="btn-demo" type="button">
            Demander une démo <span>&#10140;</span>
          </button>
        </div>
      </div>
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
