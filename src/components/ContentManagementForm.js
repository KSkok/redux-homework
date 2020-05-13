import React from 'react';
import PropTypes from 'prop-types';
import SanaText from './SanaText';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContentManagementSchema = Yup.object().shape({
  sanaTextId: Yup.string().required(),
  defaultLanguage: Yup.string().required(),
  alternativeLanguage: Yup.string().required(),
});

const ContentManagementForm = ({ handleSubmit }) => {
  return (
    <>
      <h1>
        <SanaText textKey="contentManagementHeader" />
      </h1>
      <Formik
        initialValues={{
          sanaTextId: '',
          defaultLanguage: '',
          alternativeLanguage: '',
        }}
        validationSchema={ContentManagementSchema}
        validateOnChange
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <strong>
                <label htmlFor="sanaTextId">
                  <SanaText textKey="sanaTextId" />
                </label>
              </strong>
            </div>
            <div>
              <Field name="sanaTextId" className={errors.userName && 'error'} />
            </div>
            <div className="input-feedback">
              <ErrorMessage name="sanaTextId" />
            </div>
            <div>
              <strong>
                <label htmlFor="defaultLanguage">
                  <SanaText textKey="defaultLanguage" />
                </label>
              </strong>
            </div>
            <div>
              <Field name="defaultLanguage" className={errors.userName && 'error'} />
            </div>
            <div className="input-feedback">
              <ErrorMessage name="defaultLanguage" />
            </div>
            <div>
              <strong>
                <label htmlFor="alternativeLanguage">
                  <SanaText textKey="alternativeLanguage" />
                </label>
              </strong>
            </div>
            <div>
              <Field name="alternativeLanguage" className={errors.userName && 'error'} />
            </div>
            <div className="input-feedback">
              <ErrorMessage name="alternativeLanguage" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submitButton">
              <SanaText textKey="submitTextButton" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

ContentManagementForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContentManagementForm;