import React, { useState, useEffect } from "react";
const axios = require("axios");

function CountryBorders({ borders, dark }) {
	const [countriesBorders, setcountriesBorders] = useState(null);
	const [pending, setPending] = useState(true);
	useEffect(() => {
		const getBorders = async () => {
			const data = await axios.get("https://restcountries.eu/rest/v2/all");
			const countries = await data.data;
			const filterCountry = countries.filter((country) => {
				// return borders.includes(country.alpha3Code) ? country.name : null;
				return borders.includes(country.alpha3Code);
			});
			const borderCountry = filterCountry.map((country) => country.name);
			setcountriesBorders(borderCountry);
			setPending(false);
		};
		getBorders();
	}, [borders]);
	return (
		<div className="border-countries-container">
			<div className="title">
				<strong>Border Countries: </strong>
			</div>
			{!pending && (
				<ul className="country-borders">
					{countriesBorders.map((country) => (
						<span style={dark ? darkMode : lightMode}>{country}</span>
					))}
				</ul>
			)}
		</div>
	);
}

export default CountryBorders;

const darkMode = {
	backgroundColor: "hsl(209, 23%, 22%)",
};
const lightMode = {
	backgroundColor: "hsl(0, 0%, 100%)",
	border: "1px solid hsl(200, 15%, 8%)",
};
