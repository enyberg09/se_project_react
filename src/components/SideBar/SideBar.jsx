import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUser";

function SideBar({ onEditProfileClick, onSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar || avatar}
          alt={`${currentUser?.name || "User"}'s avatar`}
        />
        <div className="sidebar__username">{currentUser?.name || "Guest"}</div>
      </div>
      <div className="sidebar__buttons">
        <button
          className="sidebar__edit-profile-btn"
          onClick={onEditProfileClick}
        >
          Edit Profile
        </button>
        <button className="sidebar__sign-out-btn" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
