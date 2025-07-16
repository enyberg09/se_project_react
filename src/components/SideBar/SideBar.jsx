import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar({ onEditProfileClick, onSignOut, currentUser }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser?.avatar || "/default-avatar-path.svg"}
        alt={`${currentUser?.name || "User"}'s avatar`}
      />
      <p className="sidebar__username">{currentUser?.name || "Guest"}</p>
      <button onClick={onEditProfileClick}>Edit Profile</button>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
}

export default SideBar;
