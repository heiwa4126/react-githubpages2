import { NavLink } from "react-router";

export function Nav() {
	return (
		<nav>
			<NavLink to="">Home</NavLink>
			<NavLink to="page1">Page 1</NavLink>
			<NavLink to="page2">Page 2</NavLink>
			<NavLink to="notexists">存在しないページ</NavLink>
		</nav>
	);
}

export default Nav;
