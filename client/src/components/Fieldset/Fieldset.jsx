import PropTypes from "prop-types";
import "./Fieldset.scss";

function Fieldset({ legend, name }) {
  return (
    <fieldset id="sign-up-pro-fieldset">
      <legend>{legend}</legend>
      <div>
        <input type="radio" id="no" name={name} value="no" checked />
        <label htmlFor="no">Non</label>
      </div>
      <div>
        <input type="radio" id="yes" name={name} value="yes" />
        <label htmlFor="yes">Oui</label>
      </div>
    </fieldset>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Fieldset;
