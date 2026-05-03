import { useState } from "react";
import Modal from "@/components/UI/Modal/Modal";
import EmptyState from "@/components/UI/EmptyState/EmptyState";
import ProductTable from "./ProductTable";

// Refactored Sub-components
import ProductHeader from "@/pages/Products/ProductHeader";
import ProductFilters from "@/pages/Products/ProductFilters";
import ProductForm from "@/pages/Products/ProductForm";

import { DUMMY_PRODUCTS, PRODUCT_CATEGORIES } from "@/constants/products";
import styles from "./Products.module.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategory("all");
  };

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <ProductHeader onAddClick={() => setIsModalOpen(true)} />

      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        category={category}
        onCategoryChange={setCategory}
        categories={PRODUCT_CATEGORIES}
      />

      {filteredProducts.length > 0 ? (
        <ProductTable products={filteredProducts} />
      ) : (
        <EmptyState
          title="No products found"
          message="Try adjusting your search or filters to find what you're looking for."
          actionLabel="Clear Filters"
          onAction={handleClearFilters}
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
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Products;
