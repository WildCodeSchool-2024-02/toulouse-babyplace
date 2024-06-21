import { Link } from "react-router-dom";
import "./NavBarSignUpPro.scss";

function NavBarSignUpPro() {
  return (
    <div id="nav-bar-sign-up-pro">
      <div id="nav-bar-sign-up-pro-title">
        <Link to="/">Lumen</Link>
        <p>Structure d'accueil</p>
      </div>
      <button type="button">Enregistrer et continuer</button>
    </div>
  );
}

export default NavBarSignUpPro;
