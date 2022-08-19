import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { departmentRows } from "../../../Data/Department";
import { inventoryRows } from "../../../Data/Inventory";
import { Formik, Form } from "formik";
import * as yup from "yup";

let departmentRowsAutoComplete = [];

for (let i = 0; i < departmentRows.length; i++) {
	departmentRowsAutoComplete[i] = departmentRows[i].name;
}

let inventoryRowsAutoComplete = [];

for (let i = 0; i < inventoryRows.length; i++) {
	inventoryRowsAutoComplete[i] = inventoryRows[i].package;
}

const initialValues = {
	department: "",
	inventory: "",
};

const validationSchema = yup.object().shape({
	department: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دپارتمان را انتخاب کنید"),
	inventory: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("اعتبار را انتخاب کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function RequestAdd(props) {
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
					<Autocomplete
						fullWidth
						id="inventory"
						name="inventory"
						options={inventoryRowsAutoComplete}
						// getOptionLabel={(option) => option.name}
						onChange={(e, value) => {
							setFieldValue(
								"inventory",
								value !== null ? value : initialValues.inventory
							);
						}}
						renderInput={(params) => (
							<TextField
								margin="normal"
								label="اعتبار"
								fullWidth
								name="inventory"
								value={values.inventory}
								error={touched.inventory && Boolean(errors.inventory)}
								helperText={touched.inventory && errors.inventory}
								{...params}
							/>
						)}
					/>
				</Form>
			)}
		</Formik>
	);
}
