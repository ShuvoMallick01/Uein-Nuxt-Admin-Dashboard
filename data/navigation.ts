export const navigation = [
  {
    id: 1,
    menu: [
      {
        label: "Dashboard",
        route: "/",
        icon: "cuida:dashboard-outline",
        children: [
          { label: "Course", route: "/course" },
          { label: "Analytics", route: "/analytics" },
          { label: "Finance", route: "/finance" },
          { label: "Career", route: "/career" },
          { label: "Sales", route: "/sales" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Management",
    menu: [
      {
        label: "Users",
        route: "/users",
        icon: "cuida:users-outline",
        children: [
          { label: "List", route: "/users" },
          { label: "Edit", route: "/users/2" },
          { label: "Create", route: "/users/create" },
          { label: "Profile", route: "/users/user-profile" },
        ],
      },
      {
        label: "Products",
        route: "/products",
        icon: "cuida:box-outline",
        children: [
          { label: "List", route: "/products" },
          { label: "Edit", route: "/products/1" },
          { label: "Create", route: "/products/create" },
          { label: "Details", route: "/products/1/overview" },
        ],
      },
      {
        label: "Orders",
        route: "/orders",
        icon: "solar:cart-4-outline",
        children: [
          { label: "List", route: "/orders" },
          { label: "Details", route: "/orders/1" },
        ],
      },
      {
        label: "Invoices",
        route: "/invoices",
        icon: "nimbus:invoice",
        children: [
          { label: "List", route: "/invoices" },
          { label: "Edit", route: "/invoices/INV-002" },
          { label: "Create", route: "/invoices/create" },
          { label: "Details", route: "/invoices/INV-002/details" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Others",
    menu: [
      {
        label: "Account Settings",
        route: "/settings",
        icon: "mdi:account-cog-outline",
        children: [
          { label: "Profile Info", route: "/settings" },
          { label: "Security", route: "/settings/security" },
          { label: "Plan & Billing", route: "/settings/plan-billing" },
          {
            label: "Two Factor Authentication",
            route: "/settings/two-factor-authentication",
          },
          { label: "Notification", route: "/settings/notification" },
          {
            label: "Social Media Links",
            route: "/settings/social-media-links",
          },
          {
            label: "Account Deactivation",
            route: "/settings/account-deactivation",
          },
        ],
      },
      {
        label: "Authentication",
        route: "/sessions",
        icon: "material-symbols:fingerprint",
        children: [
          { label: "Login", route: "/login" },
          { label: "Register", route: "/register" },
          { label: "Forget Password", route: "/forget-password" },
          { label: "Verify Email", route: "/verification" },
          { label: "Not Found", route: "/avscsf" },
          { label: "Server Error", route: "/server-error" },
          { label: "Maintenance", route: "/maintenance" },
        ],
      },
      {
        label: "Support",
        route: "/support",
        icon: "ri:headphone-line",
        children: [
          { label: "Overview", route: "/support" },
          { label: "Tickets", route: "/support/tickets" },
          { label: "Create Ticket", route: "/support/create-ticket" },
          { label: "FAQs", route: "/support/faqs" },
          { label: "Contact", route: "/support/contact" },
        ],
      },
    ],
  },
];
