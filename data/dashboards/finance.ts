import { formatK } from "~/utils/currency";

export const widgets = [
  {
    id: 1,
    title: "Total Sales",
    amount: formatK(59600),
    icon: "icon-park-outline:sales-report",
    color: "primary",
    percent: 8.72,
  },
  {
    id: 4,
    title: "Total Balance",
    amount: formatK(5600),
    icon: "hugeicons:cloud-saving-done-02",
    color: "success",
    percent: 7.36,
  },
  {
    id: 2,
    title: "Total Expenses",
    amount: formatK(240300),
    icon: "solar:wallet-broken",
    color: "error",
    percent: 5.62,
  },
  {
    id: 3,
    title: "Investments",
    amount: formatK(48700),
    icon: "streamline:investment-selection",
    color: "info",
    percent: 2.53,
  },
];

export const recentTransactions = [
  {
    id: 1,
    amount: 1400,
    status: "Credit",
    description: "Commissions",
    createdAt: "Wed Apr 24 2024",
    user: {
      name: "Andrew Smith",
      image: "/images/users/06.png",
      email: "andrew.smith@example.com",
    },
  },
  {
    id: 3,
    amount: 324,
    status: "Debit",
    description: "Grocery",
    createdAt: "Sat Apr 20 2024",
    user: {
      name: "Vanessa Davis",
      image: "/images/users/07.png",
      email: "vanessa.davis@example.com",
    },
  },
  {
    id: 4,
    amount: 750,
    status: "Debit",
    description: "Bill Payments",
    createdAt: "Thu Apr 18 2024",
    user: {
      name: "Judith Fritsche",
      image: "/images/users/05.png",
      email: "judith.fritsche@example.com",
    },
  },
  {
    id: 2,
    amount: 200,
    status: "Credit",
    description: "Affiliates",
    createdAt: "Thu Dec 06 2024",
    user: {
      name: "Candice F. Gilmore",
      image: "/images/users/03.png",
      email: "candice.gilmore@example.com",
    },
  },
];
