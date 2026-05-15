import styles from "./Loader.module.css";

const Loader = ({
  fullScreen = false,
  size = "medium",
  text = "Loading...",
}) => {
  const spinnerSizes = {
    small: 28,
    medium: 40,
    large: 56,
  };

  const spinnerSize = spinnerSizes[size] || spinnerSizes.medium;

  return (
    <div
      className={`${styles.container} ${fullScreen ? styles.fullScreen : ""}`}
    >
      <div
        className={styles.spinner}
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderWidth: Math.max(3, Math.round(spinnerSize / 12)),
        }}
      />
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
};

export default Loader;
