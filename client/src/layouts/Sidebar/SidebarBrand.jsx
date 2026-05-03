import styles from "./Sidebar.module.css";

const SidebarBrand = () => (
  <div className={styles.brand}>
    <div className={styles.logoSquare}>S</div>
    <h1 className={styles.logoText}>StoreAdmin</h1>
  </div>
);

export default SidebarBrand;
