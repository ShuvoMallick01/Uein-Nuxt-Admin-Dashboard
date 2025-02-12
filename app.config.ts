export default defineAppConfig({
  siteName: "Uno - Nuxt 3 Admin Dashboard",
  shortDescription:
    "A modern, high-performance Nuxt 3 admin dashboard template with Tailwind CSS.",
  description:
    "Uno delivers exceptional performance, scalability, and customization options for modern admin dashboards. Easily adapt components to streamline your workflow.",

  theme: {
    darkMode: true,
    colors: {
      primary: "#ff0000", // Adjust the primary color to fit branding needs
    },
  },

  layout: {
    sidebar: true,
    navbar: true,
    footer: true,
  },

  settings: {
    enableRTL: false, // Option to enable Right-to-Left (RTL) support
    enableTransitions: true, // Enable page transitions
  },
});
