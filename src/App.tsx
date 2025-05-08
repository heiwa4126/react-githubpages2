import React from "react";
import { Link, Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
const Page2 = React.lazy(() => import("./pages/Page2")); // page2だけlazy loadingのテスト

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="page1" element={<Page1 />} />
					<Route
						path="page2"
						element={
							<React.Suspense fallback={<div>Loading...</div>}>
								<Page2 />
							</React.Suspense>
						}
					/>
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}

function NoMatch() {
	return (
		<>
			<h1>Not found</h1>
			<p>
				<Link to="/">home</Link>
			</p>
		</>
	);
}

export default App;
