import { MdMenu } from "react-icons/md";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";
import UserDropdown from "./UserDropdown";
import { useScroll } from "@/hooks/useScroll";
import styles from "./Navbar.module.css";

const Navbar = ({ onMenuClick }) => {
  const scrolled = useScroll(10);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <button
          className={styles.mobileMenuBtn}
          onClick={onMenuClick}
          aria-label="Open Menu"
        >
          <MdMenu />
        </button>

        <NavSearch />
      </div>

      <div className={styles.right}>
        <NavActions />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Navbar;
