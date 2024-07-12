import { Link } from "react-router-dom";
import "./NavBarProfile.scss";

function NavBarProfile() {
  return (
    <div className="nav-bar-profile">
      <div>🔍</div>
      <div>👨‍⚕️</div>
      <div>🔔</div>
      <Link to="/reservation">
        <div>📆</div>
      </Link>
    </div>
  );
}

export default NavBarProfile;
