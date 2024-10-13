import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../store/app/users/action";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignupForm = () => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(
    (state) => state.userManagement
  );

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(signUpUser(values));
  };

  return (
    <div className="form-container">
      <h1>Signup Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input-field"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {errorMessage && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default SignupForm;
