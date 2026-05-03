import { MdAdd } from "react-icons/md";
import Button from "@/components/UI/Button/Button";
import styles from "./Products.module.css";

const ProductHeader = ({ onAddClick }) => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>Products</h1>
      <p className={styles.subtitle}>
        Manage your inventory and product listings.
      </p>
    </div>
    <Button onClick={onAddClick}>
      <MdAdd /> Add Product
    </Button>
  </header>
);

export default ProductHeader;
