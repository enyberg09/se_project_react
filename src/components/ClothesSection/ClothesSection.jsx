import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__your-items">Your Items</p>
        <button
          className="clothes-section__add-new-btn"
          onClick={() => onAddClick()}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((filteredItem) => {
          return (
            <ItemCard
              key={filteredItem._id}
              item={filteredItem}
              onCardClick={onCardClick}
              onAddClick={onAddClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
