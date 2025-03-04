import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/VIKRAM9281/Get_Location.git", // Change this to match your GitHub repository name
  build: {
    outDir: "docs", // GitHub Pages serves files from the `docs` folder
  },
});
