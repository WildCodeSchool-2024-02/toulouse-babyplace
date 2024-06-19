import { Link } from "react-router-dom";
import "./AuthenticationInput.scss";

function AuthenticationInput() {
  return (
    <div className="authentication-input">
      <div className="sign">
        <span>Vous n’avez pas de compte ? </span>
        <Link to="/sign-up-pro">S’inscrire</Link>
      </div>
      <img src="../src/assets/images/img_login.svg" alt="" />
      <div className="form">
        <h2>Je me connecte sur Lumen</h2>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Mot de passe" />
        <br />
        <button type="submit">Se connecter</button>
      </div>
    </div>
  );
}

export default AuthenticationInput;
