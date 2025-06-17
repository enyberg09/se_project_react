import { useContext } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("👕 All clothing items from App:", clothingItems);
  console.log("🌤 Current weather type:", weatherData.type);
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
            .filter((item) => item.weatherType === weatherData.type)
            .map((filteredItem) => {
              return (
                <ItemCard
                  key={filteredItem._id}
                  item={filteredItem}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
