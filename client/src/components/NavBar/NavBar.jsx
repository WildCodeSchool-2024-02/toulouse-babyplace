import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../public/images/logo.png";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignInPage = location.pathname.toLowerCase() === "/profile";
  const isSignInProPage = location.pathname.toLowerCase() === "/profile-pro";
  const isLoggedIn = Boolean(localStorage.getItem("authToken"));
  const [isProUser, setIsProUser] = useState(false);

  useEffect(() => {
    if (isSignInProPage && isLoggedIn) {
      setIsProUser(true);
    }
  }, [isSignInProPage, isLoggedIn]);

  useEffect(() => {
    if (isSignInPage && isLoggedIn) {
      setIsProUser(false);
    }
  }, [isSignInPage, isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsProUser(false);
    navigate("/");
  };

  return (
    <div id="nav-bar">
      <nav>
        <ul>
          <img src={logo} width={64} height={64} alt="Lumen Logo" />
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
          {!isLoggedIn && !isSignInPage && (
            <NavLink
              to="/sign-in-pro"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Lumen Pro</li>
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink
              to={isProUser ? "/profile-pro" : "/profile"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <li>Profil</li>
            </NavLink>
          )}
        </ul>
        {isLoggedIn ? (
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
