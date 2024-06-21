import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import "./SignUpProLogin.scss";

function SignUpProLogin() {
  return (
    <div>
      <progress max="100" value="0" />
      <Input
        title="Veuillez indiquez votre email"
        type="email"
        description="Cet email vous servira pour vous connecter"
        placeholder="Email"
      />
      <Input
        title="Veuillez indiquez un mot de passe"
        type="password"
        description=""
        placeholder="Mot de passe"
      />
      <Input type="password" placeholder="Confirmer votre mot de passe">
        Veuillez confirmer votre mot de passe
      </Input>
      <Button
        nextPath="/sign-up-pro/structure"
        previousPath="/sign-in-pro"
        label="Suivant"
      />
    </div>
  );
}

export default SignUpProLogin;
