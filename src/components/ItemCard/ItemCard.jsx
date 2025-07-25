import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes?.includes(currentUser?._id);

  const handleLikeClick = () => {
    if (!currentUser) return;
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>

      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {currentUser && (
        <button
          className={`card__like-btn ${isLiked ? "card__like-btn_liked" : ""}`}
          onClick={handleLikeClick}
        >
          {isLiked ? "" : ""}
        </button>
      )}
    </li>
  );
}

export default ItemCard;
