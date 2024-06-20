import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

function SignUpProImages() {
  return (
    <form>
      <progress max="100" value="20" />
      <Input />
      <Button
        nextPath="/sign-up-pro/rules"
        previousPath="/sign-up-pro/localisation"
      />
    </form>
  );
}

export default SignUpProImages;
