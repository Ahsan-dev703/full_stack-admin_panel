import Card from "@/components/UI/Card/Card";
import Button from "@/components/UI/Button/Button";
import styles from "./Profile.module.css";

const ProfileForm = ({ data }) => (
  <Card title="Personal Information">
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formRow}>
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input type="text" defaultValue={data.name} />
        </div>
        <div className={styles.inputGroup}>
          <label>Title / Role</label>
          <input type="text" defaultValue={data.role} />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label>Email Address</label>
        <input type="email" defaultValue={data.email} />
      </div>
      <Button className={styles.submitBtn}>Update Profile</Button>
    </form>
  </Card>
);

export default ProfileForm;
