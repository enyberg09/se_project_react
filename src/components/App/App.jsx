import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getItems,
  addItem,
  addCardLike,
  deleteItem,
  deleteCardLike,
  createUser,
  loginUser,
  editUser,
  getUser,
} from "../../utils/api";
import { checkToken } from "../../utils/auth";

import { defaultClothingItems } from "../../utils/constants";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

import "./App.css";
import "../../vendor/fonts.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import SideBar from "../SideBar/SideBar";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import CurrentUserContext from "../../contexts/CurrentUser";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfile";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weatherType }) => {
    const token = localStorage.getItem("token");
    console.log("Sending item:", { name, imageUrl, weatherType });
    addItem({ name, weather: weatherType, imageUrl }, token)
      .then((newItem) => {
        F;
        console.log("New Item", newItem);
        setClothingItems((prevItems) => [newItem.data, ...prevItems]);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to add item:", err);
      });
  };

  const handleRegisterModalSubmit = ({ name, avatar, email, password }) => {
    createUser({ name, avatar, email, password })
      .then((newUser) => {
        closeActiveModal();
        localStorage.setItem("token", newUser.token);
        setCurrentUser(newUser);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("Failed to register new user", err);
      });
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    loginUser({ email, password })
      .then((user) => {
        closeActiveModal();
        localStorage.setItem("token", user.token);
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  const handleEditProfileModalSubmit = ({ name, avatar }) => {
    const token = localStorage.getItem("token");
    editUser({ name, avatar }, token)
      .then((user) => {
        setCurrentUser(user);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to edit user", err);
      });
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleDeleteClick = (id) => {
    const token = localStorage.getItem("token");
    deleteItem(id, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to delete item:", err);
      });
  };

  const handleAddCardLikeClick = ({ id, isLiked }) => {
    const token = localStorage.getItem("token");

    if (!isLiked) {
      console.log("Liking item:", id);
      addCardLike(id, token)
        .then((updatedItem) => {
          setClothingItems((items) =>
            items.map((item) =>
              item._id === updatedItem.data._id ? updatedItem.data : item
            )
          );
        })
        .catch((err) => {
          console.error("Failed to like item:", err);
        });
    } else {
      console.log("Unliking item:", id);
      deleteCardLike(id, token)
        .then((updatedItem) => {
          setClothingItems((items) =>
            items.map((item) =>
              item._id === updatedItem.data._id ? updatedItem.data : item
            )
          );
        })
        .catch((err) => {
          console.error("Failed to unlike item:", err);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          return getItems(token);
        })
        .then((data) => {
          setClothingItems(data);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.error("Token validation failed:", err);
          localStorage.removeItem("token");
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        setWeatherData(filterWeatherData(data));
      })
      .catch((err) => {
        console.error("Failed to get weather data:", err);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleAddCardLikeClick}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    onAddClick={handleAddClick}
                    onEditProfileClick={handleEditProfileClick}
                    onCardLike={handleAddCardLikeClick}
                    currentUser={currentUser}
                    onSignOut={handleSignOut}
                  />
                }
              />
            </Routes>
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            onRegisterModalSubmit={handleRegisterModalSubmit}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLoginModalSubmit={handleLoginModalSubmit}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            onUpdateUser={handleEditProfileModalSubmit}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            onDelete={handleDeleteClick}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
