import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
	typeRows,
	complementTypeRows,
	organizationRows,
} from "../../../../Data/Organization";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import { getComplementValue } from "../../../../services/OrganizationService";
import Loading from "../../../../component/loading/Loading";
import LoadingData from "../../../../component/loadingData/LoadingData";
import { useNavigate } from "react-router-dom";

let typeRowsAutoComplete = [];

for (let i = 0; i < typeRows.length; i++) {
	typeRowsAutoComplete[i] = typeRows[i].name;
}

let complementTypeRowsAutoComplete = [];

for (let i = 0; i < complementTypeRows.length; i++) {
	complementTypeRowsAutoComplete[i] = complementTypeRows[i].name;
}

let organizationRowsAutoComplete = [];

for (let i = 0; i < organizationRows.length; i++) {
	organizationRowsAutoComplete[i] = organizationRows[i].name;
}

export default function ComplementValueTable() {
	const navigate = useNavigate();
	const [openDelete, setOpenDelete] = React.useState(false);

	const handleClickDeleteOpen = () => {
		setOpenDelete(true);
	};

	const handleDeleteClose = () => {
		setOpenDelete(false);
	};

	//UseEffect Call api
	const [loading, setLoading] = useState(false);
	const [listComplementValue, setListComplementValue] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				// const { data: contactsData } = await getAllcategory();
				const { data: getComplementValueData } = await getComplementValue();
				// setContacts(contactsData);
				// setFilteredContacts(contactsData);
				setListComplementValue(getComplementValueData);
				setLoading(false);
			} catch (err) {
				console.log(err.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	// {
	//   "id": 0,
	//   "content": "محتوای تست 1",
	//   "organizationComplementryInfoFieldId": 1,
	//   "organizationId": 1
	// },
	const complementValueColumns = [
		{
			field: "id",
			headerName: "شناسه",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "organizationId",
			headerName: "نام سازمان",
			flex: 1,
		},

		// {
		//   field: "organizationId",
		//   headerName: "نام   سازمان",
		//   flex: 1,
		//   renderCell: (parameters) => {
		//     console.log("parameters");
		//     console.log(parameters);
		//     return (
		//       <div className="dataGridCell">
		//         {groups.find((item) => item.id === parameters.row.id).name}
		//       </div>
		//     );
		//   },
		// },
		{
			field: "organizationComplementryInfoFieldId",
			headerName: "ComplementryInfoFieldId",
			flex: 1,
		},
		{
			field: "content",
			headerName: "content",
			flex: 1,
		},
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 200,
			renderCell: () => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							onClick={(event) => navigate("/admin/complementValueEdit")}
							color="info"
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<Button
							className="gridButton"
							onClick={handleClickDeleteOpen}
							color="error"
						>
							<DeleteOutlineIcon className="gridIcon" />
							حذف
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div dir="rtl" className="dataGrid">
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					sx={{ padding: "14px 15px" }}
					onClick={(event) => navigate("/admin/complementValueAdd")}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="name"
					options={organizationRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => <TextField {...params} label="نام سازمان" />}
				/>
				<Autocomplete
					disablePortal
					id="type"
					options={typeRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => <TextField {...params} label="نوع سازمان" />}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<Loading />
				) : (
					<>
						{listComplementValue.length > 0 ? (
							<DataGrid
								rows={listComplementValue}
								columns={complementValueColumns}
								pageSize={7}
								rowsPerPageOptions={[7]}
								checkboxSelection
								disableSelectionOnClick
								sx={{ color: "#2C3333", fontSize: "13px" }}
							/>
						) : (
							<LoadingData />
						)}
					</>
				)}
				<Dialog
					dir="rtl"
					open={openDelete}
					onClose={handleDeleteClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>پاک کردن سازمان</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						آیا از پاک کردن این سازمان مطمئن هستید؟
					</DialogContentText>

					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleDeleteClose}
							sx={{ marginRight: "15px" }}
						>
							انصراف
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleDeleteClose}
							sx={{ marginRight: "15px" }}
						>
							پاک کن
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}
