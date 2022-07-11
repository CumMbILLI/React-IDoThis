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
  confirmPassword: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email().required("Required"),
});

const ARR_FIELD = [
  {
    name: "userName",
    title: "User Name",
  },
  {
    name: "email",
    title: "Email",
  },
  {
    name: "password",
    title: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    title: "Confirm Password",
    type: "password",
  },
];

function FormSignUp() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    validateOnBlur: true,
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form_sign_in">
        {/* <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.userName}
          name="userName"
          touched={touched.userName}
          error={errors[userName]}
          title="User Name"
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.email}
          name="email"
          touched={touched.email}
          error={errors.email}
          title="Email"
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.password}
          name="password"
          touched={touched.password}
          error={errors.password}
          title="Password"
          type="password"
        />

        <TextField
          handleBlur={handleBlur}
          handleChange={handleChange}
          value={values.confirmPassword}
          name="confirmPassword"
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
          title="Confirm Password"
          type="password"
        /> */}

        {ARR_FIELD.map(({ name, title, type }) => (
          <TextField
            key={name}
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values[name]}
            name={name}
            touched={touched[name]}
            error={errors[name]}
            title={title}
            type={type}
          />
        ))}

        <button type="submit" className="but_sub">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export { FormSignUp };
