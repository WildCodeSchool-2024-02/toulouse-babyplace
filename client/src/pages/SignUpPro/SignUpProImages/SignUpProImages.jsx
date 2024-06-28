import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";

function SignUpProImages() {
  return (
    <div className="sign-up-pro">
      <progress max="100" value="30" />
      <div className="form-flex">
        <form>
          <Input />

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

export default SignUpProImages;
