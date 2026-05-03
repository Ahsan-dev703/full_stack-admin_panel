import { MdInbox } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./EmptyState.module.css";

const EmptyState = ({
  icon = <MdInbox />,
  title = "No data found",
  message = "Try adjusting your filters or adding a new record.",
  actionLabel,
  onAction,
}) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="secondary" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
