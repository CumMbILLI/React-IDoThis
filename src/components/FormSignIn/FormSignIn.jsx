import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/Form.css";
import TextField from "../TextField";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function FormSignIn() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    validateOnBlur: true,
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form_sign_in">
        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.userName}
          name="userName"
          touched={touched.userName}
          error={errors.userName}
          title="User Name"
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.password}
          name="password"
          touched={touched.password}
          error={errors.password}
          title="Password"
          type = "password"
        />

        <button type="submit" className="but_sub">
          Sign In
        </button>
      </div>
    </form>
  );
}

export { FormSignIn };
