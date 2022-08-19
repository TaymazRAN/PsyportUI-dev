import "../panelAdmin/panel.css";
import "../panelAdmin/table.css";
import { Routes, Route } from "react-router-dom";
import MenuTopOrganization from "../../component/menuTopOrganization/MenuTopOrganization";
import SideBarOrganaization from "../../component/sideBarOrganaization/SideBarOrganaization";
import DepartmentTable from "./department/DepartmentTable";
import EmployeeTable from "./employee/EmployeeTable";
import AccessTable from "./access/AccessTable";
import RequestTable from "./request/RequestTable";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPanel from "../error/NotFoundPanel";

export default function PanelOrganization() {
  return (
		<>
			<MenuTopOrganization />
			<div className="panel">
				<div className="sidebar panelBox">
					<SideBarOrganaization />
				</div>
				<div className="page panelBox">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/department" element={<DepartmentTable />} />
						<Route path="/employee" element={<EmployeeTable />} />
						<Route path="/access" element={<AccessTable />} />
						<Route path="/request" element={<RequestTable />} />
						<Route path="*" element={<NotFoundPanel />} />
					</Routes>
				</div>
			</div>
		</>
	);
}
