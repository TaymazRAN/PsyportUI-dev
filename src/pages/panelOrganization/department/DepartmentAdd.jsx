import React from "react";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import * as yup from "yup";

const initialValues = {
	name: "",
	parentId: "",
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام دپارتمان را وارد کنید"),
	parentId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("شناسه دپارتمان پدر را وارد کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function DepartmentAdd( props ) {
	return (
		<Formik
			{...props}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{({ handleChange, values, setFieldValue, errors, touched }) => (
				<Form>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="name"
						label="نام دپارتمان"
						type="number"
						fullWidth
						variant="outlined"
						value={values.name}
						onChange={handleChange}
						error={touched.name && Boolean(errors.name)}
						helperText={touched.name && errors.name}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="parentId"
						label="شناسه دپارتمان پدر"
						type="string"
						fullWidth
						variant="outlined"
						value={values.parentId}
						onChange={handleChange}
						error={touched.parentId && Boolean(errors.parentId)}
						helperText={touched.parentId && errors.parentId}
					/>
				</Form>
			)}
		</Formik>
	);
}
