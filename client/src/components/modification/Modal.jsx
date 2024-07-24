import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({
  show,
  handleClose,
  handleSave,
  field,
  newValue,
  setNewValue,
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Modifiez votre {field}</h4>
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <div className="modal-buttons">
          <button type="button" onClick={handleSave}>
            Enregistrer
          </button>
          <button type="button" onClick={handleClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  setNewValue: PropTypes.func.isRequired,
};

export default Modal;
