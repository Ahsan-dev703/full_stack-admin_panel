export const CUSTOMER_STATUSES = [
  { value: "all", label: "All Statuses" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
];

export const CUSTOMER_ROLES = [
  { value: "all", label: "All Roles" },
  { value: "buyer", label: "Buyer" },
  { value: "seller", label: "Seller" },
  { value: "vip", label: "VIP" },
];

export const CUSTOMER_SORT_OPTIONS = [
  { value: "newest", label: "Newest Customers" },
  { value: "oldest", label: "Oldest Customers" },
  { value: "alphabetical", label: "Alphabetical" },
];

export const DUMMY_CUSTOMERS = [
  {
    id: "CUST-101",
    name: "Marcus Holloway",
    email: "marcus.h@example.com",
    phone: "+1 (555) 012-3456",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    orders: 24,
    totalSpent: 1240.5,
    status: "active",
    role: "buyer",
    joinDate: "2025-11-12",
  },
  {
    id: "CUST-102",
    name: "Elena Fisher",
    email: "elena.f@example.com",
    phone: "+1 (555) 987-6543",
    avatar: "https://i.pravatar.cc/150?u=elena",
    orders: 12,
    totalSpent: 850.0,
    status: "suspended",
    role: "seller",
    joinDate: "2026-01-20",
  },
  {
    id: "CUST-103",
    name: "Arthur Morgan",
    email: "arthur.m@example.com",
    phone: "+1 (555) 444-5555",
    avatar: "https://i.pravatar.cc/150?u=arthur",
    orders: 0,
    totalSpent: 0.0,
    status: "inactive",
    role: "vip",
    joinDate: "2026-04-15",
  },
];
