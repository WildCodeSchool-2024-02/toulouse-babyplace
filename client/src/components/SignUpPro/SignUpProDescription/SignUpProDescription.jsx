import { useSignUpPro } from "../../../context/SignUpPro";
import "../../../pages/SignUpPro/SignUpPro.scss";
import "./SignUpProDescription.scss";

function SignUpProDescription() {
  const { description, setDescription } = useSignUpPro();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div id="sign-up-pro-description">
      <div className="sign-up-pro-input">
        <p id="title-description">Présentez vous auprès des parents</p>
        <textarea
          name="Description"
          id="description"
          rows="5"
          cols="40"
          maxLength="500"
          placeholder="..."
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default SignUpProDescription;
