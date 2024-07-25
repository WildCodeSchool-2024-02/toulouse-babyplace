import "./SignInPro.scss";
import AuthenticationImgs from "../../components/AuthenticationImgs/AuthenticationImgs";
import AuthenticationInputPro from "../../components/AuthenticationInputPro/AuthenticationInputPro";

function SignInPro() {
  return (
    <div className="sign-up">
      <AuthenticationImgs />
      <AuthenticationInputPro />
    </div>
  );
}

export default SignInPro;
