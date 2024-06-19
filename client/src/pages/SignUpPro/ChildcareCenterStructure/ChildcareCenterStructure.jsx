import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

function ChildcareCenterStructure() {
  return (
    <form>
      <Input
        title="Complétez et vérifiez vos informations"
        type="text"
        description="Ce nom sera celui qui s’affichera en titre de votre annonce"
        placeholder="Nom"
        required="required"
      />
      <Input
        title="Téléphone de l’établissement"
        type="text"
        description="Un sms vous sera envoyé pour confirmer votre compte"
        placeholder="Téléphone"
        required="required"
      />
      <Button label="Suivant" />
    </form>
  );
}

export default ChildcareCenterStructure;
