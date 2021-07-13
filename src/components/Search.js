import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

function Search({
	value,
	dark,
	onChange,
	regions,
	handleChangeRegion,
	selected,
	show,
	handleSelect,
}) {
	// const [selected, setselected] = useState("Filter by Region..");
	// const [show, setShow] = useState(false);
	// const handleSelect = () => {
	// 	setShow(!show);
	// };
	// const handleClick = () => {
	// 	setselected("Africa");
	// 	setShow(!show);
	// };
	// const handleClickAmerica = () => {
	// 	setselected("Ameria");
	// 	setShow(!show);
	// };
	// const handleClickAsia = () => {
	// 	setselected("Asia");
	// 	setShow(!show);
	// };
	// const handleClickEurope = () => {
	// 	setselected("Europe");
	// 	setShow(!show);
	// };
	// const handleClickOceania = () => {
	// 	setselected("Oceania");
	// 	setShow(!show);
	// };

	return (
		<div className="search-wrapper">
			<div className="filter-countries">
				<input
					style={dark ? darkMode : lightMode}
					type="text"
					value={value}
					placeholder="Search for a country..."
					onChange={onChange}
				/>
			</div>
			<div className="search-by-region">
				<li style={dark ? darkMode : lightMode} className="selected" onClick={handleSelect}>
					{selected}
					<MdExpandMore className="icon" />
				</li>

				{show && (
					<ul style={dark ? darkMode : lightMode} className="drop-down">
						{regions.map((region) => {
							return <li onClick={handleChangeRegion}>{region}</li>;
						})}

						{/* <li onClick={handleClickAmerica}>America</li>
						<li onClick={handleClickAsia}>Asia</li>
						<li onClick={handleClickEurope}>Europe</li>
						<li onClick={handleClickOceania}>Oceania</li> */}
					</ul>
				)}
			</div>
		</div>
	);
}

export default Search;

const darkMode = {
	backgroundColor: "hsl(209, 23%, 22%)",
	color: "hsl(0, 0%, 100%)",
};

const lightMode = {
	backgroundColor: " hsl(0, 0%, 100%)",
	color: "hsl(200, 15%, 8%)",
	boxShadow: " -1px 2px 5px 0px rgba(191, 191, 191, 1)",
};
