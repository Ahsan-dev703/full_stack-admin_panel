import { useState, useRef } from "react";
import UserDropdownTrigger from "./UserDropdownTrigger";
import UserDropdownMenu from "./UserDropdownMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./Navbar.module.css";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use the custom hook to handle closing
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className={styles.userDropdown} ref={dropdownRef}>
      <UserDropdownTrigger onClick={toggleDropdown} isOpen={isOpen} />

      {isOpen && <UserDropdownMenu onItemClick={closeDropdown} />}
    </div>
  );
};

export default UserDropdown;
