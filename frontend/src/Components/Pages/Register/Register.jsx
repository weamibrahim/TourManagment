import './Register.css';
import { useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Register() {


const navigate = useNavigate();

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});



const handleSubmit = async(values,{setSubmitting, setErrors}) =>{
    
    try {
        const response = await fetch('https://tour-managment-three.vercel.app/api/users/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data)
        if(data.message === "User created successfully"){
            navigate('/login')
       
        }
        
     
 else {
            setErrors({ serverError: data.message });
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setSubmitting(false);
    }

}









    return (
        <>
        <Helmet>
            <title>Register </title>
        </Helmet><div className='background'> 
             <h1 className='text-center'>Register</h1>
       <div className='d-flex justify-content-center my-5 form'>
      


<Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
>
    {({ isSubmitting ,errors}) => (
        <Form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="alert alert-danger" />
       </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <Field type="email" className="form-control" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="alert alert-danger" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" className="form-control" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="alert alert-danger" />
            </div>
            {errors.serverError && <div className="alert alert-danger">{errors.serverError}</div>}
<div className='d-flex justify-content-center'>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
</div>
            
<p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </Form>
    )}
</Formik>

</div>
        
    </div>
    </>
    );
}   

export default Register;