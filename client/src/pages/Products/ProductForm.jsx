import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import Select from "@/components/UI/Select/Select";
import styles from "./Products.module.css";

const ProductForm = ({ categories, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <Input label="Product Name" placeholder="e.g. Wireless Mouse" />
    <div className={styles.formRow}>
      <Input label="Price" type="number" placeholder="0.00" />
      <Input label="Stock" type="number" placeholder="0" />
    </div>
    <Select label="Category" options={categories} />
    <Button type="submit" style={{ width: "100%", marginTop: "1rem" }}>
      Save Product
    </Button>
  </form>
);

export default ProductForm;
