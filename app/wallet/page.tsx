import React from "react";
import Title from "../components/Title";
import Exchange from "./Exchange";
import Market from "./Market";
import Table from "./Table";

function Wallet() {
	return (
		<div className="m-2 lg:flex lg:flex-row-reverse lg:justify-evenly lg:pl-1 lg:mt-0">
			<div className="w-full lg:flex lg:flex-col lg:items-center lg:w-11/12">
				<Title value="Exchange" className="lg:w-11/12" />
				<Exchange />
				<div className="border-t mt-2 w-full lg:w-11/12"></div>
				<Market />
			</div>
			<div className="w-full lg:flex lg:flex-col lg:items-center">
				<Title value="Wallet" />
				<Table />
			</div>
		</div>
	);
}

export default Wallet;
