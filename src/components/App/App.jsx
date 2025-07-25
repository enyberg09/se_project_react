import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getItems,
  addItem,
  addCardLike,
  deleteItem,
  deleteCardLike,
  editUser,
} from "../../utils/api";
import { checkToken, createUser, loginUser, getUser } from "../../utils/auth";

import { coordinates, APIkey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

import "./App.css";
import "../../vendor/fonts.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";

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
  const [selectedCard, setSelectedCard] = useState(null);
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

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
        console.log("Full server response:", newItem);
        console.log("newItem.data:", newItem.data);
        console.log("Current user ID:", currentUser._id);
        console.log("New Item", newItem);
        setClothingItems((prevItems) => [newItem.data, ...prevItems]);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to add item:", err);
      });
  };

  const handleRegisterModalSubmit = ({ name, avatar, email, password }) => {
    console.log("Register submit started");
    createUser({ name, avatar, email, password })
      .then((newUser) => {
        closeActiveModal();
        localStorage.setItem("token", newUser.token);
        setCurrentUser(newUser.user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("Failed to register new user", err);
      });
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    loginUser({ email, password })
      .then((userData) => {
        closeActiveModal();
        localStorage.setItem("token", userData.token);

        checkToken(userData.token)
          .then((userData) => {
            setCurrentUser(userData);
            setIsLoggedIn(true);
          })
          .catch((err) => {
            setIsLoggedIn(false);
            console.error("Token validation failed:", err);
            localStorage.removeItem("token");
          });
        return getItems(userData.token);
      })
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  const handleEditProfileModalSubmit = ({ name, avatar }) => {
    const token = localStorage.getItem("token");
    return editUser({ name, avatar }, token)
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

    setClothingItems([]);
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
      checkToken(token)
        .then((userData) => {
          console.log("checkToken returned:", userData);

          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.error("Token validation failed:", err);
          localStorage.removeItem("token");
        });
    } else {
      setIsLoggedIn(false);
      setClothingItems([]);
      setCurrentUser(null);
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

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      getItems(token)
        .then((data) => {
          setClothingItems(data);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
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
                    clothingItems={isLoggedIn ? clothingItems : []}
                    onCardLike={handleAddCardLikeClick}
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
