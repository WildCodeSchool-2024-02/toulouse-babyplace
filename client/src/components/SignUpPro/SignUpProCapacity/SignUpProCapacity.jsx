import { useSignUpPro } from "../../../context/SignUpPro";

function SignUpProCapacity() {
  const { capacity, setCapacity } = useSignUpPro();

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };
  return (
    <div className="form-flex">
      <h4>Définissez votre nombre de place :</h4>
      <div className="sign-up-pro-input">
        <label htmlFor="capacity">Capacité maximum</label>
        <input type="number" value={capacity} onChange={handleCapacityChange} />
      </div>
    </div>
  );
}

export default SignUpProCapacity;
