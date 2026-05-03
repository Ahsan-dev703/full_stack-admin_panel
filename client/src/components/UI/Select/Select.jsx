import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./Select.module.css";

const Select = ({ label, options = [], error, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <select
          className={`${styles.select} ${error ? styles.selectError : ""}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <MdKeyboardArrowDown className={styles.icon} />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Select;
