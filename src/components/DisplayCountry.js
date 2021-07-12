import React from "react";
import { Link } from "react-router-dom";

function DisplayCountry({ country }) {
	return (
		<div className="country-info-wrapper ">
			<Link to={`${country.alpha2Code}`}>
				<div
					className="country-img"
					style={{ backgroundImage: `url(${country.flag})` }}
				></div>
				<div className="country-info">
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
			</Link>
		</div>
	);
}

export default DisplayCountry;
