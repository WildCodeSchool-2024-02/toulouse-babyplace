import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import SignUpProInfo from "../../../components/SignUpProInfo/SignUpProInfo";
import "./ChildcareCenterStructure.scss";

function ChildcareCenterStructure() {
  return (
    <div id="childcare-center-structure">
      <form>
        <progress max="100" value="5" />
        <Input
          title="Complétez et vérifiez vos informations"
          type="text"
          description="Ce nom sera celui qui s’affichera en titre de votre annonce"
          placeholder="Nom"
        />
        <Input
          title="Téléphone de l’établissement"
          type="text"
          description="Un sms vous sera envoyé pour confirmer votre compte"
          placeholder="Téléphone"
        />
        <Button label="Suivant" path="/sign-up-pro/localisation" />
      </form>
      <SignUpProInfo />
    </div>
  );
}

export default ChildcareCenterStructure;
