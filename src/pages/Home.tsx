import CounterButton from "../components/CounterButton";

function Home() {
	return (
		<>
			<h1>GitHub Pages 2</h1>
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
