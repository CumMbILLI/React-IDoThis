import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/Form.css";
import TextField from "../TextField";
import { Link } from "react-router-dom";

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
    type: "text",
  },
  {
    name: "email",
    title: "Email",
    type: "text",
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
  const [fields, setFields] = useState(ARR_FIELD);

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

  const ChangeType = (fieldName) => () => {
    setFields((prev) =>
      prev.map((field) => {
        if (field.name === fieldName) {
          return {
            ...field,
            type: field.type === "password" ? "text" : "password",
          };
        }
        return field;
      })
    );
  };

  return (
    <form className="form_flex" onSubmit={handleSubmit}>
      <div className="form">
        <div className="content_form">
          <div className="account_but">
            <h2 className="title_block">Account Sign Up</h2>
            <Link
              to="/sign-in"
              className="but_link"
            >
              Sign In
            </Link>
          </div>
          {fields.map(({ name, title, type }) => (
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
              ChangeType={ChangeType}
            />
          ))}

          <button type="submit" className="but_sub">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export { FormSignUp };
