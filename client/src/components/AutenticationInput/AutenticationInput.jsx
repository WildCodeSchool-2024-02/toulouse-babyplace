import { Link } from "react-router-dom";
import "./AutenticationInput.scss";

function AutenticationInput() {
  return (
    <div className="autentication-input">
      <div className="sign">
        <span>Vous n’avez pas de compte ? </span>
        <Link to="/">S’inscrire</Link>
      </div>
      <div className="form">
        <h1>Je me connecte sur Lumen</h1>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </div>
    </div>
  );
}

export default AutenticationInput;
