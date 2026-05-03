import { MdEdit, MdDelete, MdMoreVert, MdVisibility } from "react-icons/md";
import Badge from "@/components/UI/Badge/Badge";
import styles from "./Products.module.css";

const ProductTable = ({ products }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.productCell}>
                  <img
                    src={product.image}
                    alt=""
                    className={styles.productImg}
                  />
                  <div>
                    <div className={styles.productName}>{product.name}</div>
                    <div className={styles.productId}>{product.id}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className={styles.categoryTag}>{product.category}</span>
              </td>
              <td>
                <strong>${product.price.toFixed(2)}</strong>
              </td>
              <td>
                <div className={styles.stockInfo}>
                  <div className={styles.stockBar}>
                    <div
                      className={styles.stockProgress}
                      style={{
                        width: `${Math.min(product.stock, 100)}%`,
                        backgroundColor:
                          product.stock < 10
                            ? "var(--danger)"
                            : "var(--success)",
                      }}
                    />
                  </div>
                  <span>{product.stock} units</span>
                </div>
              </td>
              <td>
                <Badge status={product.stock > 0 ? "success" : "danger"}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
              </td>
              <td style={{ textAlign: "right" }}>
                <div className={styles.actionGroup}>
                  <button className={styles.iconBtn} title="View">
                    <MdVisibility />
                  </button>
                  <button className={styles.iconBtn} title="Edit">
                    <MdEdit />
                  </button>
                  <button className={styles.iconBtn} title="Delete">
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
