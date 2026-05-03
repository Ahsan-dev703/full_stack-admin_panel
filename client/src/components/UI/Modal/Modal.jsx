import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <MdClose />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.getElementById("root"),
  );
};

export default Modal;
