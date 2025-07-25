import "./EditProfile.css";

import React, { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUser";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    return onUpdateUser({ name, avatar }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Edit Profile"
      buttonText={isSubmitting ? "Saving..." : "Save"}
      isButtonDisabled={isSubmitting || !name.trim()}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__edit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength="2"
          maxLength="40"
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          className="modal__edit-avatar-url"
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="https://example.com/avatar.jpg"
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
