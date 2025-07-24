import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function RegisterModal({
  onClose,
  isOpen,
  onRegisterModalSubmit,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = name && email && avatar && password;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ name, email, avatar, password });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setAvatar("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      isButtonDisabled={!isFormValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-name" className="modal__label">
        Name{" "}
        <input
          value={name}
          type="text"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="register-email" className="modal__label">
        Email{" "}
        <input
          value={email}
          type="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar{" "}
        <input
          value={avatar}
          type="url"
          className="modal__input"
          id="register-avatar"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
          required
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password{" "}
        <input
          value={password}
          type="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
