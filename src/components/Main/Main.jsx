import { useContext } from "react";

import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  onCardLike,
  currentUser,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit].toFixed(1)}&deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((filteredItem) => {
              return (
                <ItemCard
                  key={filteredItem._id}
                  item={filteredItem}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  currentUser={currentUser}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
