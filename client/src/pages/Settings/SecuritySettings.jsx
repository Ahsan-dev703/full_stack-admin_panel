import styles from "./Settings.module.css";

const SecuritySettings = () => (
  <div className={styles.section}>
    <h3>Security</h3>
    <div className={styles.formGroup}>
      <label>Current Password</label>
      <input type="password" className={styles.input} />
    </div>
    <div className={styles.formGroup}>
      <label>New Password</label>
      <input type="password" className={styles.input} />
    </div>
    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>Two-Factor Authentication</p>
        <span className={styles.toggleDesc}>Secure your account with 2FA.</span>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" defaultChecked />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>
);

export default SecuritySettings;
