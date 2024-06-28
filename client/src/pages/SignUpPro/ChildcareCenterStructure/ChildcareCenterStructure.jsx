import { useState } from "react";
import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";
import "./ChildcareCenterStructure.scss";
import typesChildcareCenter from "../../../services/tools/typesChildcareCenter";

function ChildcareCenterStructure() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [typeValue, setTypeValue] = useState("parentale");

  function handleTypeChange(event) {
    setTypeValue(event.target.value);
  }

  return (
    <div className="sign-up-pro">
      <div id="childcare-center-structure">
        <progress max="100" value="10" />
        <div className="form-flex">
          <form>
            <div id="structure">
              <h4>Quel type d’accueil proposez-vous ?</h4>
              <div className="structure-types">
                {typesChildcareCenter.map((type) => (
                  <>
                    <input
                      key={type.id}
                      type="radio"
                      id={type.id}
                      name="type"
                      value={type.value}
                      checked={typeValue === type.value}
                      onChange={(e) => handleTypeChange(e)}
                    />
                    <label
                      htmlFor={type.htmlFor}
                    >{`Crèche ${type.value}`}</label>
                  </>
                ))}
              </div>
            </div>

            <Input
              title="Complétez et vérifiez vos informations"
              type="text"
              description="Ce nom sera celui qui s’affichera en titre de votre annonce"
              placeholder="Nom de l'établissement"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              title="Téléphone de l’établissement"
              type="text"
              description="Un sms vous sera envoyé pour confirmer votre compte"
              placeholder="Téléphone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />

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
    </div>
  );
}

export default ChildcareCenterStructure;
