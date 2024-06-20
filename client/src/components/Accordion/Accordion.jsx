import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";

function Accordion({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <button
        type="button"
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </button>
      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
}

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Accordion;
