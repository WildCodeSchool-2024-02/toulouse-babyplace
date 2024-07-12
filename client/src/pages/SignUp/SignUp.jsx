import "./SignUp.scss";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarSignUpPro from "../../components/NavBarSignUpPro/NavBarSignUpPro";

function SignUp() {
  const emailRef = useRef();

  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    const isValidLength = newPassword.length >= 8;
    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasDigit = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*()_+={}:;<>,.?~]/.test(newPassword);

    setPasswordValid({
      length: isValidLength,
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      digit: hasDigit,
      specialChar: hasSpecialChar,
    });
    setUserPassword(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPassword !== confirmPassword) {
      console.error("Les mots de passe ne correspondent pas !");
      return;
    }

    if (userPassword.length < 8) {
      console.error("Le mot de passe doit comporter au moins 8 caractères !");
      return;
    }

    if (
      /^(!=.*[a-z])(?:(?=.*[A-Z])|(?=.*[0-9])|(?=.*[^A-Za-z0-9])).*$/.test(
        userPassword
      )
    ) {
      console.error(
        "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial !"
      );
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/customer/sign-up`,
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: userPassword,
            name: name.valueOf(),
            firstname: firstname.valueOf(),
            phone: phone.valueOf(),
            address: address.valueOf(),
          }),
        }
      );

      if (response.status === 201) {
        navigate("/sign-up-done");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBarSignUpPro />
      <div className="inscriptions">
        <form
          className="formulaire"
          method="post"
          onSubmit={handleSubmit}
          action="/sign-up"
        >
          <h2>Création de Compte</h2>
          <label htmlFor="nom">Nom</label>
          <input
            className="champ"
            type="text"
            placeholder="Nom"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="prenom">Prénom</label>
          <input
            className="champ"
            type="text"
            placeholder="Prénom"
            name="prenom"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            className="champ"
            type="email"
            placeholder="Email"
            ref={emailRef}
            name="email"
            id="email"
          />
          <label htmlFor="phone-number">Numero de Telephone</label>
          <input
            className="champ"
            type="tel"
            placeholder="Numero de Telephone"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="password">Mot de Passe</label>
          <input
            className="champ"
            type="password"
            placeholder="Votre mot de Passe"
            id="password"
            value={userPassword}
            onChange={handlePasswordChange}
          />
          <div className="password-conditions">
            {passwordValid.length &&
              passwordValid.uppercase &&
              passwordValid.lowercase &&
              passwordValid.digit &&
              passwordValid.specialChar && (
                <span className="checkmark-icon">&#10004;</span>
              )}
            8 Caractères
            <br />
            {passwordValid.uppercase && (
              <span className="checkmark-icon">&#10004;</span>
            )}
            1 Majuscule
            <br />
            {passwordValid.lowercase && (
              <span className="checkmark-icon">&#10004;</span>
            )}
            1 Minuscule
            <br />
            {passwordValid.digit && (
              <span className="checkmark-icon">&#10004;</span>
            )}
            1 Chiffre
            <br />
            {passwordValid.specialChar && (
              <span className="checkmark-icon">&#10004;</span>
            )}
            Caractère spécial
          </div>
          <label htmlFor="confirm-password">Confirmer votre mot de Passe</label>
          <input
            className="champ"
            type="password"
            placeholder="Confirmer votre mot de Passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            id="confirm-password"
          />
          <label htmlFor="adresse">Adresse, CP, Ville</label>
          <input
            className="champ"
            type="text"
            id="address"
            placeholder="Adresse, CP, Ville"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="btnReg" type="submit">
            Créer un compte
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
