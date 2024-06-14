import "./Login.scss";
import AutenticationImgs from "../../components/AutenticationImgs/AutenticationImgs";
import AutenticationInput from "../../components/AutenticationInput/AutenticationInput";

function Login() {
  return (
    <div className="login">
      <AutenticationImgs /> <AutenticationInput />
    </div>
  );
}

export default Login;
