import { NavLink, useLocation } from "react-router-dom";
import "./AuthenticationImgs.scss";
import imgLogin from "../../public/images/img_login.svg";

function AuthenticationImgs() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="authentication-imgs">
      <div className="autentication-text">
        <div className="first-line">
          <NavLink to="/">
            <h1>Lumen</h1>
          </NavLink>
          {path !== "/sign-in" && (
            <div className="pro">
              <p>Pro</p>
            </div>
          )}
          <p className="slogan">
            Connectez-vous à des assistantes maternelles de confiance,
            facilement et rapidement
          </p>
        </div>
      </div>
      <div className="container-img">
        <img className="img" src={imgLogin} alt="" />
      </div>
    </div>
  );
}

export default AuthenticationImgs;
