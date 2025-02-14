/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#2499EF",
        "primary-100": "#E5F3FD",
        "primary-200": "#C6E7FF",
        "primary-300": "#7EC9FF",
        "primary-400": "#45ABF6",
        "primary-500": "#2499EF",
        "primary-600": "#0E73BE",
        "primary-700": "#0B568E",
        "primary-800": "#094876",
        main: "#011E3D",

        // Theme Color
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        primary: {
          darker: "#0e73be",
          DEFAULT: "#2499ef",
          light: "#249aef31",
        },
        secondary: {
          darker: "#c1d2e5",
          DEFAULT: "#f1f6f9",
          light: "#f1f6f95b",
        },
        info: {
          darker: "#525b93",
          DEFAULT: "#585fdd",
          light: "rgba(140, 142, 255, 0.24)",
        },
        success: {
          darker: "#209e5f",
          DEFAULT: "#09ba70",
          light: "#09ba702c",
        },
        warning: {
          darker: "#d88619",
          DEFAULT: "#f49d1a",
          light: "rgba(255, 198, 117, 0.26)",
        },
        error: {
          darker: "#d62b64",
          DEFAULT: "#ff316f",
          light: "#ff316f33",
        },

        // More
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          light: "var(--muted-light)",
          darker: "var(--muted-darker)",
        },

        // border: "var(--border)",
        ring: "#2499EF",
        input: "var(--input)",
        hover: "var(--hover)",
        active: "var(--active)",
      },
    },
  },
  plugins: [],
};
