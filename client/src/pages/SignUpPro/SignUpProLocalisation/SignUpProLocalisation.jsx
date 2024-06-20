import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./SignUpProLocalisation.scss";

function SignUpProLocalisation() {
  return (
    <form>
      <progress max="100" value="10" />
      <Input
        type="text"
        title="Adresse postale"
        placeholder="N° et nom de rue"
      />
      <Input type="text" title="Code postal" placeholder="Code Postal" />
      <Input type="text" title="Ville" placeholder="Ville" />
      <Button label="Suivant" path="/sign-up-pro/images" />
    </form>
  );
}

export default SignUpProLocalisation;
