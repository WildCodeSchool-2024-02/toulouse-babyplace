import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";

function Button({ previousPath, nextPath }) {
  return (
    <div className="sign-up-pro-button">
      <Link to={previousPath}>
        <button type="button" id="previous-button">
          Retour
        </button>
      </Link>
      <Link to={nextPath}>
        <button type="button" id="next-button">
          Suivant &#10140;
        </button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  previousPath: PropTypes.string.isRequired,
  nextPath: PropTypes.string.isRequired,
};

export default Button;
