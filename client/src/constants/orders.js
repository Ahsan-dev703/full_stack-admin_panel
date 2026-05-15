export const ORDER_STATUSES = [
  { value: "all", label: "All Statuses" },
  { value: "pending", label: "Pending", color: "var(--warning)" },
  { value: "processing", label: "Processing", color: "var(--info)" },
  { value: "shipped", label: "Shipped", color: "var(--primary)" },
  { value: "delivered", label: "Delivered", color: "var(--success)" },
  { value: "cancelled", label: "Cancelled", color: "var(--danger)" },
];

export const PAYMENT_METHODS = [
  { value: "all", label: "All Payment Methods" },
  { value: "credit_card", label: "Credit Card" },
  { value: "paypal", label: "PayPal" },
  { value: "bank_transfer", label: "Bank Transfer" },
];

export const ORDER_SORT_OPTIONS = [
  { value: "latest", label: "Latest Orders" },
  { value: "oldest", label: "Oldest Orders" },
  { value: "highest", label: "Highest Amount" },
  { value: "lowest", label: "Lowest Amount" },
];

export const DUMMY_ORDERS = [
  {
    id: "ORD-8821",
    customer: { name: "Sarah Connor", email: "sarah.c@example.com" },
    items: 3,
    total: 450.0,
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    orderStatus: "delivered",
    date: "2026-04-28T14:30:00Z",
  },
  {
    id: "ORD-8822",
    customer: { name: "John Doe", email: "j.doe@example.com" },
    items: 1,
    total: 89.99,
    paymentMethod: "paypal",
    paymentStatus: "pending",
    orderStatus: "processing",
    date: "2026-05-01T09:15:00Z",
  },
  {
    id: "ORD-8823",
    customer: { name: "Ava Cole", email: "ava.cole@example.com" },
    items: 5,
    total: 185.5,
    paymentMethod: "bank_transfer",
    paymentStatus: "paid",
    orderStatus: "pending",
    date: "2026-05-03T16:40:00Z",
  },
];
