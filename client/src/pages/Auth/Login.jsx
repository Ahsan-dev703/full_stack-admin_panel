import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginBrand from "./LoginBrand";
import LoginForm from "./LoginForm";
import { loginUser } from "@/store/features/auth/authThunks";
import { selectIsAuthenticated } from "@/store/features/auth/authSelectors";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLoginSubmit = (data) => {
    dispatch(loginUser(data));
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

          <LoginForm
            onSubmit={handleLoginSubmit}
            loading={loading}
            error={error}
          />

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
