import { MdCheckCircle } from "react-icons/md";
import Button from "@/components/UI/Button/Button";
import styles from "./Settings.module.css";

const SettingsFooter = ({ isSaving, showSuccess, onSave }) => (
  <div className={styles.footer}>
    <Button onClick={onSave} disabled={isSaving}>
      {isSaving ? "Saving..." : "Save Changes"}
    </Button>
    {showSuccess && (
      <span className={styles.successMsg}>
        <MdCheckCircle /> Settings updated successfully!
      </span>
    )}
  </div>
);

export default SettingsFooter;
