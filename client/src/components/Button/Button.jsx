import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";

function Button({ label, path }) {
  return (
    <div className="sign-up-pro-button">
      <Link to={path}>
        <button type="button">{label} &#10140;</button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;
