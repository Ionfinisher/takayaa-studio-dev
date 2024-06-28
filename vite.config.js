import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/takayaa-studio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4284803558.
      "~": path.resolve(__dirname, "./"),
    },
  },
})
