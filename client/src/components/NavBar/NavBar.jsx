import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const location = useLocation();
  const isSearchPage = location.pathname === "/Search";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div id="nav-bar">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>Aide</li>
          </NavLink>
          {!isSearchPage && (
            <NavLink
              to="/sign-in-pro"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Lumen Pro</li>
            </NavLink>
          )}
        </ul>
        {isSearchPage ? (
          <button type="button" onClick={handleLogout} className="nav-button">
            Se déconnecter
          </button>
        ) : (
          <NavLink to="/sign-in">
            <button type="button" className="nav-button">
              Se connecter
            </button>
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
