import { type ConfigEnv, type UserConfig, defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
	const cfg: UserConfig = {
		// plugins: [
		// 	react(),
		// 	html({
		// 		cdn: {
		// 			modules: ["react", "react-dom"],
		// 		},
		// 	}),
		// ],
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						r: ["react-router", "react", "react-dom"],
					},
				},
			},
		},
	};

	if (command === "build") {
		// when `vite build`
		cfg.esbuild = {
			drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
		};
	}

	return cfg;
});
