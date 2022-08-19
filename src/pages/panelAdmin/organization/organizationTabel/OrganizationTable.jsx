import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { typeRows, organizationRows } from "../../../../Data/Organization";
import { packageRows } from "../../../../Data/Package";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllOrganization } from "./../../../../services/OrganizationService";
import LoadingData from "./../../../../component/loadingData/LoadingData";
import OrganizationShow from "./OrganizationShow";
import { useNavigate } from "react-router-dom";

let typeRowsAutoComplete = [];

for (let i = 0; i < typeRows.length; i++) {
	typeRowsAutoComplete[i] = typeRows[i].name;
}

let organizationRowsAutoComplete = [];

for (let i = 0; i < organizationRows.length; i++) {
	organizationRowsAutoComplete[i] = organizationRows[i].name;
}

let packageRowsAutoComplete = [];

for (let i = 0; i < packageRows.length; i++) {
	packageRowsAutoComplete[i] = packageRows[i].name;
}

export default function OrganizationTable() {
	const [openDelete, setOpenDelete] = React.useState(false);
	const [openDetail, setOpenDetail] = React.useState(false);
	const navigate = useNavigate();

	//UseEffect Call api
	const [loading, setLoading] = useState(false);
	const [listdata, setListdata] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				// const { data: contactsData } = await getAllcategory();
				const { data: DataAllOrganization } = await getAllOrganization();
				// setContacts(contactsData);
				// setFilteredContacts(contactsData);
				setListdata(DataAllOrganization);
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

	const handleClickDetailOpen = () => {
		setOpenDetail(true);
	};

	const handleCloseDetail = () => {
		setOpenDetail(false);
	};

	const organizationColumns = [
		{
			field: "id",
			headerName: "شناسه",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "name",
			headerName: "نام سازمان",
			flex: 1,
		},
		{
			field: "contactNumber",
			headerName: "شماره تماس",
			flex: 1,
		},
		// {
		//   field: "emailAddress",
		//   headerName: "ایمیل",
		//   flex: 1,
		// },
		{
			field: "logoFileName",
			headerName: "لوگو",
			flex: 1,
		},
		{
			field: "refCode",
			headerName: "کد ارجاع",
			flex: 1,
		},
		// {
		//   field: "planExpDate",
		//   headerName: "تاریخ انقضا طرح",
		//   width: 100,
		// },
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 330,
			renderCell: () => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							onClick={(event) => navigate("/admin/organizationEdit")}
							color="info"
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<Button
							className="gridButton"
							onClick={handleClickDetailOpen}
							color="success"
						>
							<VisibilityOutlinedIcon className="gridIcon" />
							جزئیات
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
					onClick={(event) => navigate('/admin/organizationAdd')}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="type"
					options={typeRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => <TextField {...params} label="نوع سازمان" />}
				/>
				<Autocomplete
					disablePortal
					id="name"
					options={organizationRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => <TextField {...params} label="نام سازمان" />}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<loading />
				) : (
					<>
						{listdata.length > 0 ? (
							<DataGrid
								rows={listdata}
								columns={organizationColumns}
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
					open={openDetail}
					onClose={handleCloseDetail}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>جزئیات سازمان</DialogTitle>
					<DialogContent>
						<OrganizationShow data={organizationRows[0]} />
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleCloseDetail}
							sx={{ marginRight: "15px" }}
						>
							بستن
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
