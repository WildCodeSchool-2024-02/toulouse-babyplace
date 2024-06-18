import { Link } from "react-router-dom";
import "./AutenticationInput.scss";

function AutenticationInput() {
  return (
    <div className="autentication-input">
      <div className="sign">
        <span>Vous n’avez pas de compte ? </span>
        <Link to="/signuppro">S’inscrire</Link>
      </div>
      <img src="../src/assets/images/img_login.svg" alt="" />
      <div className="form">
        <h2>Je me connecte sur Lumen</h2>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder="Mot de passe" />
        <br />
        <button type="submit">Se connecter</button>
      </div>
    </div>
  );
}

export default AutenticationInput;
