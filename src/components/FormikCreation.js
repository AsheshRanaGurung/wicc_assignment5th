import React from "react";
import { Formik, Form } from "formik";
// import Header from "./Header";
import * as Yup from "yup";
import "../Wicc.scss";

function FormikCreation() {
  const initialValues = { name: "", description: "", priority: "0" };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 3000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <div className="content">
            <div className="lecture">
              <Form className="lecture-add" id="lecture-add">
                <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Enter your task "
                        value={values.name}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      />
                      <br />
                      {errors.name && touched.name ? (
                        <span style={{ color: "red" }}>{errors.name}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        name="priority"
                        className="form-control"
                        placeholder="Select your priority "
                        value={values.priority}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        <option value="0">Low</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="description"
                        placeholder="Enter your description "
                        rows="4"
                        value={values.description}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                      ></textarea>
                      <br />
                      {errors.description && touched.description ? (
                        <span style={{ color: "red" }}>
                          {errors.description}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <button
                  className="success"
                  type="submit"
                  disabled={isSubmitting === true}
                >
                  Add
                </button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormikCreation;
