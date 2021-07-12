import useFetch from "../components/useFetch";
import DisplayCountry from "../components/DisplayCountry";

function Home({ darkMode }) {
	const { allCountriesData, isPending } = useFetch("https://restcountries.eu/rest/v2/alpha/ALA");

	return (
		<div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
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
