import React, { useState, useEffect } from "react";
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
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getAllpackage,
  getAllcategory,
} from "../../../../services/PackageService";
import Loading from "../../../../component/loading/Loading";
import LoadingData from "./../../../../component/loadingData/LoadingData";

let categoryRowsAutoComplete = [];

export default function PackageTable() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  //UseEffect Call api
  const [loading, setLoading] = useState(false);
  // const [contacts, setContacts] = useState([]);
  // const [filteredContacts, setFilteredContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [packagelist, setPackagelist] = useState({});
  // const [contactQuery, setContactQuery] = useState({ text: "" });
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: packageData } = await getAllpackage();
        const { data: groupsData } = await getAllcategory();
        // setContacts(contactsData);
        // setFilteredContacts(contactsData);
        setGroups(groupsData);
        setPackagelist(packageData);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  for (let i = 0; i < groups.length; i++) {
    categoryRowsAutoComplete[i] = groups[i].name;
  }

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

  const [type, setType] = React.useState("");

  const changeType = (event) => {
    setType(event.target.value);
  };

  //   "id": 1,
  //   "name": "Test Package",
  //   "description": "Test Description",
  //   "fileName": "TestFile.zip",
  //   "isExcersise": false,
  //   "displayPiority": 0,
  //   "category": {
  //     "id": 1,
  //     "name": "Test category",
  //     "description": "Test Description",
  //     "imageId": "testId",
  //     "backgroundImageId": "backgroundTestId"
  //   },
  //   "packageDiscountValue": 0,
  //   "price": 10000,
  //   "imageId": "none"
  // },
  const packageColumns = [
		{
			field: "id",
			headerName: "??????????",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "name",
			headerName: "?????? ????????",
			flex: 1,
		},
		{
			field: "category",
			headerName: "?????? ???????? ????????",
			flex: 1,
			renderCell: (parameters) => {
				console.log("parameters");
				console.log(parameters);
				return (
					<div className="dataGridCell">
						{groups.find((item) => item.id === parameters.row.id).name}
					</div>
				);
			},
		},
		// {
		//   field: "description",
		//   headerName: "??????????????",
		//   flex: 1,
		// },
		// {
		//   field: "fileName",
		//   headerName: "?????? ????????",
		//   flex: 1,
		// },
		{
			field: "isExcersise",
			headerName: "?????? ????????",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isExcersise ? "??????????" : "??????????"}
					</div>
				);
			},
		},
		{
			field: "price",
			headerName: "????????",
			flex: 1,
		},
		{
			field: "action",
			headerName: "??????????????",
			flex: 1,
			minWidth: 200,
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
					id="category"
					options={categoryRowsAutoComplete}
					sx={{ width: 300, marginLeft: "15px", marginRight: "0" }}
					renderInput={(params) => <TextField {...params} label="???????? ????????" />}
				/>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<Loading />
				) : (
					<>
						{groups.length > 0 ? (
							<DataGrid
								rows={packagelist}
								columns={packageColumns}
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
					open={open}
					onClose={handleClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>?????????? ???????? ????????</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="name"
							label="?????? ????????"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<TextField
							dir="rtl"
							margin="dense"
							id="description"
							label="??????????????"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<Button
							variant="outlined"
							component="label"
							id="fileName"
							sx={{ margin: "15px 0 0" }}
							fullWidth
						>
							?????????? ???????? <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<Button
							variant="outlined"
							component="label"
							id="imageId"
							sx={{ margin: "15px 0" }}
							fullWidth
						>
							?????????? ?????? <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<FormControl fullWidth className="selectContainer">
							<InputLabel id="type">?????? ????????</InputLabel>
							<Select
								labelId="type"
								id="isExcersise"
								variant="outlined"
								value={type}
								onChange={changeType}
								fullWidth
								label="?????? ????????"
							>
								<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
									<em>???????????? ????????</em>
								</MenuItem>
								<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
									??????????
								</MenuItem>
								<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
									??????????
								</MenuItem>
							</Select>
						</FormControl>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="price"
							label="????????"
							type="number"
							fullWidth
							variant="outlined"
							defaultValue="0"
						/>
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
							onClick={handleClose}
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
					<DialogTitle>???????????? ????????</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="name"
							label="?????? ????????"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<TextField
							dir="rtl"
							margin="dense"
							id="description"
							label="??????????????"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<Button
							variant="outlined"
							component="label"
							id="fileName"
							sx={{ margin: "15px 0 0" }}
							fullWidth
						>
							?????????? ???????? ???????? <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<Button
							variant="outlined"
							component="label"
							id="imageId"
							sx={{ margin: "15px 0" }}
							fullWidth
						>
							?????????? ?????? ???????? <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<FormControl fullWidth className="selectContainer">
							<InputLabel id="type">?????? ????????</InputLabel>
							<Select
								labelId="type"
								id="isExcersise"
								variant="outlined"
								value={type}
								onChange={changeType}
								fullWidth
								label="?????? ????????"
							>
								<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
									<em>???????????? ????????</em>
								</MenuItem>
								<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
									??????????
								</MenuItem>
								<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
									??????????
								</MenuItem>
							</Select>
						</FormControl>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="price"
							label="????????"
							type="number"
							fullWidth
							variant="outlined"
							defaultValue="0"
						/>
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
							onClick={handleCloseEdit}
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
					<DialogTitle>?????? ???????? ????????</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						?????? ???? ?????? ???????? ?????? ???????? ?????????? ????????????
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
