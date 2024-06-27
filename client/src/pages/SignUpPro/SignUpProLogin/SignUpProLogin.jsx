import { useRef, useState } from "react";
import "../SignUpPro.scss";
import "./SignUpProLogin.scss";

function SignUpProLogin() {
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password,
          }),
        }
      );
      if (response.status === 201) {
        // navigate("/sign-up-pro/structure");
      } else {
        console.info(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up-pro">
      <progress max="100" value="0" />
      <div className="form-flex">
        <form onSubmit={handleSubmit}>
          <div className="input-sign-up-pro">
            <label htmlFor="email">Veuillez indiquer un email</label>{" "}
            <input ref={emailRef} type="email" id="email" placeholder="Email" />
            <p>Cet email vous servira pour vous connecter</p>
          </div>
          <div className="input-sign-up-pro">
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
          <div className="input-sign-up-pro">
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
          <div className="sign-up-pro-button">
            <button type="submit" id="previous-button">
              Retour
            </button>
            <button type="submit" id="next-button">
              Suivant &#10140;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpProLogin;
