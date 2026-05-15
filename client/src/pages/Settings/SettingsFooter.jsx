import { MdCheckCircle } from "react-icons/md";
import Button from "@/components/UI/Button/Button";
import styles from "./Settings.module.css";

const SettingsFooter = ({ isSaving, showSuccess, onSave, onReset }) => (
  <div className={styles.footer}>
    <div className={styles.footerActions}>
      <Button onClick={onReset} variant="secondary" size="sm">
        Reset
      </Button>
      <Button onClick={onSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
    {showSuccess && (
      <span className={styles.successMsg}>
        <MdCheckCircle /> Settings updated successfully!
      </span>
    )}
  </div>
);

export default SettingsFooter;
