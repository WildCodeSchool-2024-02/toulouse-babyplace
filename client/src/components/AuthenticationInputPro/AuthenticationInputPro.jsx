import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./AuthenticationInputPro.scss";

function AuthenticationInputPro() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center/sign-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.status === 200) {
        const { token } = await response.json();

        localStorage.setItem("authToken", token);

        navigate("/profile-pro");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.info("Error during sign-in:", error);
    }
  };

  return (
    <div className="authentication-input">
      <div className="sign">
        <span>Vous n’avez pas de compte ? </span>
        {path === "/sign-in" ? (
          <Link to="/sign-up">S’inscrire</Link>
        ) : (
          <Link to="/sign-up-pro">S’inscrire</Link>
        )}
      </div>
      <img src="../src/assets/images/img_login.svg" alt="" />
      <div className="form">
        <h2>Je me connecte sur Lumen</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default AuthenticationInputPro;
