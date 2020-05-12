import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SanaText from './SanaText';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  userName: Yup.string().required().label(),
});

const LoginForm = ({ handleSubmit }) => {
  return (
    <>
      <h1>
        <SanaText textKey="loginHeader" />
      </h1>
      <Formik
        initialValues={{
          userName: '',
        }}
        validationSchema={LoginSchema}
        validateOnChange
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);

        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <strong>
                <label htmlFor="userName">
                  <SanaText textKey="userName" />
                </label>
              </strong>
            </div>
            <div>
              <Field name="userName" className={errors.userName && 'error'} />
            </div>
            <div className="input-feedback">
              <ErrorMessage name="userName" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              <SanaText textKey="loginButton" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;