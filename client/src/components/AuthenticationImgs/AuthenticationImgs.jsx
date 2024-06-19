import { useLocation } from "react-router-dom";
import "./AuthenticationImgs.scss";

function AuthenticationImgs() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="autentication-imgs">
      <div className="autentication-text">
        <div className="first-line">
          <h1>Lumen</h1>
          {path !== "/sign-in" && <p>Pro</p>}
        </div>
        <p className="second-line">Gérer votre agenda</p>
        <p>24h/24 7jours/7</p>
      </div>{" "}
      <img className="img" src="../src/assets/images/img_login.svg" alt="" />
    </div>
  );
}

export default AuthenticationImgs;
