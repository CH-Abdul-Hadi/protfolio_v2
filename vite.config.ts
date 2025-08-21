import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // ✅ fixes asset path issues
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@src2": path.resolve(__dirname, "./src2"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@components2": path.resolve(__dirname, "./src2/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@lib2": path.resolve(__dirname, "./src2/lib"),
      "@/store": path.resolve(__dirname, "./src2/store"),
      "src2": path.resolve(__dirname, "./src2"),
      "@/lib": path.resolve(__dirname, "./src2/lib"),
    },
  },
  define: {
    // ✅ Optional: safe fallbacks (only if you want defaults)
    "import.meta.env.VITE_OG_IMAGE_URL": JSON.stringify(
      process.env.VITE_OG_IMAGE_URL || "https://lovable.dev/opengraph-image-p98pqg.png"
    ),
    "import.meta.env.VITE_TWITTER_HANDLE": JSON.stringify(
      process.env.VITE_TWITTER_HANDLE || "@lovable_dev"
    ),
  },
}));
