import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "@/store/features/auth/authSlice";
import Card from "@/components/UI/Card/Card";
import Button from "@/components/UI/Button/Button";
import styles from "./Profile.module.css";

const ProfileForm = ({ data }) => {
  const dispatch = useDispatch();

  // Local state for the "Draft" before saving
  const [formFields, setFormFields] = useState({
    name: data.name,
    role: data.role,
    email: data.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch to Redux store
    dispatch(updateProfile(formFields));
    alert("Profile updated successfully in Redux Store!");
  };

  return (
    <Card title="Personal Information">
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Title / Role</label>
            <input
              type="text"
              name="role"
              value={formFields.role}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className={styles.submitBtn}>
          Update Profile
        </Button>
      </form>
    </Card>
  );
};

export default ProfileForm;
