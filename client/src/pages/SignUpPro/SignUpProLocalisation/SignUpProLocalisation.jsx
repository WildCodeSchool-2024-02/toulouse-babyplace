import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";
import "./SignUpProLocalisation.scss";

function SignUpProLocalisation() {
  return (
    <div className="sign-up-pro">
      <progress max="100" value="20" />
      <div className="form-flex">
        <form>
          <Input
            type="text"
            title="Adresse postale"
            placeholder="N° et nom de rue"
          />
          <Input type="text" title="Code postal" placeholder="Code Postal" />
          <Input type="text" title="Ville" placeholder="Ville" />

          <div className="sign-up-pro-button">
            <button type="submit" id="previous-button">
              Retour
            </button>
            <button type="submit" id="next-button">
              Suivant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpProLocalisation;
