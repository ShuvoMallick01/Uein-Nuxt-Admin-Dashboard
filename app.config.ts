export default defineAppConfig({
  shortDescription:
    "A modern, high-performance Nuxt 3 admin dashboard template with Tailwind CSS.",
  description:
    "Uno delivers exceptional performance, scalability, and customization options for modern admin dashboards. Easily adapt components to streamline your workflow.",

  theme: {
    // mode: "light",
    colors: {
      primary: "#ff0000",
    },
  },

  settings: {
    enableRTL: false, // Option to enable Right-to-Left (RTL) support
    enableTransitions: true, // Enable page transitions
  },
});
