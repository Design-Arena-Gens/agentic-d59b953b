import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"]
      },
      colors: {
        acid: "#dfff00",
        ink: "#050505",
        bubble: "#ff71ef",
        plasma: "#00f5d4",
        blaze: "#ff5400",
        slate: "#0f172a"
      },
      backgroundImage: {
        noise: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22%23050505%22/%3E%3Cpath fill=%22%23080808%22 d=%22M0 0h2v2H0zM4 0h2v2H4zM8 0h2v2H8zM12 0h2v2h-2zM16 0h2v2h-2zM20 0h2v2h-2zM24 0h2v2h-2zM28 0h2v2h-2zM32 0h2v2h-2zM36 0h2v2h-2zM0 4h2v2H0zM4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM16 4h2v2h-2zM20 4h2v2h-2zM24 4h2v2h-2zM28 4h2v2h-2zM32 4h2v2h-2zM36 4h2v2h-2z%22/%3E%3C/svg%3E')"
      },
      boxShadow: {
        neon: "0 0 30px rgba(255, 113, 239, 0.45)",
        acid: "0 0 35px rgba(223, 255, 0, 0.45)",
        plasma: "0 0 35px rgba(0, 245, 212, 0.45)"
      },
      animation: {
        "slow-spin": "spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-wide": "pulse-wide 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(6px)" }
        },
        "pulse-wide": {
          "0%, 100%": { transform: "scaleX(1)", opacity: "0.95" },
          "50%": { transform: "scaleX(1.06)", opacity: "0.75" }
        }
      }
    }
  },
  plugins: []
};

export default config;
