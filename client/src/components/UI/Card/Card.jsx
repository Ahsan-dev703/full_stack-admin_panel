import styles from "./Card.module.css";

const Card = ({ title, extra, children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {(title || extra) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {extra && <div className={styles.extra}>{extra}</div>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;
