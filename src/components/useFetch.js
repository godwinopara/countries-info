import { useState, useEffect } from "react";
const axios = require("axios");

function useFetch(url) {
	const [allCountriesData, setallCountriesData] = useState(null);
	const [singleCountryDetails, setSingleCountryDetails] = useState(null);
	const [isPending, setisPending] = useState(true);

	useEffect(() => {
		Promise.all([countriesData(), countryDetails()]).then((result) => {
			setallCountriesData(result[0].data);
			setSingleCountryDetails(result[1].data);
			setisPending(false);
		});
	}, []);

	function countriesData() {
		return axios.get("https://restcountries.eu/rest/v2/all");
	}

	function countryDetails() {
		return axios.get("https://restcountries.eu/rest/v2/alpha/ALA");
	}

	return { allCountriesData, singleCountryDetails, isPending };
}

export default useFetch;
