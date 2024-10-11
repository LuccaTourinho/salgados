import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "7rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        dancingScript: "var(--font-dancing-script)",
        greatVibes: "var(--font-great-vibes)",
        lobster: "var(--font-lobster)",
        pacifico: "var(--font-pacifico)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
