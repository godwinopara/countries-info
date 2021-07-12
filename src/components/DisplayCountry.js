import React from "react";

function DisplayCountry({ country }) {
	return (
		<div className="country-info-wrapper">
			<div className="country-info">
				<div
					className="country-img"
					style={{ backgroundImage: `url(${country.flag})` }}
				></div>
				<h2>{country.name}</h2>
				<ul>
					<li>
						<strong>Population: </strong> {country.population.toLocaleString()}
					</li>
					<li>
						<strong>Region: </strong>
						{country.region}
					</li>
					<li>
						<strong>Capital: </strong>
						{country.capital}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default DisplayCountry;
