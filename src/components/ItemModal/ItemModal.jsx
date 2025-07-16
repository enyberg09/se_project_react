import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser?._id;
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_img_btn"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weatherType}</p>
          {isOwn && (
            <button
              className="modal__delete-btn"
              onClick={() => onDelete(card._id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
