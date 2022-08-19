import "./structureOrganization.css";
import React from "react";
import { useState, useEffect } from "react";

import * as d3 from "d3";
import { Structure } from "./Structure";

export default function StructureOrganization() {
	const [data, setData] = useState(null);
	let addNodeChildFunc = null;

	useEffect(() => {
		d3.csv(
			"https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
		).then((data) => {
			setData(data);
		});
	}, []);

	return (
		<div className="orgChart">
			<Structure
				setClick={(click) => (addNodeChildFunc = click)}
				data={data}
			/>
		</div>
	);
}
