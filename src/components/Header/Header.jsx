import { Link } from "react-router-dom";

import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

function Header({
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <img className="header__logo" src={logo} alt="Header logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <div className="header__right-section">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <button
          onClick={handleRegisterClick}
          type="button"
          className="header__register-btn"
        >
          Sign Up
        </button>
        <button
          onClick={handleLoginClick}
          type="button"
          className="header__login-btn"
        >
          Login
        </button>
      </div>
      <Link to="/profile" className="header__link">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
