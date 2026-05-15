import styles from "./Settings.module.css";

const GeneralSettings = ({
  profileState,
  onProfileChange,
  themeMode,
  onThemeChange,
}) => (
  <div className={styles.section}>
    <h3>General Settings</h3>

    <div className={styles.formGroup}>
      <label>Admin Name</label>
      <input
        type="text"
        name="name"
        value={profileState.name}
        onChange={onProfileChange}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Avatar URL</label>
      <input
        type="text"
        name="avatar"
        value={profileState.avatar}
        onChange={onProfileChange}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Account Email</label>
      <input
        type="email"
        name="email"
        value={profileState.email}
        onChange={onProfileChange}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>User Role</label>
      <input
        type="text"
        name="role"
        value={profileState.role}
        className={styles.input}
        disabled
      />
    </div>

    <div className={styles.formGroup}>
      <label>Theme Mode</label>
      <select
        name="theme"
        value={themeMode}
        onChange={onThemeChange}
        className={styles.input}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
);

export default GeneralSettings;
