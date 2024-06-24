/*
  ! Introducing the Formik Component: to reduce the code
  * Formik components reduce boilerplate code by utilizing React context implicitly.
  * Key Components Covered: The tutorial focuses on four Formik components: Formik, Form, Field, and 
  * ErrorMessage.
*/

/* 
  * Using the Formik Component:
  *   1. Step 1 => import formik instead of useFormik
  Todo: Earlir code --------> import { useFormik } from 'formik'
  * NowCode:  ---------------> import { formik } from 'formik'
*/

/*  
  * Step 2 : remove the hook (useFormik) and 
  * Step 3 : wrap the form with Formik component and pass the property used in the hook to the component
  * Step 4 : pass the prop to the Formik Component as shown
  !             <Formik initialValues = {initialValues} onSubmit = {onSubmit} validationSchema ={validationSchema}>
*/

import React from 'react'
import { formik } from 'formik'
import * as Yup from 'yup'

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


function YoutubeForm() {
  //* Hook is romoved
  return (
    <Formik
      initialValues = {initialValues}
      onSubmit = {onSubmit}
      validationSchema ={validationSchema}
    >
        <form onSubmit={FormikObject.handleSubmit}>
          <div className='form-control'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id ='name' name='name' { ...FormikObject.getFieldProps('name')}/>
           
              {
                FormikObject.touched.name && FormikObject.errors.name ? (<div className='error'>{FormikObject.errors.name}</div>):(null)
              }
          </div>

          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id ='email' name='email' { ...FormikObject.getFieldProps('email')}/>
           

              {
               FormikObject.touched.email && FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
              }
          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <input type='text' id ='channel' name='channel' { ...FormikObject.getFieldProps('channel')}/>
              {
                FormikObject.touched.channel && FormikObject.errors.channel ? (<div className='error'> {FormikObject.errors.channel}</div>):(null)
              }
          </div>

            <button type = 'submit'>Submit</button>
        </form>
    </Formik>
  )
}

export default YoutubeForm
