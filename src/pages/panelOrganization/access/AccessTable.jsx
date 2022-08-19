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
import { managerRows } from "../../../Data/Manager";
import { accessRows } from "../../../Data/Access";
import {
//   getAllpackage,
//   getAllcategory,
} from "../../../services/PackageService";
import AccessAdd from "./AccessAdd";
import AccessEdit from "./AccessEdit";

let departmentRowsAutoComplete = [];

for (let i = 0; i < departmentRows.length; i++) {
	departmentRowsAutoComplete[i] = departmentRows[i].name;
}

let managerRowsAutoComplete = [];

for (let i = 0; i < managerRows.length; i++) {
	managerRowsAutoComplete[i] = managerRows[i].username;
}

let accessRowsAutoComplete = [];

for (let i = 0; i < accessRows.length; i++) {
	accessRowsAutoComplete[i] = accessRows[i].name;
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

	const accessColumns = [
		{
			field: "id",
			headerName: "شناسه",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "managerUsername",
			headerName: "نام کاربری مدیر",
			flex: 1,
		},
		{
			field: "departemantId",
			headerName: "شناسه دپارتمان",
			flex: 1,
		},
		{
			field: "managerAccess",
			headerName: "دسترسی",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.managerAccess === 0 && "دسترسی عادی"}
						{parameters.row.managerAccess === 1 && "دسترسی کامل"}
					</div>
				);
			},
		},
		{
			field: "action",
			headerName: "امکانات",
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
					onClick={handleClickOpen}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="manager"
					options={managerRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => (
						<TextField {...params} label="جستجو بر اساس مدیر" />
					)}
				/>
				<Autocomplete
					disablePortal
					id="department"
					options={departmentRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => (
						<TextField {...params} label="جستجو بر اساس دپارتمان" />
					)}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				<DataGrid
					rows={accessRows}
					columns={accessColumns}
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
					<DialogTitle>اضافه کردن دسترسی</DialogTitle>
					<DialogContent>
						<AccessAdd innerRef={formRef} />
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleClose}
							sx={{ marginRight: "15px" }}
						>
							انصراف
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleSubmit}
							sx={{ marginRight: "15px" }}
						>
							اضافه کردن
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
					<DialogTitle>ویرایش دسترسی</DialogTitle>
					<DialogContent>
						<AccessEdit innerRef={formRef} />
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleCloseEdit}
							sx={{ marginRight: "15px" }}
						>
							انصراف
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleSubmitEdit}
							sx={{ marginRight: "15px" }}
						>
							ویرایش
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
					<DialogTitle>پاک کردن دسترسی</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						آیا از پاک کردن این دسترسی مطمئن هستید؟
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
