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

const LoginForm = ({ onSubmit, loading, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationError, setValidationError] = useState("");

  const validateForm = () => {
    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      setValidationError("Please fill in both email and password.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setValidationError("Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      setValidationError("Password must be at least 6 characters.");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setValidationError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Email Address"
        type="email"
        placeholder="admin@gmail.com"
        required
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <div className={styles.passwordArea}>
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
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

      {(validationError || error) && (
        <div className={styles.errorMessage}>{validationError || error}</div>
      )}

      <Button type="submit" disabled={loading} className={styles.submitBtn}>
        {loading ? "Authenticating..." : "Login to Dashboard"}
        {!loading && <MdArrowForward />}
      </Button>
    </form>
  );
};

export default LoginForm;
