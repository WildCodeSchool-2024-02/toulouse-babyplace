import "../../../pages/SignUpPro/SignUpPro.scss";
import { useSignUpPro } from "../../../context/SignUpPro";

function ChildcareCenterStructure() {
  const { name, setName, phoneNumber, setPhoneNumber } = useSignUpPro();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="sign-up-pro">
      <div id="childcare-center-structure">
        <div className="form-flex">
          <h4>Informations du professionnel :</h4>
          <div className="sign-up-pro-input">
            <label htmlFor="name">Complétez et vérifiez vos informations</label>
            <input
              type="text"
              placeholder="Nom de l'établissement"
              value={name}
              onChange={handleNameChange}
            />
            <p>Ce nom sera celui qui s’affichera en titre de votre annonce</p>
          </div>
          <div className="sign-up-pro-input">
            <label htmlFor="phone">Téléphone du professionnel</label>
            <input
              type="tel"
              placeholder="01 23 45 67 89"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildcareCenterStructure;
