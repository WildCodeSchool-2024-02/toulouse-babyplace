import { NavLink, useLocation } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const location = useLocation();
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const isSignInPage = location.pathname.toLowerCase() === "/sign-in";

  return (
    <div id="footer">
      <h2>Lumen</h2>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/help">
          <li>Aide</li>
        </NavLink>
        {!isLoggedIn && (
          <NavLink to="/sign-in">
            <li>Se connecter</li>
          </NavLink>
        )}
        {!isLoggedIn && !isSignInPage && (
          <NavLink to="/sign-in-pro">
            <li>Lumen Pro</li>
          </NavLink>
        )}
      </ul>
      <p id="p">© 2024 | Tous droits réservés</p>
    </div>
  );
}

export default Footer;
