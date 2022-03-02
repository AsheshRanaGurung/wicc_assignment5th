import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import "../Wicc.scss";

function FormikCreation() {
  const initialValues = { name: "", phone: "", address: "", description: "" };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    phone: Yup.number().required(),
    address: Yup.string().required(),
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
          <div className="content" style={{ width: "24rem" }}>
            <Form>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter your Full name"
                value={values.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <span style={{ color: "red" }}>{errors.name}</span>
              ) : null}
              <br />
              Phone number:
              <input
                className="form-control"
                name="phone"
                placeholder="Enter your phone number "
                value={values.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              ></input>
              {errors.phone && touched.phone ? (
                <span style={{ color: "red" }}>{errors.phone}</span>
              ) : null}
              <br />
              Address:
              <input
                className="form-control"
                name="address"
                placeholder="Enter your address"
                value={values.address}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              ></input>
              {errors.address && touched.address ? (
                <span style={{ color: "red" }}>{errors.address}</span>
              ) : null}
              <br />
              Details:
              <input
                className="form-control"
                name="description"
                placeholder="Enter details of location"
                value={values.description}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              ></input>
              {errors.description && touched.description ? (
                <span style={{ color: "red" }}>{errors.description}</span>
              ) : null}
              <br />
              <button
                style={{ display: "contents" }}
                className="success"
                type="submit"
                disabled={isSubmitting === true}
              >
                <div className="primary-btn text" style={{ color: "white" }}>
                  Buy
                </div>
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormikCreation;
