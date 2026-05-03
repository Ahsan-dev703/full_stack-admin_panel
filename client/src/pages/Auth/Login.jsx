import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBrand from "./LoginBrand";
import LoginForm from "./LoginForm";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (data) => {
    setLoading(true);
    console.log("Logging in with:", data);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  return (
    <div className={styles.authWrapper}>
      <LoginBrand />

      <div className={styles.formSide}>
        <div className={styles.formContainer}>
          <header className={styles.header}>
            <h2>Sign In</h2>
            <p>Enter your admin credentials to access the panel.</p>
          </header>

          <LoginForm onSubmit={handleLoginSubmit} loading={loading} />

          <footer className={styles.footer}>
            <p>
              New admin user? <Link to="/contact">Contact super-admin</Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
