import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const handleLogout=() => {
		actions.logout()
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary me-2">login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">signup</button>
					</Link>
					<button className="btn btn-primary me-2"onClick={handleLogout}>logout</button>
				</div>
			</div>
		</nav>
	);
};
