import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Get_Location/", // Change this to match your GitHub repository name
  build: {
    outDir: "docs", // GitHub Pages serves files from the `docs` folder
  },
});
