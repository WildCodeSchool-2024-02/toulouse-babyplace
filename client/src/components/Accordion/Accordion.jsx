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
        <h3>{question}</h3>
        <div>{isActive ? <span>&#8600;</span> : <span>&#8599;</span>}</div>
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
