const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        border: "var(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          dark: "#0e73be",
          DEFAULT: "#2499ef",
          light: "#249aef31",
        },
        secondary: {
          dark: "#c1d2e5",
          DEFAULT: "#f1f6f9",
          light: "#f1f6f95b",
        },
        info: {
          dark: "#525b93",
          DEFAULT: "#585fdd",
          light: "rgba(140, 142, 255, 0.24)",
        },
        success: {
          dark: "#209e5f",
          DEFAULT: "#09ba70",
          light: "#09ba702c",
        },
        warning: {
          dark: "#d88619",
          DEFAULT: "#f49d1a",
          light: "rgba(255, 198, 117, 0.26)",
        },
        error: {
          dark: "#d62b64",
          DEFAULT: "#ff316f",
          light: "#ff316f33",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
