import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { departmentRows } from "../../../Data/Department";
import { managerRows } from "../../../Data/Manager";
import { Formik, Form } from "formik";
import * as yup from "yup";

let departmentRowsAutoComplete = [];

for (let i = 0; i < departmentRows.length; i++) {
	departmentRowsAutoComplete[i] = departmentRows[i].name;
}

let managerRowsAutoComplete = [];

for (let i = 0; i < managerRows.length; i++) {
	managerRowsAutoComplete[i] = managerRows[i].username;
}

const initialValues = {
	manager: "",
	department: "",
	access: "",
};

const validationSchema = yup.object().shape({
	manager: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("مدیر را انتخاب کنید"),
	department: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دپارتمان را انتخاب کنید"),
	access: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دسترسی را انتخاب کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function AccessEdit(props) {
	return (
		<Formik
			{...props}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{({ handleChange, values, setFieldValue, errors, touched }) => (
				<Form>
					<Autocomplete
						fullWidth
						id="manager"
						name="manager"
						options={managerRowsAutoComplete}
						// getOptionLabel={(option) => option.name}
						onChange={(e, value) => {
							setFieldValue(
								"manager",
								value !== null ? value : initialValues.manager
							);
						}}
						renderInput={(params) => (
							<TextField
								margin="normal"
								label="نام کاربری مدیر"
								fullWidth
								name="manager"
								value={values.manager}
								error={touched.manager && Boolean(errors.manager)}
								helperText={touched.manager && errors.manager}
								{...params}
							/>
						)}
					/>
					<Autocomplete
						fullWidth
						id="department"
						name="department"
						options={departmentRowsAutoComplete}
						// getOptionLabel={(option) => option.name}
						onChange={(e, value) => {
							setFieldValue(
								"department",
								value !== null ? value : initialValues.department
							);
						}}
						renderInput={(params) => (
							<TextField
								margin="normal"
								label="نام دپارتمان"
								fullWidth
								name="department"
								value={values.department}
								error={touched.department && Boolean(errors.department)}
								helperText={touched.department && errors.department}
								{...params}
							/>
						)}
					/>
					<FormControl fullWidth className="selectContainer">
						<InputLabel error={touched.access && Boolean(errors.access)}>
							دسترسی
						</InputLabel>
						<Select
							labelId="type"
							id="access"
							variant="outlined"
							value={values.access}
							onChange={(e) => {
								setFieldValue("access", e.target.value);
							}}
							error={touched.access && Boolean(errors.access)}
							fullWidth
							label="دسترسی"
						>
							<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
								<em>انتخاب کنید</em>
							</MenuItem>
							<MenuItem value={0} sx={{ justifyContent: "flex-end" }}>
								دسترسی عادی
							</MenuItem>
							<MenuItem value={1} sx={{ justifyContent: "flex-end" }}>
								دسترسی کامل
							</MenuItem>
						</Select>
						<FormHelperText error={touched.access && Boolean(errors.access)}>
							{touched.access && errors.access}
						</FormHelperText>
					</FormControl>
				</Form>
			)}
		</Formik>
	);
}
