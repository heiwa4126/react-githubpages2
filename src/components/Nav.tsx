import { Link } from "react-router";

export function Nav() {
	return (
		<nav>
			<Link to="">Home</Link>
			<Link to="page1">Page 1</Link>
			<Link to="page2">Page 2</Link>
			<Link to="doesntexists">存在しないページ</Link>
		</nav>
	);
}

export default Nav;
