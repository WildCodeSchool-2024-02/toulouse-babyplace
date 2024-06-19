import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import "./SignUpProLogin.scss";

function SignUpProLogin() {
  return (
    <div>
      <Input
        title="Veuillez indiquez votre email"
        type="email"
        description="Cet email vous servira pour vous connecter"
        placeholder="Email"
      />
      <Input
        title="Veuillez indiquez un mot de passe"
        type="password"
        description="Ce mot de passe vous permettra de vous connecter"
        placeholder="Mot de passe"
      />
      <Input placeholder="Confirmer votre mot de passe">
        Veuillez confirmer votre mot de passe
      </Input>
      <Button path="/sign-up-pro/structure" label="Suivant" />
    </div>
  );
}

export default SignUpProLogin;
