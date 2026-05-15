import styles from "./Settings.module.css";

const AccountSettings = ({ preferences, onChange }) => (
  <div className={styles.section}>
    <h3>Account Preferences</h3>

    <div className={styles.formGroup}>
      <label>Language</label>
      <input
        type="text"
        name="language"
        value={preferences.language}
        onChange={onChange}
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label>Time Zone</label>
      <input
        type="text"
        name="timezone"
        value={preferences.timezone}
        onChange={onChange}
        className={styles.input}
      />
    </div>

    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>Weekly Summary</p>
        <span className={styles.toggleDesc}>
          Receive a summary report every week.
        </span>
      </div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          name="weeklySummary"
          checked={preferences.weeklySummary}
          onChange={(e) =>
            onChange({
              target: {
                name: e.target.name,
                value: e.target.checked,
              },
            })
          }
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>
);

export default AccountSettings;
