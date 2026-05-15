import { useSelector } from "react-redux";
import ProfileIdentity from "./ProfileIdentity";
import ProfileForm from "./ProfileForm";
import { SecurityCard, ActivityCard } from "./ProfileLog";
import { RECENT_ACTIVITY } from "@/constants/profile";
import styles from "./Profile.module.css";

const Profile = () => {
  // Pulling live data from Redux
  const userData = useSelector((state) => state.auth.user);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Admin Profile</h1>
      </header>

      <div className={styles.grid}>
        {/* Pass the global user data down */}
        <ProfileIdentity data={userData} />

        <div className={styles.rightCol}>
          <ProfileForm data={userData} />
          <SecurityCard />
          <ActivityCard activities={RECENT_ACTIVITY} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
