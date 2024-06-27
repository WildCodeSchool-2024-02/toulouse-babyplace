import "./SignUp.scss";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    if (password.length < 8) {
      alert("Le mot de passe doit comporter au moins 8 caractères !");
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) {
      alert(
        "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial !"
      );
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/customers`,
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password,
          }), // action POST sur register => envoyer le body register (req.body.register?)
        }
      );

      if (response.status === 201) {
        navigate("/sign-up");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="inscriptions">
      <form
        className="formulaire"
        method="post"
        onSubmit={handleSubmit}
        action="/sign-up-done"
      >
        <h2>Création de Compte</h2>
        <label htmlFor="nom">Nom</label>
        <input className="champ" type="text" placeholder="Nom" id="name" />
        <label htmlFor="prenom">Prénom</label>
        <input
          className="champ"
          type="text"
          placeholder="Prénom"
          name="prenom"
          id="firstname"
        />
        <label htmlFor="email">Email</label>
        <input
          className="champ"
          type="email"
          placeholder="Email"
          ref={emailRef}
          name="email"
          id="mail"
        />
        <label htmlFor="phone-number">Numero de Telephone</label>
        <input
          className="champ"
          type="tel"
          placeholder="Numero de Telephone"
          name="phone-number"
          id="phone"
        />

        <label htmlFor="password">Mot de Passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="confirm-password">Confirmer votre mot de Passe</label>
        <input
          className="champ"
          type="password"
          placeholder="Confirmer votre mot de Passe"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          id="confirm-password"
        />
        <label htmlFor="dateofbirth">Date de naissance</label>
        <input
          className="champ"
          type="date"
          placeholder="Date de naissance"
          name="dateofbirth"
          id="dateofbirth"
        />
        <label htmlFor="adresse">Adresse, CP, Ville</label>
        <input
          className="champ"
          type="text"
          id="adresse"
          placeholder="Adresse, CP, Ville"
          name="adresse"
        />
        <button className="btnReg" type="button">
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default SignUp;
