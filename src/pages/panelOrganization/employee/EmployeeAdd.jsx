import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";

const initialValues = {
	username: "",
	orgId: "",
	depId: "",
	position: "",
	employementStatus: "",
	personelCode: "",
	colorCode: "",
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.matches(
			/^[A-Za-z][A-Za-z0-9_]{5,}$/,
			"باید شامل 5 حرف باشد و با حرف انگلیسی شروع شود. فقط حروف انگلیسی، شماره ها و زیر خط مجاز است."
		)
		.required("نام کاربری را وارد کنید"),
	orgId: yup
		.number()
		.typeError("شناسه سازمان باید عدد باشد")
		.required("شناسه سازمان را وارد کنید"),
	depId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("شناسه دپارتمان را را وارد کنید"),
	position: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("موقعیت شغلی را وارد کنید"),
	employementStatus: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("وضعیت شغلی را انتخاب کنید"),
	personelCode: yup
		.number()
		.typeError("کد پرسنلی باید عدد باشد")
		.required("کد پرسنلی را وارد کنید"),
	colorCode: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("کد رنگی را وارد کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function EmployeeAdd(props) {
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
						id="username"
						label="نام کاربری"
						type="text"
						fullWidth
						variant="outlined"
						value={values.username}
						onChange={handleChange}
						error={touched.username && Boolean(errors.username)}
						helperText={touched.username && errors.username}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="orgId"
						label="شناسه سازمان"
						type="number"
						fullWidth
						variant="outlined"
						value={values.orgId}
						onChange={handleChange}
						error={touched.orgId && Boolean(errors.orgId)}
						helperText={touched.orgId && errors.orgId}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="depId"
						label="شناسه دپارتمان"
						type="text"
						fullWidth
						variant="outlined"
						value={values.depId}
						onChange={handleChange}
						error={touched.depId && Boolean(errors.depId)}
						helperText={touched.depId && errors.depId}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="position"
						label="موقعیت شغلی"
						type="text"
						fullWidth
						variant="outlined"
						value={values.position}
						onChange={handleChange}
						error={touched.position && Boolean(errors.position)}
						helperText={touched.position && errors.position}
					/>
					<FormControl fullWidth className="selectContainer">
						<InputLabel
							error={
								touched.employementStatus && Boolean(errors.employementStatus)
							}
							id="employementStatusLabel"
						>
							وضعیت شغلی
						</InputLabel>
						<Select
							labelId="employementStatusLabel"
							id="employementStatus"
							variant="outlined"
							fullWidth
							label="وضعیت شغلی"
							value={values.employementStatus}
							onChange={(e) => {
								setFieldValue("employementStatus", e.target.value);
							}}
							error={
								touched.employementStatus && Boolean(errors.employementStatus)
							}
						>
							<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
								<em>انتخاب کنید</em>
							</MenuItem>
							<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
								شاغل
							</MenuItem>
							<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
								غیر شاغل
							</MenuItem>
						</Select>
						<FormHelperText
							error={
								touched.employementStatus && Boolean(errors.employementStatus)
							}
						>
							{touched.employementStatus && errors.employementStatus}
						</FormHelperText>
					</FormControl>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="personelCode"
						label="کد پرسنلی"
						type="number"
						fullWidth
						variant="outlined"
						value={values.personelCode}
						onChange={handleChange}
						error={touched.personelCode && Boolean(errors.personelCode)}
						helperText={touched.personelCode && errors.personelCode}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="colorCode"
						label="کد رنگی"
						type="color"
						fullWidth
						variant="outlined"
						value={values.colorCode}
						onChange={handleChange}
						error={touched.colorCode && Boolean(errors.colorCode)}
						helperText={touched.colorCode && errors.colorCode}
					/>
				</Form>
			)}
		</Formik>
	);
}
