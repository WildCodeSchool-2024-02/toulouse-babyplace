import { Outlet } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

function ChildcareCenterStructure() {
  return (
    <form>
      <Outlet />
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
      <Button label="Suivant" path="/" />
    </form>
  );
}

export default ChildcareCenterStructure;
