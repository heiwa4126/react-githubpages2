import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: process.env.GITHUB_REPO_NAME ?? "./",
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ["react", "react-dom/client", "react-router"],
		},
	},
	esbuild: {
		drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
	},
});
