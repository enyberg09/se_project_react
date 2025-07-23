import "./ItemModal.css";

import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  if (!card) return null;

  const isOwn = card.owner === currentUser?.currentUser?._id;

  const handleDeleteConfirm = () => {
    onDelete(card._id);
    setIsDeleteConfirmOpen(false);
    onClose();
  };
  return (
    <>
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
                onClick={() => {
                  onClose();
                  setIsDeleteConfirmOpen(true);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>

      {isDeleteConfirmOpen && (
        <DeleteConfirmationModal
          isOpen={isDeleteConfirmOpen}
          onClose={() => setIsDeleteConfirmOpen(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
}

export default ItemModal;
