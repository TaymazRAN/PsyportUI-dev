import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { typeRows } from "../../../../Data/Organization";
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
// import {
//   getComplementType,
//   getTypeOrganization,
// } from "../../../../services/OrganizationService";
import { complementTypeRows } from "../../../../Data/Organization";
import Loading from "../../../../component/loading/Loading";
import LoadingData from "../../../../component/loadingData/LoadingData";
import { useNavigate } from "react-router-dom";

let typeRowsAutoComplete = [];

for (let i = 0; i < typeRows.length; i++) {
  typeRowsAutoComplete[i] = typeRows[i].name;
}

export default function ComplementTypeTable() {
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = React.useState(false);

  //UseEffect Call api
  const [loading, setLoading] = useState(false);
  // const [listdata, setListdata] = useState([]);
  // const [listOrgType, setListOrgType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const { data1: organizatonType } = await getTypeOrganization();
        // const { data: listData } = await getComplementType();
        // setListdata(listData);
        // setListOrgType(organizatonType);
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

  // "id": 0,
  // "name": "Test field 1",
  // "type": 1,
  // "isRequired": true,
  // "organizationTypeId": 1
  const complementTypeColumns = [
    {
      field: "id",
      headerName: "شناسه",
      maxWidth: 70,
      flex: 1,
    },

    {
      field: "type",
      headerName: "type",
      flex: 1,
    },
    {
      field: "organizationTypeId",
      headerName: "نوع سازمان",
      flex: 1,
    },
    // {
    //   field: "organizationTypeId",
    //   headerName: "نوع  سازمان  ",
    //   flex: 1,
    //   renderCell: (parameters) => {
    //     console.log("parametersOrgan-----------------------------");
    //     console.log(parameters);
    //     return (
    //       <div className="dataGridCell">
    //         {listOrgType.find((item) => item.id === parameters.row.id).title}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "name",
      headerName: "ویژگی سازمان",
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
							onClick={(event) => navigate("/admin/complementTypeEdit")}
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
					onClick={(event) => navigate("/admin/complementTypeAdd")}
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
			</div>
			<div style={{ height: 500, width: "100%" }}>
				{loading ? (
					<Loading />
				) : (
					<>
						{complementTypeRows.length > 0 ? (
							<DataGrid
								rows={complementTypeRows}
								columns={complementTypeColumns}
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
					<DialogTitle>پاک کردن ویژگی سازمان</DialogTitle>

					<DialogContentText sx={{ padding: "0 25px" }}>
						آیا از پاک کردن این ویژگی سازمان مطمئن هستید؟
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
