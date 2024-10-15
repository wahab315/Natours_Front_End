import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../store/app/users/action";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(
    (state) => state.userManagement
  );

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Sign In form data", values);
    dispatch(signInUser(values));

console.log(signInUser());

  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="form">
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

            <button
              type="submit"
              className="submit-button"
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
