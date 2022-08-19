import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../../../panelPersonal/profile/profile.css";

const initialValues = {
  name: "",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    // .matches(
    // 	/ /,
    // 	""
    // )
    .required("ویژگی سازمان را وارد کنید"),
});

const submit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

export default function ComplementTypeEdit(props) {
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
          <div className="mainPanelTitle bold">ویرایش ویژگی سازمان</div>
          <div className="profileInputContainer">
            <TextField
              autoFocus
              dir="rtl"
              margin="dense"
              id="name"
              label="ویژگی سازمان"
              type="text"
              fullWidth
              variant="outlined"
              className="profileInput"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </div>
          <div className="profileInputContainer">
            <Button
              variant="outlined"
              className="profileInput"
              component="label"
              margin="dense"
              color="error"
              onClick={(event) => navigate("/admin/complementType")}
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
