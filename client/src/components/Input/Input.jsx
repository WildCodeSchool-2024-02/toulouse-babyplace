import "./Input.scss";
import PropTypes from "prop-types";

function Input({ title, type, description, placeholder }) {
  return (
    <div className="sign-up-pro-input">
      <label>{title}</label>
      <input type={type} placeholder={placeholder} required />
      <p>{description}</p>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  description: "",
  placeholder: "",
};

export default Input;
