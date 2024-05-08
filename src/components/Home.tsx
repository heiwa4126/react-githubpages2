import { useState } from "react";

function Home() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>GitHub Pages 1</h1>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>
				React の SPA を gh-pages ブランチ に push する毎に GitHub Pages
				としてデプロイするサンプル。
			</p>
			<p>
				参考:{" "}
				<a href="https://vitejs.dev/guide/static-deploy.html#github-pages">
					Deploying a Static Site | Vite
				</a>
			</p>
		</>
	);
}

export default Home;
