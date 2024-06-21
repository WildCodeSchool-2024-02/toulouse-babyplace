import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import "./ChildcareCenterStructure.scss";

function ChildcareCenterStructure() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div id="childcare-center-structure">
      <form>
        <progress max="100" value="5" />
        <div id="structure">
          <h4>Quel type d’accueil proposez-vous ?</h4>
          <div>
            <button type="button">Crèche parentale</button>
            <button type="button">Micro-crèche</button>
            <button type="button">Crèche d'entreprise</button>
            <button type="button">Halte garderie</button>
            <button type="button">Crèche collective</button>
            <button type="button">Crèche d'entreprise</button>
            <button type="button">Multi-Accueil</button>
            <button type="button">Crèche municipale</button>
            <button type="button">Crèche associative</button>
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
        <Button
          label="Suivant"
          nextPath="/sign-up-pro/localisation"
          previousPath="/sign-up-pro/login"
        />
      </form>
    </div>
  );
}

export default ChildcareCenterStructure;
