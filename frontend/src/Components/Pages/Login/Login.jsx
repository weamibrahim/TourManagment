import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLogin } from '../../../Contexts/LoginContext';
import PageTransition from '../../Parts/Animation/PageTransition';
const Login = () => {
  const navigate = useNavigate();
  const {  setIsLogin } = useLogin();

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
        setIsLogin(true);
        if(data.user.role === "admin") navigate('/dashboard')
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
      <div >
       
        <div className='d-flex justify-content-center my-5 '>
        <div className='row w-75 h-100 shadow p-3 mb-5 bg-body-tertiary rounded'>
         
          <div className='col-md-6 login d-flex flex-column justify-content-center align-items-center rounded-start ' >
          <h1 className='text-center my-2' style={{  fontFamily: "Sofia"}}>Login</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form   className=''>
                <div className="mb-3 px-5 ">
                  <label htmlFor="email" className="form-label">EMAIL</label>
                  <Field type="email" name="email" className="form-control " />
                  <ErrorMessage name="email" component="div"  className='alert alert-danger my-2'/>
                </div>
                <div className="mb-3 px-5">
                  <label htmlFor="password" className="form-label">PASSWORD</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div"className='alert alert-danger my-2' />
                </div>
                {errors.serverError && <div className='alert alert-danger my-2'>{errors.serverError}</div>}
                <div className='d-flex justify-content-center px-5'>
                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>Login</button>
                </div>
                <p className='text-center mt-3'>Don't have an account? <NavLink to="/register">Register</NavLink></p>
              </Form>
            )}
          </Formik>
          </div>
          <div className='col-md-6 p-0 rounded-end ' >
            <img  src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?ga=GA1.2.1070693569.1706463458&semt=sph' className='img-fluid rounded-start '/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTransition(Login);
