import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../Data/Users";

export default function IdentityAdmin() {
  return (
		<div
			style={{
				height: 500,
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<p> Identity Admin </p>
			<DataGrid
				rows={userRows}
				columns={userColumns}
				pageSize={7}
				rowsPerPageOptions={[7]}
				checkboxSelection
				disableSelectionOnClick
				sx={{ color: "#2C3333", fontSize: "13px" }}
			/>
		</div>
	);
}
