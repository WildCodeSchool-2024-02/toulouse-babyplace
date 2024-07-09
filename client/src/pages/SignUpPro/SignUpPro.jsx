import { useNavigate } from "react-router-dom";
import "./SignUpPro.scss";
import NavBarSignUpPro from "../../components/NavBarSignUpPro/NavBarSignUpPro";
import SignUpProLogin from "./SignUpProLogin/SignUpProLogin";
import ChildcareCenterStructure from "./ChildcareCenterStructure/ChildcareCenterStructure";
import SignUpProLocalisation from "./SignUpProLocalisation/SignUpProLocalisation";
import SignUpProImages from "./SignUpProImages/SignUpProImages";
import SignUpProRules from "./SignUpProRules/SignUpProRules";

function SignUpPro() {
  const navigate = useNavigate();
  // const [password, setPassword] = useState("");
  // // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [typeValue, setTypeValue] = useState("parentale");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   typeValue,
          //   name,
          //   phoneNumber,
          //   password,
          //   email,
          // }),
        }
      );
      if (response.status === 201) {
        navigate("/sign-up-pro/localisation");
      } else {
        console.info(response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="sign-up-pro">
      <NavBarSignUpPro />
      <form action={handleSubmit} id="flex-form">
        <SignUpProLogin />
        <ChildcareCenterStructure />
        <SignUpProLocalisation />
        <SignUpProImages />
        <SignUpProRules />
      </form>
    </div>
  );
}

export default SignUpPro;
