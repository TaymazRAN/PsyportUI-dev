import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
	complementTypeRows,
	organizationRows,
} from "../../../../Data/Organization";
import { useNavigate } from "react-router-dom";
import "../../../panelPersonal/profile/profile.css";

let complementTypeRowsAutoComplete = [];

for (let i = 0; i < complementTypeRows.length; i++) {
	complementTypeRowsAutoComplete[i] = complementTypeRows[i].name;
}

let organizationRowsAutoComplete = [];

for (let i = 0; i < organizationRows.length; i++) {
	organizationRowsAutoComplete[i] = organizationRows[i].name;
}

const initialValues = {
	organization: "",
	complementType: "",
	content: "",
};

const validationSchema = yup.object().shape({
	organization: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("سازمان را انتخاب کنید"),
	complementType: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("ویژگی را انتخاب کنید"),
	content: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("اطلاعات را وارد کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function ComplementValueEdit(props) {
	const navigate = useNavigate();

	return (
		<Formik
			{...props}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{({ handleChange, values, setFieldValue, errors, touched }) => (
				<Form>
					<div className="mainPanelTitle bold">
						ویرایش تعریف ویژگی سازمان
					</div>
					<div className="profileInputContainer">
						<Autocomplete
							fullWidth
							id="organization"
							name="organization"
							className="profileInput"
							options={organizationRowsAutoComplete}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"organization",
									value !== null ? value : initialValues.organization
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="سازمان"
									fullWidth
									name="organization"
									value={values.organization}
									error={touched.organization && Boolean(errors.organization)}
									helperText={touched.organization && errors.organization}
									{...params}
								/>
							)}
						/>
						<Autocomplete
							fullWidth
							id="complementType"
							name="complementType"
							className="profileInput"
							options={complementTypeRowsAutoComplete}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"complementType",
									value !== null ? value : initialValues.complementType
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="ویژگی"
									fullWidth
									name="complementType"
									value={values.complementType}
									error={
										touched.complementType && Boolean(errors.complementType)
									}
									helperText={touched.complementType && errors.complementType}
									{...params}
								/>
							)}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="content"
							label="اطلاعات"
							type="text"
							fullWidth
							variant="outlined"
							name="content"
							value={values.content}
							onChange={handleChange}
							error={touched.content && Boolean(errors.content)}
							helperText={touched.content && errors.content}
						/>
					</div>
					<div className="profileInputContainer">
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							color="error"
							onClick={(event) => navigate("/admin/complementValue")}
							id="logoFileName"
							sx={{ padding: "15px 0", marginTop: "4px" }}
							fullWidth
						>
							انصراف
						</Button>
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							id="logoFileName"
							color="primary"
							sx={{ padding: "15px 0", marginTop: "4px" }}
							fullWidth
							disabled
						>
							ویرایش
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
