import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../../panelPersonal/profile/profile.css";

const initialValues = {
	name: "",
	description: "",
	picture: "",
	backgroundPicture: "",
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام دسته بندی را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
	picture: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("لینک تصویر را وارد کنید"),
	backgroundPicture: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("لینک تصویر زمینه را وارد کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function CategoryAdd(props) {
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
					<div className="mainPanelTitle bold">اضافه کردن دسته بندی</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="name"
							label="نام دسته بندی"
							type="text"
							fullWidth
							variant="outlined"
							value={values.name}
							onChange={handleChange}
							error={touched.name && Boolean(errors.name)}
							helperText={touched.name && errors.name}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="description"
							label="توضیحات"
							multiline
							maxRows={4}
							minRows={2}
							type="text"
							fullWidth
							variant="outlined"
							value={values.description}
							onChange={handleChange}
							error={touched.description && Boolean(errors.description)}
							helperText={touched.description && errors.description}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="picture"
							className="profileInput"
							label="لینک تصویر"
							type="text"
							fullWidth
							variant="outlined"
							value={values.picture}
							onChange={handleChange}
							error={touched.picture && Boolean(errors.picture)}
							helperText={touched.picture && errors.picture}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="backgroundPicture"
							className="profileInput"
							label="لینک تصویر زمینه"
							type="text"
							fullWidth
							variant="outlined"
							value={values.backgroundPicture}
							onChange={handleChange}
							error={
								touched.backgroundPicture && Boolean(errors.backgroundPicture)
							}
							helperText={touched.backgroundPicture && errors.backgroundPicture}
						/>
					</div>
					<div className="profileInputContainer">
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							color="error"
							onClick={(event) => navigate("/admin/category")}
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
							اضافه کردن
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
