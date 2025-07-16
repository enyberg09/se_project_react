import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit,
}) {
  const [name, setName] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const isFormValid = name && imageUrl && weatherType;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weatherType });
    setName("");
    setImageUrl("");
    setWeatherType("");
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      isButtonDisabled={!isFormValid}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          value={name}
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          value={imageUrl}
          type="url"
          className="modal__input"
          id="link"
          placeholder="Image Url"
          onChange={handleImageUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather_type"
            value="hot"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "hot"}
            required
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather_type"
            value="warm"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "warm"}
            required
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weather_type"
            value="cold"
            onChange={handleWeatherTypeChange}
            checked={weatherType === "cold"}
            required
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
