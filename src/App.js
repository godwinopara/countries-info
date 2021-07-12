import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CountryDetails from "./pages/CountryDetails";

function App() {
	const [backgroundState, setbackgroundState] = useState(false);

	const handleClick = () => {
		setbackgroundState(!backgroundState);
	};
	return (
		<Router>
			<div>
				<NavBar dark={backgroundState} onClick={handleClick} />
				<Switch>
					<Route exact path="/">
						<Home darkMode={backgroundState} />
					</Route>
					<Route exact path="/:id">
						<CountryDetails dark={backgroundState} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
