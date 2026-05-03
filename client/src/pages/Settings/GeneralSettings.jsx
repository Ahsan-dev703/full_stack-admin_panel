import styles from "./Settings.module.css";

const GeneralSettings = () => (
  <div className={styles.section}>
    <h3>General Settings</h3>
    <div className={styles.formGroup}>
      <label>Store Name</label>
      <input
        type="text"
        defaultValue="Modern Store Admin"
        className={styles.input}
      />
    </div>
    <div className={styles.formGroup}>
      <label>Store Email</label>
      <input
        type="email"
        defaultValue="admin@store.com"
        className={styles.input}
      />
    </div>
    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>Maintenance Mode</p>
        <span className={styles.toggleDesc}>
          Disable front-end access for customers.
        </span>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>
);

export default GeneralSettings;
