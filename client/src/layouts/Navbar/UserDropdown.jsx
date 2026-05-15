import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserDropdownTrigger from "./UserDropdownTrigger";
import UserDropdownMenu from "./UserDropdownMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import { logoutUser } from "@/store/features/auth/authThunks";
import styles from "./Navbar.module.css";

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    closeDropdown();
    navigate("/login");
  };

  return (
    <div className={styles.userDropdown} ref={dropdownRef}>
      <UserDropdownTrigger
        onClick={toggleDropdown}
        isOpen={isOpen}
        user={user}
      />

      {isOpen && (
        <UserDropdownMenu onItemClick={closeDropdown} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default UserDropdown;
