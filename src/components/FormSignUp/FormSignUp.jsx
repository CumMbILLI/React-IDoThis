import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style/Form.css';
import TextField from '../TextField';
import axiosInstance from '../../utils/axiosInstance';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(4, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string().email().required('Required'),
});

const ARR_FIELD = [
  {
    name: 'username',
    title: 'User Name',
  },
  {
    name: 'email',
    title: 'Email',
  },
  {
    name: 'password',
    title: 'Password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    title: 'Confirm Password',
    type: 'password',
  },
];

function FormSignUp() {
  const [responseMessage, setResponseMessage] = useState({
    message: '',
    status: 0,
  });

  const onSubmit = async (values) => {
    try {
      const { data, status } = await axiosInstance.post(
        '/auth/register',
        values
      );
      setResponseMessage({
        message: data.message,
        status: status,
      })
    } catch (err) {
      setResponseMessage({
        message: err.response.data.message,
        status: err.response.status,
      })
    }
  };

  useEffect(() => {
    console.log(responseMessage);
  }, [responseMessage]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit,
    validationSchema,
    validateOnBlur: true,
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = formik;

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form_sign_in'>
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
        {<p className={`errorMessage _${responseMessage.status}`}>{responseMessage.message}</p>}
        <button type='submit' className='but_sub'>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export { FormSignUp };
