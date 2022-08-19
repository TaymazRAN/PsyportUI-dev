import React from "react";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import "./formRegister.css";
import { Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import { userRows } from "../../Data/Users";

let jobAutoComplete = [];

for (let i = 0; i < userRows.length; i++) {
  jobAutoComplete[i] = userRows[i].currentOccupation;
}

export default function FormRegister() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
        <div className="widthFix signup boxshodow1">
          <div className="loginForm" dir="rtl">
            <div className="loginTitle bold">ساخت حساب کاربری</div>
            <div className="formInputContainer signup">
              <TextField
                className="formInput signup"
                variant="outlined"
                label="نام"
              />
              <TextField
                className="formInput signup"
                variant="outlined"
                label="نام خانوادگی"
              />
            </div>
            <div className="formInputContainer signup">
              <TextField
                className="formInput signup"
                variant="outlined"
                label="شناسه کاربری"
              />
              <TextField
                className="formInput signup"
                variant="outlined"
                type="number"
                label="کد ملی"
              />
            </div>
            <div className="formInputContainer signup">
              <FormControl className="formInput signup" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  رمز عبور
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
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
              </FormControl>
              <FormControl className="formInput signup" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  تکرار رمز عبور
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
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
                  label="تکرار رمز عبور"
                />
              </FormControl>
            </div>
            <div className="formInputContainer signup">
              <TextField
                className="formInput signup"
                variant="outlined"
                type="email"
                label="ایمیل"
              />
              <TextField
                className="formInput signup"
                variant="outlined"
                type="tel"
                label="شماره همراه"
              />
            </div>
            <div className="formInputContainer signup">
              <FormControl fullWidth className="formInput signup">
                <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="مرد"
                    sx={{ color: "#222222" }}
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="زن"
                    sx={{ color: "#222222" }}
                  />
                </RadioGroup>
              </FormControl>
              <div className="formInput signup">
                <Autocomplete
                  disablePortal
                  id="category"
                  options={jobAutoComplete}
                  className="formInput signup"
                  renderInput={(params) => (
                    <TextField {...params} label="شغل فعلی" />
                  )}
                />
              </div>
            </div>
            <div className="loginButtonContainer">
              <Button variant="outlined">ساخت حساب کاربری</Button>
            </div>
          </div>
        </div>
      </FormGroup>
    </div>
  );
}
