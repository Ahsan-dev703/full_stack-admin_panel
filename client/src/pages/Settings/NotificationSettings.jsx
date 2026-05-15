import styles from "./Settings.module.css";

const NotificationSettings = ({ notifications, onToggle }) => (
  <div className={styles.section}>
    <h3>Notification Settings</h3>

    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>Email Notifications</p>
        <span className={styles.toggleDesc}>
          Receive updates and alerts by email.
        </span>
      </div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          name="email"
          checked={notifications.email}
          onChange={(e) => onToggle(e.target.name, e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>

    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>SMS Notifications</p>
        <span className={styles.toggleDesc}>
          Receive critical alerts on your phone.
        </span>
      </div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          name="sms"
          checked={notifications.sms}
          onChange={(e) => onToggle(e.target.name, e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>

    <div className={styles.toggleRow}>
      <div>
        <p className={styles.toggleLabel}>Push Notifications</p>
        <span className={styles.toggleDesc}>
          Allow browser push notifications for updates.
        </span>
      </div>
      <label className={styles.switch}>
        <input
          type="checkbox"
          name="push"
          checked={notifications.push}
          onChange={(e) => onToggle(e.target.name, e.target.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>
);

export default NotificationSettings;
