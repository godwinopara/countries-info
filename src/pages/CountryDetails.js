import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

function CountryDetails({ dark }) {
	const { id } = useParams();
	const { isPending, singleCountryDetails } = useFetch(
		"https://restcountries.eu/rest/v2/alpha/" + id
	);

	if (!isPending) {
		console.log(singleCountryDetails);
	}

	return (
		<div className={`country-details-container ${dark ? "dark-mode" : ""}`}>
			{!isPending && <SingleCountryInformation country={singleCountryDetails} />}
		</div>
	);
}

export default CountryDetails;

function SingleCountryInformation({ country }) {
	return (
		<div className="country-information-wrapper container">
			<div className="country-details-image">
				<img src={country.flag} alt="" />
			</div>
			<div className="country-information">
				<div className="country-information-content">
					<div className="left-side">
						<h2>{country.name}</h2>
						<ul>
							<li>
								<strong>Native Name: </strong>
								{country.nativeName}
							</li>
							<li>
								<strong>Population: </strong>
								{country.population.toLocaleString()}
							</li>
							<li>
								<strong>Region: </strong>
								{country.region}
							</li>
							<li>
								<strong>Sub Region: </strong>
								{country.subregion}
							</li>
							<li>
								<strong>Capital: </strong>
								{country.capital}
							</li>
						</ul>
					</div>
					<div className="right-side">
						<ul>
							<li>
								<strong>Top Level Domain: </strong>
								{country.topLevelDomain}
							</li>
							<li>
								<strong>Currencies: </strong>
								{country.currencies[0].name}
							</li>
							<li className="languages">
								<strong>Languages: </strong>
								{country.languages.map((language, index) => (
									<span key={index}>{language.name}</span>
								))}
							</li>
						</ul>
					</div>
				</div>
				<div className="borders">
					<li>
						<strong>Borders Countries: </strong>
						{country.borders.map((border, index) => (
							<span key={index}>{border}</span>
						))}
					</li>
				</div>
			</div>
		</div>
	);
}
