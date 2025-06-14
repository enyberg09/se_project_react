import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  isButtonDisabled,
}) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <form className="modal__form">
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
