import DisplayCountry from "../components/DisplayCountry";
import Search from "../components/Search";
import { useState, useEffect } from "react";
const axios = require("axios");

function Home({ darkMode }) {
	const [userInput, setuserInput] = useState("");
	const [countries, setcountries] = useState([]);
	const [pending, setpending] = useState(true);
	const [selectedRegion, setSelectedRegion] = useState("Filter by Region.");
	const [show, setshow] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			const filterCountries = async () => {
				const data = await axios.get("https://restcountries.eu/rest/v2/all");
				const countriesData = await data.data;
				const filteredCountries = countriesData.filter((country) => {
					return country.name.includes(
						userInput.charAt(0).toUpperCase() + userInput.slice(1)
					);
				});
				setcountries(filteredCountries);
				setpending(false);
			};
			filterCountries();
		}, 1500);
	}, [userInput]);

	useEffect(() => {
		const searchByregion = async () => {
			const data = await axios.get("https://restcountries.eu/rest/v2/all");
			const countriesData = await data.data;
			const filteredByRegionCountry = countriesData.filter((country) => {
				return country.region === selectedRegion;
			});

			if (selectedRegion !== "Filter by Region.") {
				setcountries(filteredByRegionCountry);
			}
		};
		searchByregion();
	}, [selectedRegion]);

	const handleChange = (e) => {
		setuserInput(e.target.value);
	};

	const handleChangeRegion = (e) => {
		setshow(!show);
		setSelectedRegion(e.target.textContent);
	};

	const handleShowSelect = () => {
		setshow(!show);
	};

	return (
		<div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
			<div className="search container">
				<Search
					dark={darkMode}
					value={userInput}
					onChange={handleChange}
					selected={selectedRegion}
					regions={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
					handleChangeRegion={handleChangeRegion}
					show={show}
					handleSelect={handleShowSelect}
				/>
			</div>
			<div className="countries-container container">
				{pending && (
					<div className="loader">
						<div class={`lds-facebook ${darkMode ? "loader-dark-mode" : ""}`}>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				)}
				{!pending &&
					countries.map((country, index) => (
						<DisplayCountry key={index} country={country} />
					))}
			</div>
		</div>
	);
}

export default Home;
