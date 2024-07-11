import { useState } from "react";
import "../SignUpPro.scss";
import "./SignUpProLogin.scss";
import { useSignUpPro } from "../../../context/SignUpPro";

function SignUpProLogin() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const { email, setEmail, password, setPassword } = useSignUpPro();

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="sign-up-pro">
      <div className="form-flex">
        <h4>Informations de connexion : </h4>
        <div className="sign-up-pro-input">
          <label htmlFor="email">Veuillez indiquer un email</label>{" "}
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            placeholder="Email"
          />
          <p>Cet email vous servira pour vous connecter</p>
        </div>
        <div className="sign-up-pro-input">
          <label htmlFor="password">Veuillez indiquer un mot de passe</label>{" "}
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />{" "}
          <p>
            {password.length >= 12 ? "✅" : "❌"}{" "}
            {`longueur: ${password.length} >= 12`}
          </p>
        </div>
        <div className="sign-up-pro-input">
          <label htmlFor="confirm-password">
            Veuillez confirmer votre mot de passe
          </label>{" "}
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirmer votre mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />{" "}
          <p>{password === confirmPassword ? "✅" : "❌"}</p>
        </div>
      </div>
    </div>
  );
}

export default SignUpProLogin;
