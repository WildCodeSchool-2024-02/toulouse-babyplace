import "./SignInPro.scss";
import AuthenticationImgs from "../../components/AuthenticationImgs/AuthenticationImgs";
import AuthenticationInput from "../../components/AuthenticationInput/AuthenticationInput";

function SignInPro() {
  return (
    <div className="sign-up">
      <AuthenticationImgs />
      <AuthenticationInput />
    </div>
  );
}

export default SignInPro;
