import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions & Selectors
import {
  setSearchTerm,
  setCategory,
  clearFilters,
} from "@/store/features/products/productsSlice";
import {
  selectFilteredProducts,
  selectFilters,
} from "@/store/features/products/productsSelectors";
import { fetchProducts } from "@/store/features/products/productsThunks";

// UI Components
import Modal from "@/components/UI/Modal/Modal";
import EmptyState from "@/components/UI/EmptyState/EmptyState";
import ProductTable from "./ProductTable";

// Refactored Sub-components
import ProductHeader from "@/pages/Products/ProductHeader";
import ProductFilters from "@/pages/Products/ProductFilters";
import ProductForm from "@/pages/Products/ProductForm";

// Constants
import { PRODUCT_CATEGORIES } from "@/constants/products";
import styles from "./Products.module.css";
import Loader from "@/components/UI/Loader/Loader";

const Products = () => {
  const dispatch = useDispatch();

  const filteredProducts = useSelector(selectFilteredProducts) || [];
  const { searchTerm, category } = useSelector(selectFilters) || {
    searchTerm: "",
    category: "all",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <ProductHeader onAddClick={() => setIsModalOpen(true)} />

      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={(val) => dispatch(setSearchTerm(val))}
        category={category}
        onCategoryChange={(val) => dispatch(setCategory(val))}
        categories={PRODUCT_CATEGORIES}
      />

      {filteredProducts.length > 0 ? (
        <ProductTable products={filteredProducts} />
      ) : (
        <EmptyState
          title="No products found"
          message="Try adjusting your search or filters to find what you're looking for."
          actionLabel="Clear Filters"
          onAction={() => dispatch(clearFilters())}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Product"
      >
        <ProductForm
          categories={PRODUCT_CATEGORIES}
          onSubmit={(e) => {
            e.preventDefault();
            // Future: dispatch(addProduct(formData))
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Products;
