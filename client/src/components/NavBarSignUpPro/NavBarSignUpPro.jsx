import { Link } from "react-router-dom";
import "./NavBarSignUpPro.scss";

function NavBarSignUpPro() {
  return (
    <div id="nav-bar-sign-up-pro">
      <div id="nav-bar-sign-up-pro-title">
        <Link to="/">Lumen</Link>
      </div>
      <progress value={20} max={100} />
    </div>
  );
}

export default NavBarSignUpPro;
