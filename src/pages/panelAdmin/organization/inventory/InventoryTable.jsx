import React, { useState, useEffect } from "react";
// import { useEffect, useNavigate } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { inventoryRows } from "../../../../Data/Inventory";
import { organizationRows } from "../../../../Data/Organization";
import { packageRows } from "../../../../Data/Package";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

import { getInventoryOrgID } from "./../../../../services/InventoryService";

import Loading from "./../../../../component/loading/Loading";

import LoadingData from "./../../../../component/loadingData/LoadingData";

let packageRowsAutoComplete = [];

for (let i = 0; i < packageRows.length; i++) {
	packageRowsAutoComplete[i] = packageRows[i].name;
}

let organizationRowsAutoComplete = [];

for (let i = 0; i < organizationRows.length; i++) {
	organizationRowsAutoComplete[i] = organizationRows[i].name;
}

export default function InventoryTable() {
	const navigate = useNavigate();
	const [openDelete, setOpenDelete] = useState(false);
	//UseEffect Call api
	const [loading, setLoading] = useState(false);
	const [listdata, setListdata] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				// const { data: contactsData } = await getAllcategory();
				const { data: groupsData } = await getInventoryOrgID(1);
				// setContacts(contactsData);
				// setFilteredContacts(contactsData);
				setListdata(groupsData);
				setLoading(false);
			} catch (err) {
				console.log(err.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleClickDeleteOpen = () => {
		setOpenDelete(true);
	};

	const handleDeleteClose = () => {
		setOpenDelete(false);
	};

	//   "id": 1,    جزییات  =======================
	//   "amount": 100,
	//   "originalAmount": 0,
	//   "package": {
	//     "id": 1,
	//     "name": "Test Package",
	//     "description": "Test Description",
	//     "fileName": "TestFile.zip",
	//     "isExcersise": false,
	//     "displayPiority": 0,
	//     "category": {
	//       "id": 1,
	//       "name": "Test category",
	//       "description": "Test Description",
	//       "imageId": "testId",
	//       "backgroundImageId": "backgroundTestId"
	//     },
	//     "packageDiscountValue": 0,
	//     "price": 10000,
	//     "imageId": "none"
	//   },
	//   "date": "0001-01-01T00:00:00"
	// },

	const inventoryColumns = [
		{
			field: "id",
			headerName: "شناسه",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "category",
			headerName: "دسته بندی",
			flex: 1,
			renderCell: (parameters) => {
				console.log("category");
				console.log(parameters);
				return (
					<div className="dataGridCell">
						{
							listdata.find((item) => item.id === parameters.row.id).package
								.category.name
						}
					</div>
				);
			},
		},
		{
			field: "package",
			headerName: "بسته",
			flex: 1,
			renderCell: (parameters) => {
				console.log("package");
				console.log(parameters);
				return (
					<div className="dataGridCell">
						{
							listdata.find((item) => item.id === parameters.row.id).package
								.name
						}
					</div>
				);
			},
		},
		{
			field: "amount",
			headerName: "مقدار",
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
							onClick={(event) => navigate("/admin/inventoryEdit")}
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
					onClick={(event) => navigate("/admin/inventoryAdd")}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="organization"
					options={organizationRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => (
						<TextField {...params} label="جستجو بر اساس سازمان" />
					)}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<Loading />
				) : (
					<>
						{listdata.length > 0 ? (
							<DataGrid
								rows={listdata}
								columns={inventoryColumns}
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
					<DialogTitle>پاک کردن اعتبار</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						آیا از پاک کردن این اعتبار مطمئن هستید؟
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
