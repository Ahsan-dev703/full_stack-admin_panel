import { MdLock, MdHistory } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import Button from "@/components/UI/Button/Button";
import styles from "./Profile.module.css";

export const SecurityCard = () => (
  <Card title="Security" className={styles.securityCard}>
    <div className={styles.securityHeader}>
      <MdLock />
      <div>
        <h4>Password Management</h4>
        <p>Change your password regularly to stay secure.</p>
      </div>
      <Button variant="secondary">Change Password</Button>
    </div>
  </Card>
);

export const ActivityCard = ({ activities }) => (
  <Card title="Recent Activity">
    <div className={styles.activityList}>
      {activities.map((item) => (
        <div key={item.id} className={styles.activityItem}>
          <div className={styles.activityIcon}>
            <MdHistory />
          </div>
          <div className={styles.activityContent}>
            <p>
              <strong>{item.action}</strong>: {item.target}
            </p>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  </Card>
);
