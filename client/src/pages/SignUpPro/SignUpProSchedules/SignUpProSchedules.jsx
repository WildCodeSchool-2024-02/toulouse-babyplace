import { useSignUpPro } from "../../../context/SignUpPro";

function SignUpProSchedules() {
  const { opening, setOpening, closing, setClosing } = useSignUpPro();

  const handleOpeningChange = (event) => {
    setOpening(event.target.value);
  };

  const handleClosingChange = (event) => {
    setClosing(event.target.value);
  };
  return (
    <div>
      <h4>Quels sont vos horaires :</h4>
      <div className="sign-up-pro-input">
        <label htmlFor="opening">De : </label>
        <input type="time" value={opening} onChange={handleOpeningChange} />
      </div>
      <div className="sign-up-pro-input">
        <label htmlFor="closing">A : </label>
        <input type="time" value={closing} onChange={handleClosingChange} />
      </div>
    </div>
  );
}

export default SignUpProSchedules;
