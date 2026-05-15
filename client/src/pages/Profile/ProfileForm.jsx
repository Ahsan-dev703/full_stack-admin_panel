import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "@/store/features/auth/authSlice";
import Card from "@/components/UI/Card/Card";
import Button from "@/components/UI/Button/Button";
import styles from "./Profile.module.css";

const ProfileForm = ({ data }) => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState({
    name: data.name || "",
    role: data.role || "",
    email: data.email || "",
    avatar: data.avatar || "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setFormFields({
      name: data.name || "",
      role: data.role || "",
      email: data.email || "",
      avatar: data.avatar || "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formFields.name.trim() || !isValidEmail(formFields.email)) {
      setSuccessMessage("Please enter a valid name and email address.");
      return;
    }

    dispatch(
      updateProfile({
        name: formFields.name.trim(),
        email: formFields.email.trim(),
        avatar: formFields.avatar.trim(),
      }),
    );
    setSuccessMessage("Profile updated successfully.");
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

        <div className={styles.inputGroup}>
          <label>Avatar URL</label>
          <input
            type="text"
            name="avatar"
            value={formFields.avatar}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className={styles.submitBtn}>
          Save Profile
        </Button>
        {successMessage && (
          <p className={styles.successText}>{successMessage}</p>
        )}
      </form>
    </Card>
  );
};

export default ProfileForm;
