import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-items">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddClick={onAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
