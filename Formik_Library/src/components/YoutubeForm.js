/*
  * Yup is introduced as an alternative way to define validation rules in Formik.
  * Yup is utilized to define a validationSchema object where rules for form fields 
  * are specified. Examples include 
  *         1. name as required (yup.string().required('Required')) and 
  *         2. email as required and must match email format 
  *                       (yup.string().email('Invalid email format').required('Required')).
*/

/*
  * Step 1: Define the validation schema for the input fields
  * Step 2: The validationSchema object is integrated with Formik using the validationSchema 
  *         property directly within useFormik() instead of a custom validate function.
  * 

*/

import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'


//! Validations schema
  const validationSchema = Yup.object({
      // Define the validation rules for each field
      name: Yup.string().required('Required the name'),
      email: Yup.string().required('Email is required').email('Invalid email format'),
      channel: Yup.string().required('required')
  })


const initialValues =  {
  name: '',
  email: '',
  channel: '',
};
const onSubmit = (values) => {
  console.log('the form data provided by the user is ',values);
};
const validate =  (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
}

function YoutubeForm() {
  const FormikObject = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  }); 


  return (
    <div>
        <form onSubmit={FormikObject.handleSubmit}>
          <div className='form-control'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id ='name' name='name' onChange = {FormikObject.handleChange} value = {FormikObject.values.name} onBlur= {FormikObject.handleBlur}/>
           
              {
                FormikObject.touched.name && FormikObject.errors.name ? (<div className='error'>{FormikObject.errors.name}</div>):(null)
              }
          </div>

          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id ='email' name='email' onChange = {FormikObject.handleChange} value = {FormikObject.values.email}/>

              {
               FormikObject.touched.email && FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
              }
          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <input type='text' id ='channel' name='channel' onChange = {FormikObject.handleChange} value = {FormikObject.values.channel} />
              {
                FormikObject.touched.channel && FormikObject.errors.channel ? (<div className='error'> {FormikObject.errors.channel}</div>):(null)
              }
          </div>

            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
