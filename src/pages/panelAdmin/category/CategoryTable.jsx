import React, { useEffect, useState } from "react";
// import { useNavigate } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";

import {
  getAllcategory,
  // getAllpackage,
  // createCategory,
  // deletePackage,
} from "../../../services/PackageService";
import Loading from "../../../component/loading/Loading";
import LoadingData from "../../../component/loadingData/LoadingData";

export default function CategoryTable() {
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);

  //UseEffect Call api
  const [loading, setLoading] = useState(false);
  // const [contacts, setContacts] = useState([]);
  // const [filteredContacts, setFilteredContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  // const [contact, setContact] = useState({});
  // const [contactQuery, setContactQuery] = useState({ text: "" });
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const { data: contactsData } = await getAllcategory();
        const { data: groupsData } = await getAllcategory();
        // setContacts(contactsData);
        // setFilteredContacts(contactsData);
        setGroups(groupsData);
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

  const categoryColumns = [
		{
			field: "id",
			headerName: "??????????",
			maxWidth: 70,
			flex: 1,
		},
		{
			field: "name",
			headerName: "?????? ???????? ????????",
			flex: 1,
		},
		{
			field: "description",
			headerName: "??????????????",
			flex: 1,
		},
		{
			field: "imageId",
			headerName: "?????????? ????????",
			flex: 1,
		},
		{
			field: "backgroundImageId",
			headerName: "?????????? ??????????",
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
							onClick={(event) => navigate("/admin/categoryEdit")}
						>
							<EditOutlinedIcon className="gridIcon" />
							????????????
						</Button>
						<Button className="gridButton" onClick={handleClickDeleteOpen}>
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
					onClick={(event) => navigate("/admin/categoryAdd")}
				>
					?????????? ???????? <AddIcon className="topButtonIcon" />
				</Button>
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<Loading />
				) : (
					<>
						{groups.length > 0 ? (
							<DataGrid
								rows={groups}
								columns={categoryColumns}
								pageSize={7}
								rowsPerPageOptions={[7]}
								checkboxSelection
								disableSelectionOnClick
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
					<DialogTitle>?????? ???????? ???????? ????????</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						?????? ???? ?????? ???????? ?????? ???????? ???????? ?????????? ????????????
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
