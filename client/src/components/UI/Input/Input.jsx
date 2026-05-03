import styles from "./Input.module.css";

const Input = ({ label, error, ...props }) => (
  <div className={styles.container}>
    {label && <label className={styles.label}>{label}</label>}
    <input
      className={`${styles.input} ${error ? styles.inputError : ""}`}
      {...props}
    />
    {error && <span className={styles.errorText}>{error}</span>}
  </div>
);

export default Input;
