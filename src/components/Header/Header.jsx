import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";

import CurrentUserContext from "../../contexts/CurrentUser";

function Header({
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  weatherData,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = !!currentUser;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="header__avatar"
        />
      );
    }
    const letter = currentUser?.name?.[0]?.toUpperCase() || "?";
    return (
      <div className="header__avatar header__avatar_placeholder">{letter}</div>
    );
  };

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

        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser?.name}</p>
                {renderAvatar()}
              </div>
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
