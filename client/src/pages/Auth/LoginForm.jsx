import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdArrowForward,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from "react-icons/md";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import styles from "./Login.module.css";

const LoginForm = ({ onSubmit, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Email Address"
        type="email"
        placeholder="admin@modernstore.com"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className={styles.passwordArea}>
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button
          type="button"
          className={styles.eyeBtn}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
        </button>
      </div>

      <div className={styles.formUtils}>
        <label className={styles.checkbox}>
          <input type="checkbox" /> <span>Keep me logged in</span>
        </label>
        <Link to="/forgot-password" className={styles.link}>
          Forgot password?
        </Link>
      </div>

      <Button type="submit" disabled={loading} className={styles.submitBtn}>
        {loading ? "Authenticating..." : "Login to Dashboard"}
        {!loading && <MdArrowForward />}
      </Button>
    </form>
  );
};

export default LoginForm;
