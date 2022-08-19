import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { typeRows } from "../../../../Data/Organization";
import { packageRows } from "../../../../Data/Package";
import { useNavigate } from "react-router-dom";
import "../../../panelPersonal/profile/profile.css";


let typeRowsAutoComplete = [];

for (let i = 0; i < typeRows.length; i++) {
	typeRowsAutoComplete[i] = typeRows[i].name;
}

let packageRowsAutoComplete = [];

for (let i = 0; i < packageRows.length; i++) {
	packageRowsAutoComplete[i] = packageRows[i].name;
}

const initialValues = {
	name: "",
	address: "",
	postCode: "",
	contactNumber: "",
	emailAddress: "",
	description: "",
	customData: "",
	refCode: "",
	typeId: "",
	plan: "",
	planExpDate: "",
	excutiveUsername: "",
	executivePassoword: "",
};

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام سازمان را وارد کنید"),
	address: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آدرس را وارد کنید"),
	postCode: yup
		.number()
		.typeError("کد پستی باید عدد باشد")
		.required("کد پستی را وارد کنید"),
	contactNumber: yup
		.number()
		.typeError("شماره تماس باید عدد باشد")
		.required("شماره تماس را وارد کنید"),
	emailAddress: yup
		.string()
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
			"ایمیل را با ساختار صحیح وارد کنید"
		)
		.required("ایمیل را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
	customData: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("اطلاعات را وارد کنید"),
	refCode: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("کد ارجاع را وارد کنید"),
	typeId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع سازمان را انتخاب کنید"),
	plan: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("طرح را انتخاب کنید"),
	planExpDate: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("تاریخ انقضا طرح را وارد کنید"),
	excutiveUsername: yup
		.string()
		.matches(
			/^[A-Za-z][A-Za-z0-9_]{5,}$/,
			"باید شامل 5 حرف باشد و با حرف انگلیسی شروع شود. فقط حروف انگلیسی، شماره ها و زیر خط مجاز است."
		)
		.required("نام کاربری مدیر را وارد کنید"),
	executivePassoword: yup
		.string()
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"باید شامل 8 حرف، یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی، یک شماره و یک علامت خاص باشد."
		)
		.required("گذرواژه مدیر را وارد کنید"),
});

const submit = (values) => {
	alert(JSON.stringify(values, null, 2));
};

export default function OrganizationEdit(props) {
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
					<div className="mainPanelTitle bold">ویرایش سازمان</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="name"
							label="نام سازمان"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.name}
							onChange={handleChange}
							error={touched.name && Boolean(errors.name)}
							helperText={touched.name && errors.name}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="address"
							label="آدرس"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.address}
							onChange={handleChange}
							error={touched.address && Boolean(errors.address)}
							helperText={touched.address && errors.address}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="postCode"
							label="کد پستی"
							type="number"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.postCode}
							onChange={handleChange}
							error={touched.postCode && Boolean(errors.postCode)}
							helperText={touched.postCode && errors.postCode}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="contactNumber"
							label="شماره تماس"
							type="tel"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.contactNumber}
							onChange={handleChange}
							error={touched.contactNumber && Boolean(errors.contactNumber)}
							helperText={touched.contactNumber && errors.contactNumber}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="emailAddress"
							label="ایمیل"
							type="email"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.emailAddress}
							onChange={handleChange}
							error={touched.emailAddress && Boolean(errors.emailAddress)}
							helperText={touched.emailAddress && errors.emailAddress}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="description"
							label="توضیحات"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.description}
							onChange={handleChange}
							error={touched.description && Boolean(errors.description)}
							helperText={touched.description && errors.description}
						/>
					</div>
					<div className="profileInputContainer">
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							id="logoFileName"
							sx={{ padding: "15px 0", marginTop: "4px" }}
							fullWidth
						>
							آپلود لوگو <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="customData"
							label="اطلاعات"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.customData}
							onChange={handleChange}
							error={touched.customData && Boolean(errors.customData)}
							helperText={touched.customData && errors.customData}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="refCode"
							label="کد ارجاع"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.refCode}
							onChange={handleChange}
							error={touched.refCode && Boolean(errors.refCode)}
							helperText={touched.refCode && errors.refCode}
						/>
						<Autocomplete
							fullWidth
							id="typeId"
							name="typeId"
							margin="dense"
							className="profileInput"
							options={packageRowsAutoComplete}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"typeId",
									value !== null ? value : initialValues.package
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="نوع سازمان"
									fullWidth
									name="typeId"
									value={values.typeId}
									error={touched.typeId && Boolean(errors.typeId)}
									helperText={touched.typeId && errors.typeId}
									{...params}
								/>
							)}
						/>
					</div>
					<div className="profileInputContainer">
						<Autocomplete
							fullWidth
							id="plan"
							name="plan"
							margin="dense"
							className="profileInput"
							options={packageRowsAutoComplete}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"plan",
									value !== null ? value : initialValues.package
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="طرح"
									fullWidth
									name="plan"
									value={values.plan}
									error={touched.plan && Boolean(errors.plan)}
									helperText={touched.plan && errors.plan}
									{...params}
								/>
							)}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="planExpDate"
							label="تاریخ انقضا طرح"
							type="date"
							fullWidth
							variant="outlined"
							className="profileInput"
							InputLabelProps={{ shrink: true }}
							value={values.planExpDate}
							onChange={handleChange}
							error={touched.planExpDate && Boolean(errors.planExpDate)}
							helperText={touched.planExpDate && errors.planExpDate}
						/>
					</div>
					<div className="profileInputContainer">
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="excutiveUsername"
							label="نام کاربری مدیر"
							type="text"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.excutiveUsername}
							onChange={handleChange}
							error={
								touched.excutiveUsername && Boolean(errors.excutiveUsername)
							}
							helperText={touched.excutiveUsername && errors.excutiveUsername}
						/>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="executivePassoword"
							label="گذرواژه مدیر"
							type="password"
							fullWidth
							variant="outlined"
							className="profileInput"
							value={values.executivePassoword}
							onChange={handleChange}
							error={
								touched.executivePassoword && Boolean(errors.executivePassoword)
							}
							helperText={
								touched.executivePassoword && errors.executivePassoword
							}
						/>
					</div>
					<div className="profileInputContainer">
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							color="error"
							onClick={(event) => navigate("/admin/organization")}
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
