import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { authApiPlugin } from "./server/authPlugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), authApiPlugin()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk for React & React-Router for permanent browser caching
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "vendor-react";
          }
          if (id.includes("src/data/companies.js")) {
            return "data-companies";
          }
          if (id.includes("src/data/scholarships.js")) {
            return "data-scholarships";
          }
          if (id.includes("src/data/collegeCourses.js")) {
            return "data-college-courses";
          }
          if (id.includes("src/data/trackEngineeringData.js")) {
            return "data-engineering";
          }
        },
      },
    },
  },
});
