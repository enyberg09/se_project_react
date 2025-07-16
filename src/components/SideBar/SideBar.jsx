import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar({ onEditProfileClick }) {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
      <button onClick={onEditProfileClick}>Edit Profile</button>
    </div>
  );
}

export default SideBar;
