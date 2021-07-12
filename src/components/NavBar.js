import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

function NavBar({ dark, onClick }) {
	return (
		<header className={`nav-wrapper ${dark ? "header-dark" : ""}`}>
			<ul className="nav-elements container">
				<ul>
					<li className="nav-heading">Where in the world?</li>
				</ul>
				<ul className="background-mode-icon" onClick={onClick}>
					{dark ? <IoMoonOutline /> : <IoMoonSharp />}
					<li>{dark ? "Light Mode" : "Dark Mode"}</li>
				</ul>
			</ul>
		</header>
	);
}

export default NavBar;
