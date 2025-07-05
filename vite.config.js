import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect production (GitHub Pages) or development (localhost)
const base = process.env.NODE_ENV === "production" ? "/Portfolio-v2/" : "/";

export default defineConfig({
  plugins: [react()],
  base: base,
});
