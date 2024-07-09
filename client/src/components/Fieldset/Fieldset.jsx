import PropTypes from "prop-types";
import "./Fieldset.scss";

function Fieldset({ legend, name }) {
  return (
    <div id="sign-up-pro-fieldset">
      <legend>{legend}</legend>
      <div id="fieldset-radio">
        <div className="radio">
          <input type="radio" id="no" name={name} value="no" checked />
          <label htmlFor="no">Non</label>
        </div>
        <div className="radio">
          <input type="radio" id="yes" name={name} value="yes" />
          <label htmlFor="yes">Oui</label>
        </div>
      </div>
    </div>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Fieldset;
