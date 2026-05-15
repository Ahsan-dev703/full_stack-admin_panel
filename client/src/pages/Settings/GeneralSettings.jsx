import styles from "./Settings.module.css";

const GeneralSettings = ({ user }) => (
  <div className={styles.section}>
    <h3>General Settings</h3>
    <div className={styles.formGroup}>
      <label>Admin Name</label>
      <input
        type="text"
        defaultValue={user?.name || "Muhammad Ahsan"}
        className={styles.input}
      />
    </div>
    <div className={styles.formGroup}>
      <label>Account Email</label>
      <input
        type="email"
        defaultValue={user?.email || "admin@gmail.com"}
        className={styles.input}
      />
    </div>
    <div className={styles.formGroup}>
      <label>User Role</label>
      <input
        type="text"
        defaultValue={user?.role || "Admin"}
        className={styles.input}
        disabled
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
