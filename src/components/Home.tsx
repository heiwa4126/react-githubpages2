import { useState } from "react";

function CounterButton({ initialCount = 0 }: { initialCount?: number }) {
	const [count, setCount] = useState(initialCount);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

function Home() {
	return (
		<>
			<h1>GitHub Pages 1</h1>
			<p>SemVer 式の tag つけて push するごとに GitHub Pages としてデプロイするサンプル。</p>
			<div>
				<CounterButton /> <CounterButton initialCount={999} />
			</div>
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
