import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('https://tour-managment-three.vercel.app/api/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.status === "success") {
        navigate('/');
        localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        setErrors({ serverError: data.message });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='background'>
        <h1 className='text-center'>Login</h1>
        <div className='d-flex justify-content-center my-5 form'>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div"  className='alert alert-danger my-2'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div"className='alert alert-danger my-2' />
                </div>
                {errors.serverError && <div className='alert alert-danger my-2'>{errors.serverError}</div>}
                <div className='d-flex justify-content-center'>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Login</button>
                </div>
                <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
