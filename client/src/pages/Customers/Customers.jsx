import { useState } from "react";
import Modal from "@/components/UI/Modal/Modal";
import CustomerHeader from "./CustomerHeader";
import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";
import CustomerProfile from "./CustomerProfile";

import { DUMMY_CUSTOMERS, CUSTOMER_STATUSES } from "@/constants/customers";
import styles from "./Customers.module.css";

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // You can implement filtering logic here based on searchTerm
  const filteredCustomers = DUMMY_CUSTOMERS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <CustomerHeader
        onAddCustomer={() => console.log("Add Customer Clicked")}
      />

      <CustomerFilters
        onSearchChange={setSearchTerm}
        statusOptions={CUSTOMER_STATUSES}
      />

      <CustomerTable
        customers={filteredCustomers}
        onSelectCustomer={setSelectedCustomer}
      />

      <Modal
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title="Customer Profile"
      >
        <CustomerProfile customer={selectedCustomer} />
      </Modal>
    </div>
  );
};

export default Customers;
