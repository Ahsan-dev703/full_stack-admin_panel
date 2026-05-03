export const ORDER_STATUSES = [
  { value: "all", label: "All Statuses" },
  { value: "pending", label: "Pending", color: "var(--warning)" },
  { value: "processing", label: "Processing", color: "var(--info)" },
  { value: "shipped", label: "Shipped", color: "var(--primary)" },
  { value: "delivered", label: "Delivered", color: "var(--success)" },
  { value: "cancelled", label: "Cancelled", color: "var(--danger)" },
];

export const DUMMY_ORDERS = [
  {
    id: "ORD-8821",
    customer: { name: "Sarah Connor", email: "sarah.c@example.com" },
    items: 3,
    total: 450.0,
    paymentStatus: "paid",
    orderStatus: "delivered",
    date: "2026-04-28T14:30:00Z",
  },
  {
    id: "ORD-8822",
    customer: { name: "John Doe", email: "j.doe@example.com" },
    items: 1,
    total: 89.99,
    paymentStatus: "pending",
    orderStatus: "processing",
    date: "2026-05-01T09:15:00Z",
  },
];
