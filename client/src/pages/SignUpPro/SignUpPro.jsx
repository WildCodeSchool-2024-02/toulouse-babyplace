import { useNavigate } from "react-router-dom";
import "./SignUpPro.scss";
import NavBarSignUpPro from "../../components/NavBarSignUpPro/NavBarSignUpPro";
import SignUpProLogin from "./SignUpProLogin/SignUpProLogin";
import ChildcareCenterStructure from "./ChildcareCenterStructure/ChildcareCenterStructure";
import SignUpProLocalisation from "./SignUpProLocalisation/SignUpProLocalisation";
import SignUpProImages from "./SignUpProImages/SignUpProImages";
import SignUpProDescription from "./SignUpProDescription/SignUpProDescription";
import SignUpProSchedules from "./SignUpProSchedules/SignUpProSchedules";
import SignUpProCapacity from "./SignUpProCapacity/SignUpProCapacity";
import { useSignUpPro } from "../../context/SignUpPro";

function SignUpPro() {
  const navigate = useNavigate();

  const {
    email,
    password,
    name,
    phoneNumber,
    street,
    city,
    zipCode,
    avatar,
    description,
    opening,
    closing,
    capacity,
  } = useSignUpPro();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            description,
            phone: phoneNumber,
            street_address: street,
            zip_code: zipCode,
            city,
            mail: email,
            password,
            url: avatar,
            opening,
            closing,
            capacity,
          }),
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
        <SignUpProDescription />
        <SignUpProSchedules />
        <SignUpProCapacity />
        <button type="submit">Créer mon compte</button>
      </form>
    </div>
  );
}

export default SignUpPro;
