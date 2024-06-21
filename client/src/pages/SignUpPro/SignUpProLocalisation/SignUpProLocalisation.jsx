import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import "./SignUpProLocalisation.scss";

function SignUpProLocalisation() {
  return (
    <div>
      <progress max="100" value="20" />
      <form>
        <Input
          type="text"
          title="Adresse postale"
          placeholder="N° et nom de rue"
        />
        <Input type="text" title="Code postal" placeholder="Code Postal" />
        <Input type="text" title="Ville" placeholder="Ville" />
        <Button
          label="Suivant"
          nextPath="/sign-up-pro/images"
          previousPath="/sign-up-pro/structure"
        />
      </form>
    </div>
  );
}

export default SignUpProLocalisation;
