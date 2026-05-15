import Select from "@/components/UI/Select/Select";
import Input from "@/components/UI/Input/Input";
import SearchBar from "@/components/Filters/SearchBar";
import FilterControls from "@/components/Filters/FilterControls";

const OrderFilters = ({
  searchTerm,
  filterStatus,
  paymentMethod,
  selectedDate,
  sortOption,
  statuses,
  paymentMethods,
  sortOptions,
  onSearchChange,
  onStatusChange,
  onPaymentMethodChange,
  onDateChange,
  onSortChange,
  onClearFilters,
}) => (
  <FilterControls
    searchBar={
      <SearchBar
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search by order ID, customer, email, or status..."
      />
    }
    onClearFilters={onClearFilters}
  >
    <Select
      label="Status"
      options={statuses}
      value={filterStatus}
      onChange={(e) => onStatusChange(e.target.value)}
    />

    <Select
      label="Payment"
      options={paymentMethods}
      value={paymentMethod}
      onChange={(e) => onPaymentMethodChange(e.target.value)}
    />

    <Input
      label="Date"
      type="date"
      value={selectedDate || ""}
      onChange={(e) => onDateChange(e.target.value)}
    />

    <Select
      label="Sort By"
      options={sortOptions}
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value)}
    />
  </FilterControls>
);

export default OrderFilters;
