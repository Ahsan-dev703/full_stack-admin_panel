import { useSelector } from "react-redux";
import ProfileIdentity from "./ProfileIdentity";
import ProfileForm from "./ProfileForm";
import { SecurityCard, ActivityCard } from "./ProfileLog";
import { RECENT_ACTIVITY } from "@/constants/profile";
import { selectCurrentUser } from "@/store/features/auth/authSelectors";
import Loader from "@/components/UI/Loader/Loader";
import styles from "./Profile.module.css";

const Profile = () => {
  const userData = useSelector(selectCurrentUser);
  const { loading } = useSelector((state) => state.auth || { loading: false });

  if (loading) {
    return <Loader fullScreen text="Loading profile..." />;
  }

  if (!userData) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Profile</h1>
        </header>
        <p>Please login to view your profile details.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Admin Profile</h1>
      </header>

      <div className={styles.grid}>
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
