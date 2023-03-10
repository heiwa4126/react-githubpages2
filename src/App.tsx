import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React + TS</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>React の SPA を main ブランチ に push する毎に GitHub Pages としてデプロイするサンプル。</p>
      <p>
        参考: <a href="https://vitejs.dev/guide/static-deploy.html#github-pages">Deploying a Static Site | Vite</a>
      </p>
    </div>
  );
}

export default App;
