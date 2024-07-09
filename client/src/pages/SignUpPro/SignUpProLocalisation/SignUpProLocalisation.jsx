import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";
import "./SignUpProLocalisation.scss";

function SignUpProLocalisation() {
  return (
    <div className="sign-up-pro">
      <div className="form-flex">
        <Input
          type="text"
          title="Adresse postale"
          placeholder="N° et nom de rue"
        />
        <Input type="text" title="Code postal" placeholder="Code Postal" />
        <Input type="text" title="Ville" placeholder="Ville" />
      </div>
    </div>
  );
}

export default SignUpProLocalisation;
