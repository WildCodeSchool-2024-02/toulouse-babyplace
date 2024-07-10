import { useState } from "react";
import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";
import "./ChildcareCenterStructure.scss";

function ChildcareCenterStructure() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          <Input
            title="Complétez et vérifiez vos informations"
            type="text"
            description="Ce nom sera celui qui s’affichera en titre de votre annonce"
            placeholder="Nom de l'établissement"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            required
          />
          <Input
            title="Téléphone de l’établissement"
            type="tel"
            pattern="^0[1-9]([ .-]?[0-9]{2}){4}$"
            description="Un sms vous sera envoyé pour confirmer votre compte"
            placeholder="01 23 45 67 89"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default ChildcareCenterStructure;
