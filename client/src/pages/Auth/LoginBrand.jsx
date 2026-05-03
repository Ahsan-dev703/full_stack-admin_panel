import { MdStorefront } from "react-icons/md";
import styles from "./Login.module.css";

const LoginBrand = () => (
  <div className={styles.brandSide}>
    <div className={styles.brandContent}>
      <div className={styles.logoBox}>
        <MdStorefront />
      </div>
      <h1 className={styles.brandTitle}>
        Modern Store <span>Admin</span>
      </h1>
      <p className={styles.brandText}>
        Control your inventory, track global sales, and manage customer
        relationships from one unified interface.
      </p>
    </div>
  </div>
);

export default LoginBrand;
