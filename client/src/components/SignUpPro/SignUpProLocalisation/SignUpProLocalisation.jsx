import { useSignUpPro } from "../../../context/SignUpPro";
import "../../../pages/SignUpPro/SignUpPro.scss";
import "./SignUpProLocalisation.scss";

function SignUpProLocalisation() {
  const { street, setStreet, city, setCity, zipCode, setZipCode } =
    useSignUpPro();

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  return (
    <div className="sign-up-pro">
      <div className="form-flex">
        <div className="sign-up-pro-input">
          <label htmlFor="street">Adresse postale</label>
          <input
            type="text"
            placeholder="N° et nom de rue"
            value={street}
            onChange={handleStreetChange}
          />
        </div>
        <div className="sign-up-pro-input">
          <label htmlFor="zipCode">Code postal</label>
          <input
            type="text"
            placeholder="Code Postal"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="sign-up-pro-input">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            placeholder="Ville"
            value={zipCode}
            onChange={handleZipCodeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpProLocalisation;
