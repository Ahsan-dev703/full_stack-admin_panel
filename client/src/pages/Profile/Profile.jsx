import { useState } from "react";
import ProfileIdentity from "./ProfileIdentity";
import ProfileForm from "./ProfileForm";
import { SecurityCard, ActivityCard } from "./ProfileLog";
import { ADMIN_DATA, RECENT_ACTIVITY } from "@/constants/profile";
import styles from "./Profile.module.css";

const Profile = () => {
  const [formData] = useState(ADMIN_DATA);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Admin Profile</h1>
      </header>

      <div className={styles.grid}>
        <ProfileIdentity data={formData} />

        <div className={styles.rightCol}>
          <ProfileForm data={formData} />
          <SecurityCard />
          <ActivityCard activities={RECENT_ACTIVITY} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
