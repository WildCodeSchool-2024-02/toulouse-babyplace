import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./AuthenticationInput.scss";

function AuthenticationInput() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/customer/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const { token } = await response.json();

        localStorage.setItem("authToken", token);

        navigate.push("/dashboard");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      // Handle errors
      // console.error("Error during sign-in:", error);
      // alert("Failed to sign in. Please check your credentials and try again.");
    }
  };

  return (
    <div className="authentication-input">
      <div className="sign">
        <span>Vous n’avez pas de compte ? </span>
        {path === "/sign-in" ? (
          <Link to="/sign-up">S’inscrire</Link>
        ) : (
          <Link to="/sign-up-pro/login">S’inscrire</Link>
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
          />
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

export default AuthenticationInput;
