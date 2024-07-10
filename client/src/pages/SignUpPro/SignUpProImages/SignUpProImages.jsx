import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";

function SignUpProImages() {
  return (
    <div className="form-flex">
      <Input
        title="Ajoutez votre photo de profil"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
      />
    </div>
  );
}

export default SignUpProImages;
