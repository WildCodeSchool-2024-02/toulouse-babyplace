import "./SignUpDone.scss";
import { NavLink } from "react-router-dom";

function SignUpDone() {
  return (
    <div className="container">
      <img src="./src/assets/images/imgsignupdone.png" alt="img" />
      <p className="done">Votre compte a été créé avec succès ✅ !</p>
      <NavLink to="/sign-in">
        <button type="button" className="nav-button">
          Se connecter
        </button>
      </NavLink>
    </div>
  );
}

export default SignUpDone;
