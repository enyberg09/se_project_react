import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";

function ClothesSection({
  onCardClick,
  onAddClick,
  onCardLike,
  clothingItems,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  const myItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );
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
        {myItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
