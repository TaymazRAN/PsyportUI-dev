import React, { useState, useRef } from "react";
// import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import { departmentRows } from "../../../Data/Department";
import { inventoryRows } from "../../../Data/Inventory";
import { requestRows } from "../../../Data/Request";
import RequestAdd from "./RequestAdd";
import RequestEdit from "./RequestEdit";
// import {
// 	getAllpackage,
// 	getAllcategory,
// } from "../../../../services/PackageService";

let departmentRowsAutoComplete = [];

for (let i = 0; i < departmentRows.length; i++) {
	departmentRowsAutoComplete[i] = departmentRows[i].name;
}

let inventoryRowsAutoComplete = [];

for (let i = 0; i < inventoryRows.length; i++) {
	inventoryRowsAutoComplete[i] = inventoryRows[i].package;
}


export default function AccessTable() {
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);

	//UseEffect Call api
	// const [loading, setLoading] = useState(false);
	// const [contacts, setContacts] = useState([]);
	// const [filteredContacts, setFilteredContacts] = useState([]);
	// const [groups, setGroups] = useState([]);
	// const [packagelist, setPackagelist] = useState({});
	// const [contactQuery, setContactQuery] = useState({ text: "" });
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			setLoading(true);
	// 			const { data: packageData } = await getAllpackage();
	// 			const { data: groupsData } = await getAllcategory();
	// 			setContacts(contactsData);
	// 			setFilteredContacts(contactsData);
	// 			setGroups(groupsData);
	// 			setPackagelist(packageData);
	// 			setLoading(false);
	// 		} catch (err) {
	// 			console.log(err.message);
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickDeleteOpen = () => {
		setOpenDelete(true);
	};

	const handleDeleteClose = () => {
		setOpenDelete(false);
	};

	const handleClickEditOpen = () => {
		setOpenEdit(true);
	};

	const handleCloseEdit = () => {
		setOpenEdit(false);
	};

	const formRef = useRef();

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const formRefEdit = useRef();

	const handleSubmitEdit = () => {
		if (formRefEdit.current) {
			formRefEdit.current.handleSubmit();
		}
	};

	const requestColumns = [
		{
			field: "id",
			headerName: "??????????",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "departemantId",
			headerName: "?????????? ????????????????",
			flex: 1,
		},
		{
			field: "inventoryId",
			headerName: "?????????? inventory",
			flex: 1,
		},
		{
			field: "action",
			headerName: "??????????????",
			minWidth: 200,
			flex: 1,
			renderCell: () => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							onClick={handleClickEditOpen}
							color="info"
						>
							<EditOutlinedIcon className="gridIcon" />
							????????????
						</Button>
						<Button
							className="gridButton"
							onClick={handleClickDeleteOpen}
							color="error"
						>
							<DeleteOutlineIcon className="gridIcon" />
							??????
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
					onClick={handleClickOpen}
				>
					?????????? ???????? <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="organization"
					options={departmentRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => (
						<TextField {...params} label="?????????? ???? ???????? ????????????????" />
					)}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				<DataGrid
					rows={requestRows}
					columns={requestColumns}
					pageSize={7}
					rowsPerPageOptions={[7]}
					checkboxSelection
					disableSelectionOnClick
					sx={{ color: "#2C3333", fontSize: "13px" }}
				/>
				<Dialog
					dir="rtl"
					open={open}
					onClose={handleClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>?????????? ???????? ??????????????</DialogTitle>
					<DialogContent>
						<RequestAdd innerRef={formRef} />
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleClose}
							sx={{ marginRight: "15px" }}
						>
							????????????
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleSubmit}
							sx={{ marginRight: "15px" }}
						>
							?????????? ????????
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					dir="rtl"
					open={openEdit}
					onClose={handleCloseEdit}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>???????????? ??????????????</DialogTitle>
					<DialogContent>
						<RequestEdit innerRef={formRef} />
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleCloseEdit}
							sx={{ marginRight: "15px" }}
						>
							????????????
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleSubmitEdit}
							sx={{ marginRight: "15px" }}
						>
							????????????
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					dir="rtl"
					open={openDelete}
					onClose={handleDeleteClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>?????? ???????? ??????????????</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						?????? ???? ?????? ???????? ?????? ?????????????? ?????????? ????????????
					</DialogContentText>

					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleDeleteClose}
							sx={{ marginRight: "15px" }}
						>
							????????????
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleDeleteClose}
							sx={{ marginRight: "15px" }}
						>
							?????? ????
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}
