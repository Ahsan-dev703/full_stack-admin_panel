import Select from "@/components/UI/Select/Select";
import Input from "@/components/UI/Input/Input";
import SearchBar from "@/components/Filters/SearchBar";
import FilterControls from "@/components/Filters/FilterControls";

const CustomerFilters = ({
  searchTerm,
  status,
  role,
  joinedDate,
  sortOption,
  statusOptions,
  roleOptions,
  sortOptions,
  onSearchChange,
  onStatusChange,
  onRoleChange,
  onJoinedDateChange,
  onSortChange,
  onClearFilters,
}) => (
  <FilterControls
    searchBar={
      <SearchBar
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search by name, email, or phone..."
      />
    }
    onClearFilters={onClearFilters}
  >
    <Select
      label="Status"
      options={statusOptions}
      value={status}
      onChange={(e) => onStatusChange(e.target.value)}
    />

    <Select
      label="Role"
      options={roleOptions}
      value={role}
      onChange={(e) => onRoleChange(e.target.value)}
    />

    <Input
      label="Joined After"
      type="date"
      value={joinedDate || ""}
      onChange={(e) => onJoinedDateChange(e.target.value)}
    />

    <Select
      label="Sort By"
      options={sortOptions}
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value)}
    />
  </FilterControls>
);

export default CustomerFilters;
