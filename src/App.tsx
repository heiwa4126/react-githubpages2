import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
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
