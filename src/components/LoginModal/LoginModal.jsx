import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function LoginModal({ onClose, isOpen, onLoginModalSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email && password;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      title="Login User"
      buttonText="Login"
      isOpen={isOpen}
      onClose={onClose}
      isButtonDisabled={!isFormValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          value={email}
          type="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          value={password}
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}
