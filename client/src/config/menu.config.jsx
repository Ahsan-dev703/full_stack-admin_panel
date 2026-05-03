import {
  MdDashboard,
  MdInventory,
  MdShoppingCart,
  MdPeople,
  MdAnalytics,
  MdSettings,
} from "react-icons/md";
import { ROUTES } from "@/constants/routes";

export const SIDEBAR_MENU_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: ROUTES.PRIVATE.DASHBOARD,
    icon: <MdDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: ROUTES.PRIVATE.PRODUCTS,
    icon: <MdInventory />,
    children: [
      {
        label: "All Products",
        path: `${ROUTES.PRIVATE.PRODUCTS}/${ROUTES.PRIVATE.PRODUCTS_ALL}`,
      },
      {
        label: "Categories",
        path: `${ROUTES.PRIVATE.PRODUCTS}/${ROUTES.PRIVATE.PRODUCTS_CATEGORIES}`,
      },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    path: ROUTES.PRIVATE.ORDERS,
    icon: <MdShoppingCart />,
  },
  {
    id: "customers",
    label: "Customers",
    path: ROUTES.PRIVATE.CUSTOMERS,
    icon: <MdPeople />,
  },
  {
    id: "analytics",
    label: "Analytics",
    path: ROUTES.PRIVATE.ANALYTICS,
    icon: <MdAnalytics />,
  },
  {
    id: "settings",
    label: "Settings",
    path: ROUTES.PRIVATE.SETTINGS,
    icon: <MdSettings />,
  },
  {
    id: "profile",
    label: "Profile",
    path: ROUTES.PRIVATE.PROFILE,
    icon: <MdSettings />,
  },
];
