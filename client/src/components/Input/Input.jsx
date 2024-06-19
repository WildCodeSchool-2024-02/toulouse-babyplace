import "./Input.scss";
import PropTypes from "prop-types";

function Input({ title, type, description, placeholder, required }) {
  return (
    <div className="sign-up-pro-input">
      <h4>{title}</h4>
      <input type={type} placeholder={placeholder} required={required} />
      <p>{description}</p>
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  description: "",
  placeholder: "",
  required: false,
};

export default Input;
