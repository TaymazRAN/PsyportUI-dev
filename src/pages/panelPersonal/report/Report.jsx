import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./report.css";
import { Button } from "@mui/material";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

export default function Report() {
	const radarData = [
		{
			subject: "توجه",
			point: "10",
			fullMark: 10,
		},
		{
			subject: "دقت",
			point: "8",
			fullMark: 10,
		},
		{
			subject: "سرعت پردازش",
			point: "10",
			fullMark: 10,
		},
		{
			subject: "تصمیم گیری",
			point: "9",
			fullMark: 10,
		},
		{
			subject: "کنترل اجرایی",
			point: "5",
			fullMark: 10,
		},
		{
			subject: "آمادگی",
			point: "6",
			fullMark: 10,
		},
	];

	const areaData = [
		{
			name: "نمره کل",
			point: 9,
		},
		{
			name: "نمره کل",
			point: 4,
		},
		{
			name: "نمره کل",
			point: 10,
		},
		{
			name: "نمره کل",
			point: 6,
		},
		{
			name: "نمره کل",
			point: 9,
		},
		{
			name: "نمره کل",
			point: 5,
		},
	];

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const accordionStyle = {
		boxShadow: "0 2px 5px #dddddd",
		"&.MuiAccordion-root:before": {
			backgroundColor: "transparent",
		},

	};

	const summaryStyle = {
		flexDirection: "row",
	};

	const typographyStyle = {
		textAlign: "left",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
	};

	const buttonStyle = {
		fontSize: "15px",
		backgroundColor: "#ffffff",
		color: "#222222",
		borderRadius: "20px",
		height: "40px",
		paddingLeft: "15px",
		paddingRight: "15px",
		boxShadow: "0 2px 5px #dddddd",
	};

	return (
		<div className="report">
			<Accordion
				className="accordionReport"
				sx={accordionStyle}
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					sx={summaryStyle}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={typographyStyle}>
						<span className="reportName">کارنامه آزمون عمومی</span>

						<span className="reportExtra">
							<Button sx={buttonStyle}>کپی لینک</Button>
							<span className="reportPicture"></span>
						</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className="reportContainer">
						<div className="spiderChartContainer reportBit">
							<ResponsiveContainer width="100%" height="100%">
								<RadarChart
									cx="50%"
									cy="50%"
									outerRadius="80%"
									data={radarData}
								>
									<PolarGrid />
									<PolarAngleAxis dataKey="subject" />
									<PolarRadiusAxis angle={30} domain={[0, 10]} tickCount={6} />
									<Radar
										name="نمره"
										dataKey="point"
										stroke="#49DEE9"
										fill="#49DEE9"
										fillOpacity={0.6}
									/>
									<Tooltip />
								</RadarChart>
							</ResponsiveContainer>
						</div>
						<div className="percentContainer reportBit">
							<div className="reportPercent bold">75 %</div>
						</div>
						<div className="areaChartContainer reportBit">
							<ResponsiveContainer width="100%" height="100%">
								<AreaChart
									width={600}
									height={400}
									data={areaData}
									margin={{
										top: 10,
										right: 30,
										left: 0,
										bottom: 0,
									}}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis hide={true} dataKey="name" />
									<YAxis hide={true} />
									<Tooltip />
									<Area
										type="monotone"
										dataKey="point"
										stroke="#49DEE9"
										fill="#49DEE9"
										fillOpacity={0.6}
									/>
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>
					<div className="manuscript">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
						ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
						و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
						زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد.
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
