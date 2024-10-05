import "./Register.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageTransition from "../../Parts/Animation/PageTransition";
import { useToast } from "../../../Contexts/ToastContext";
function Register() {
  const navigate = useNavigate();

  const { showToast } = useToast();

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch(
        "https://tour-managment-three.vercel.app/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.message === "User created successfully") {
        navigate("/login");
        showToast(data.message, "success");
      } else {
        setErrors({ serverError: data.message });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register </title>
      </Helmet>
      <div className="background">
        <div>
          <div className="d-flex justify-content-center my-5 ">
            <div className="row w-75 h-100 shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="col-md-6 p-0 rounded-start ">
                <img
                  src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?t=st=1721249629~exp=1721253229~hmac=9f7baf397b4d47b93e048ad1e41552d8c46a8d02eb356fa7aa739f7e4d79faeb&w=740"
                  className="img-fluid rounded-start "
                />
              </div>
              <div className="col-md-6 login d-flex flex-column justify-content-center align-items-center rounded-end ">
                <h1
                  className="text-center my-2"
                  style={{ fontFamily: "Sofia" }}
                >
                  Register
                </h1>

                <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors }) => (
                    <Form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email{" "}
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <Field
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                      {errors.serverError && (
                        <div className="alert alert-danger">
                          {errors.serverError}
                        </div>
                      )}
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </div>

                      <p>
                        Already have an account?{" "}
                        <NavLink to="/login">Login</NavLink>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTransition(Register);
