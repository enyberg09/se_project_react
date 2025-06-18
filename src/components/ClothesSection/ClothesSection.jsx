import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, handleCardClick }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your Items</p>
        <button>+ Add New</button>
      </div>
      <ul className="cards__list">
        {clothingItems.map((filteredItem) => {
          return (
            <ItemCard
              key={filteredItem._id}
              item={filteredItem}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
