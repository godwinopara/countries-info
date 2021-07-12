import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<h1>App</h1>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/:name">
						<CountryDetails />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
