import { useSignUpPro } from "../../../context/SignUpPro";

function SignUpProCapacity() {
  const { capacity, setCapacity } = useSignUpPro();

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };
  return (
    <div className="sign-up-pro-input">
      <label htmlFor="capacity">Nombre de place</label>
      <input type="number" value={capacity} onChange={handleCapacityChange} />
      <p>Au total, de combien d’aggrément disposez vous ?</p>
    </div>
  );
}

export default SignUpProCapacity;
