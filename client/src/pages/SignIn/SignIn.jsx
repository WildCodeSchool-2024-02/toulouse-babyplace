import "./SignIn.scss";
import AuthenticationImgs from "../../components/AuthenticationImgs/AuthenticationImgs";
import AuthenticationInput from "../../components/AuthenticationInput/AuthenticationInput";

function SignIn() {
  return (
    <div className="sign-up">
      <AuthenticationImgs />
      <AuthenticationInput />
    </div>
  );
}

export default SignIn;
