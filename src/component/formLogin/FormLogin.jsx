import "./formLogin.css";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup
    .string("نام کاربری را وارد کنید")
    .matches(
      /^[A-Za-z][A-Za-z0-9_]{5,}$/,
      "باید شامل 5 حرف باشد و با حرف انگلیسی شروع شود. فقط حروف انگلیسی، شماره ها و زیر خط مجاز است."
    )
    .required("نام کاربری را وارد کنید"),
  password: yup
    .string("گذرواژه را وارد کنید")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "باید شامل 8 حرف، یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی، یک شماره و یک علامت خاص باشد."
    )
    .required("گذرواژه را وارد کنید"),
});

export default function FormLogin() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
		<div>
			<FormGroup
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: "40px",
					padding: "20px",
				}}
			>
				<div className="widthFix boxshodow1">
					<div className="signButtonContainer">
						<NavLink to="/login/register" className="signButton">
							<Button
								className="bold"
								variant="contained"
								sx={{
									fontSize: "16px",
									backgroundColor: "#49DEE9",
									color: "#ffffff",
									borderRadius: "20px",
									height: "40px",
									paddingLeft: "30px",
									paddingRight: "30px",
									boxShadow: "0 2px 5px #dddddd",
								}}
							>
								ساخـتن حسـاب کاربـری
							</Button>
						</NavLink>
						<ArrowBackIcon className="signArrow" />
					</div>
					<form className="loginForm" dir="rtl" onSubmit={formik.handleSubmit}>
						<div className="loginTitle bold">ورود به حساب کاربری</div>
						<div className="formInputContainer">
							<TextField
								className="formInput"
								variant="outlined"
								label="شناسه کاربری"
								id="username"
								name="username"
								value={formik.values.username}
								onChange={formik.handleChange}
								error={
									formik.touched.username && Boolean(formik.errors.username)
								}
								helperText={formik.touched.username && formik.errors.username}
							/>
							<FormControl className="formInput" variant="outlined">
								<InputLabel
									htmlFor="password"
									error={
										formik.touched.password && Boolean(formik.errors.password)
									}
								>
									رمز عبور
								</InputLabel>
								<OutlinedInput
									type={values.showPassword ? "text" : "password"}
									id="password"
									name="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									error={
										formik.touched.password && Boolean(formik.errors.password)
									}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{values.showPassword ? (
													<VisibilityOff className="passwordIcon" />
												) : (
													<Visibility className="passwordIcon" />
												)}
											</IconButton>
										</InputAdornment>
									}
									label="رمز عبور"
								/>
								<FormHelperText
									error={
										formik.touched.password && Boolean(formik.errors.password)
									}
								>
									{formik.touched.username && formik.errors.password}
								</FormHelperText>
							</FormControl>
						</div>
						<div className="loginFooter">
							<Button variant="contained">فراموشی رمز عبور</Button>
							<FormControlLabel
								className="formRadio"
								control={<Checkbox defaultChecked />}
								label=" مرا به خاطر بسپار"
							/>
						</div>
						<div className="loginButtonContainer">
							<Button color="secondary" variant="outlined" type="submit">
								تست
							</Button>
							<Button color="success" variant="outlined">
								<NavLink to="/admin" className="loginButton">
									ورود به حساب ادمین
								</NavLink>
							</Button>
							<Button color="info" variant="outlined">
								<NavLink to="/organization" className="loginButton">
									ورود به حساب سازمان
								</NavLink>
							</Button>
							<Button color="error" variant="outlined">
								<NavLink to="/user" className="loginButton">
									ورود به حساب کاربر
								</NavLink>
							</Button>
						</div>
					</form>
				</div>
			</FormGroup>
		</div>
	);
}
