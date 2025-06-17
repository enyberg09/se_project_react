import "./ModalWithForm.css";

const handleModalContentClick = (e) => {
  e.stopPropagation();
};

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  isButtonDisabled,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content" onClick={handleModalContentClick}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button
            type="submit"
            className="modal__submit"
            disabled={isButtonDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
