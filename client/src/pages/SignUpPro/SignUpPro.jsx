import { useNavigate } from "react-router-dom";
import "./SignUpPro.scss";
import NavBarSignUpPro from "../../components/NavBarSignUpPro/NavBarSignUpPro";
import SignUpProLogin from "../../components/SignUpPro/SignUpProLogin/SignUpProLogin";
import ChildcareCenterStructure from "../../components/SignUpPro/ChildcareCenterStructure/ChildcareCenterStructure";
import SignUpProLocalisation from "../../components/SignUpPro/SignUpProLocalisation/SignUpProLocalisation";
import SignUpProImages from "../../components/SignUpPro/SignUpProImages/SignUpProImages";
import SignUpProDescription from "../../components/SignUpPro/SignUpProDescription/SignUpProDescription";
import SignUpProSchedules from "../../components/SignUpPro/SignUpProSchedules/SignUpProSchedules";
import SignUpProCapacity from "../../components/SignUpPro/SignUpProCapacity/SignUpProCapacity";
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
        `${import.meta.env.VITE_API_URL}/api/childcare-center/sign-up-pro`,
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
            email,
            password,
            url: avatar,
            opening,
            closing,
            capacity,
          }),
        }
      );
      if (response.status === 201) {
        navigate("/sign-in-pro");
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
      <form onSubmit={handleSubmit} id="flex-form">
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
