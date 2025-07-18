import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
        ></button>
        <p className="modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <div className="modal__actions">
          <button className="modal__btn" onClick={onConfirm}>
            Yes, delete item
          </button>
          <button className="modal__btn modal__btn_cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
