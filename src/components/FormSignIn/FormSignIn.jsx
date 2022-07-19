import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/Form.css";
import TextField from "../TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

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
  const [typeFieldPas, setTypeFieldPas] = useState('password');

  const ChangeType = () =>() => {
    setTypeFieldPas(typeFieldPas === 'password'? 'text' : 'password')
  };

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

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <form className="form_flex" onSubmit={handleSubmit}>
      <div className="form">
        <div className="content_form">
          <div className="account_but">
            <h2 className="title_block">Account Sign In</h2>
            <Link to="/sign-up" className="but_link">
              Sign Up
            </Link>
          </div>

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
            type={typeFieldPas}
            ChangeType={ChangeType}
          />

          <button type="submit" className="but_sub">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}

export { FormSignIn };
