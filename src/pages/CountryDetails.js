import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import CountryBorders from "../components/CountryBorders";
import { IoMdArrowBack } from "react-icons/io";

function CountryDetails({ dark }) {
	const { id } = useParams();

	const { isPending, singleCountryDetails } = useFetch(
		"https://restcountries.eu/rest/v2/alpha/" + id
	);

	return (
		<div className={`country-details-container ${dark ? "dark-mode" : ""}`}>
			<div className="back-home-btn container">
				<div className="icon">
					<IoMdArrowBack />
				</div>
				<Link to="/">
					<input
						type="button"
						value="Back"
						style={
							dark
								? {
										backgroundColor: "hsl(209, 23%, 22%)",
										color: "hsl(0, 0%, 100%)",
								  }
								: {
										backgroundColor: "hsl(0, 0%, 100%)",
										color: "hsl(200, 15%, 8%)",
										boxShadow: " -1px 2px 5px 0px rgba(191, 191, 191, 1)",
								  }
						}
					/>
				</Link>
			</div>
			{!isPending && (
				<SingleCountryInformation
					country={singleCountryDetails}
					borders={singleCountryDetails.borders}
					dark={dark}
				/>
			)}
		</div>
	);
}

export default CountryDetails;

function SingleCountryInformation({ country, borders, dark }) {
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
					<CountryBorders borders={borders} dark={dark} />
				</div>
			</div>
		</div>
	);
}
