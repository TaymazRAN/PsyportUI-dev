import "./sideBarAdmin.css";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import QuizIcon from "@mui/icons-material/Quiz";
import BiotechIcon from "@mui/icons-material/Biotech";
import { NavLink } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ListIcon from "@mui/icons-material/List";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreateIcon from "@mui/icons-material/Create";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

export default function SideBarAdmin() {
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

	return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<Accordion
					className="accordionSide"
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					sx={accordionStyle}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<div className="sideBarTitle bold"> داشبورد ادمین </div>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="sideBarList">
							<NavLink
								to="/admin/"
								activeclassname="active"
								className="sideBarListItem"
							>
								<HomeRoundedIcon className="sideBarIcon" />
								داشبورد
							</NavLink>
							<li className="sideBarListItem">
								<PersonOutlineIcon className="sideBarIcon" />
								مدیریت پروفایل
							</li>
							<NavLink
								to="/admin/menu"
								activeclassname="active"
								className="sideBarListItem"
							>
								<WidgetsRoundedIcon className="sideBarIcon" />
								منو ها
							</NavLink>
							<NavLink
								to="/admin/user"
								activeclassname="active"
								className="sideBarListItem"
							>
								<PeopleOutlineIcon className="sideBarIcon" />
								لیست کاربران
							</NavLink>
							<NavLink
								to="/admin/contact"
								activeclassname="active"
								className="sideBarListItem"
							>
								<EmailOutlinedIcon className="sideBarIcon" />
								تماس ها
							</NavLink>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					className="accordionSide"
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
					sx={accordionStyle}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<div className="sideBarTitle bold"> مدیریت سازمان ها </div>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="sideBarList">
							<NavLink
								to="/admin/type"
								activeclassname="active"
								className="sideBarListItem"
							>
								<AppsIcon className="sideBarIcon" />
								نوع سازمان ها
							</NavLink>
							<NavLink
								to="/admin/complementType"
								activeclassname="active"
								className="sideBarListItem"
							>
								<ListIcon className="sideBarIcon" />
								ویژگی ها
							</NavLink>
							<NavLink
								to="/admin/complementValue"
								activeclassname="active"
								className="sideBarListItem"
							>
								<CreateIcon className="sideBarIcon" />
								تعریف ویژگی ها
							</NavLink>
							<NavLink
								to="/admin/organization"
								activeclassname="active"
								className="sideBarListItem"
							>
								<CorporateFareIcon className="sideBarIcon" />
								سازمان ها
							</NavLink>
							<NavLink
								to="/admin/inventory"
								activeclassname="active"
								className="sideBarListItem"
							>
								<InventoryIcon className="sideBarIcon" />
								اعتبار ها
							</NavLink>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					className="accordionSide"
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
					sx={accordionStyle}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<div className="sideBarTitle bold"> مدیریت بسته ها</div>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="sideBarList">
							<NavLink
								to="/admin/category"
								activeclassname="active"
								className="sideBarListItem"
							>
								<CategoryOutlinedIcon className="sideBarIcon" />
								دسته بندی ها
							</NavLink>
							<NavLink
								to="/admin/package"
								activeclassname="active"
								className="sideBarListItem"
							>
								<Inventory2OutlinedIcon className="sideBarIcon" />
								بسته ها
							</NavLink>
							<NavLink
								to="/admin/discount"
								activeclassname="active"
								className="sideBarListItem"
							>
								<DiscountOutlinedIcon className="sideBarIcon" />
								تخفیف ها
							</NavLink>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					className="accordionSide"
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
					sx={accordionStyle}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<div className="sideBarTitle bold"> مدیریت آزمون ها</div>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="sideBarList">
							<li className="sideBarListItem">
								<AssessmentOutlinedIcon className="sideBarIcon" />
								کارنامه ها
							</li>
							<li className="sideBarListItem">
								<BiotechIcon className="sideBarIcon" />
								اجرا ها
							</li>
							<li className="sideBarListItem">
								<QuizIcon className="sideBarIcon" />
								تمرین ها و ارجاع
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					className="accordionSide"
					expanded={expanded === "panel5"}
					onChange={handleChange("panel5")}
					sx={accordionStyle}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<div className="sideBarTitle bold">گزارش ها</div>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="sideBarList">
							<li className="sideBarListItem">
								<BarChartOutlinedIcon className="sideBarIcon" />
								گزارش های افراد
							</li>
							<li className="sideBarListItem">
								<BarChartOutlinedIcon className="sideBarIcon" />
								گزارش های سازمان
							</li>
							<li className="sideBarListItem">
								<BarChartOutlinedIcon className="sideBarIcon" />
								گزارش های فروش
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
}
