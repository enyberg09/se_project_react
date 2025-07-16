import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes?.includes(currentUser?._id);

  const handleLikeClick = () => {
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
          {isLiked ? "♥" : "♡"}
        </button>
      )}
    </li>
  );
}

export default ItemCard;
