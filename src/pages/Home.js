import React, { useState, useEffect } from "react";
import useFetch from "../components/useFetch";
import DisplayCountry from "../components/DisplayCountry";

function Home() {
	const { allCountriesData, isPending } = useFetch();
	console.log(allCountriesData);

	return (
		<div className="home-container">
			<h1>Home</h1>
			<div className="countries-container container">
				{!isPending &&
					allCountriesData.map((country, index) => (
						<DisplayCountry key={index} country={country} />
					))}
			</div>
		</div>
	);
}

export default Home;
