import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

function SignUpProImages() {
  return (
    <div>
      <progress max="100" value="30" />
      <form>
        <Input />
        <Button
          nextPath="/sign-up-pro/rules"
          previousPath="/sign-up-pro/localisation"
        />
      </form>
    </div>
  );
}

export default SignUpProImages;
