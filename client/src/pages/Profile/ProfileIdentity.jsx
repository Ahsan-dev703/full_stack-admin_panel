import { MdCameraAlt, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Card from "@/components/UI/Card/Card";
import styles from "./Profile.module.css";

const ProfileIdentity = ({ data }) => (
  <div className={styles.leftCol}>
    <Card className={styles.identityCard}>
      <div className={styles.avatarWrapper}>
        <img src={data.avatar} alt="Admin" className={styles.avatar} />
        <button className={styles.uploadBtn} title="Upload New Photo">
          <MdCameraAlt />
        </button>
      </div>
      <div className={styles.identityInfo}>
        <h2>{data.name}</h2>
        <span className={styles.roleBadge}>{data.role}</span>
      </div>
      <div className={styles.metaList}>
        <div className={styles.metaItem}>
          <MdEmail /> {data.email}
        </div>
        <div className={styles.metaItem}>
          <MdPhone /> {data.phone}
        </div>
        <div className={styles.metaItem}>
          <MdLocationOn /> {data.location}
        </div>
      </div>
    </Card>

    <Card title="Quick Stats" className={styles.statsCard}>
      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <label>Actions</label>
          <p>1,240</p>
        </div>
        <div className={styles.stat}>
          <label>Reports</label>
          <p>84</p>
        </div>
      </div>
    </Card>
  </div>
);

export default ProfileIdentity;
