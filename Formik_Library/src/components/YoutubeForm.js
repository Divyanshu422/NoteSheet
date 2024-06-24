/*
  * Simplifying the code using the boilerPlate code
  * 1. we have removed the validate Function from the code as we are using the validate Schema.
  * 2. In the code there are 3 props in the input fields which are almost similar which are:
  *               - onChange
  *               - onBlur
  *               - value prop
  ToDo:  
    <input type='email' id ='email' name='email' onChange = {FormikObject.handleChange} value = {FormikObject.values.email}/>
*/

/*
  * So formik is going to provide `getFieldprops` which will behind the schene add these 3 props
  * to the input field.  Instead of manually adding onChange, onBlur, and value props to each 
  * form field, getFieldProps consolidates these operations into a single line of code per field.
  * Requires passing the name attribute of each form field as an argument to getFieldProps, 
  * which then handles the assignment of necessary props internally.
*/

/*
  ! Earlier code:
    *  <input type='text' id ='name' name='name' onChange = {FormikObject.handleChange} value = {FormikObject.values.name} onBlur= {FormikObject.handleBlur}/>
  ! New code:
    *  <input type='text' id ='name' name='name' { ...FormikObject.getFieldProps(name)}/>
    *       use of spread operator is mandatory
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
    </div>
  )
}

export default YoutubeForm
