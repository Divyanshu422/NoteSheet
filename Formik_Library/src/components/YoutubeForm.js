/*
  * Using ES6 shorthand syntax for object literals
  * Refactoring the code:
  * moving the property of the useFormik hook at the top of the code
*/

import React from 'react'
import { useFormik } from 'formik'

// Placing the initialValue object at the top
const initialValues =  {
  name: '',
  email: '',
  channel: '',
};
// Placing the onSubmit object at the top
const onSubmit = (values) => {
  console.log('the form data provided by the user is ',values);
};
// Placing the validate object at the top
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

// P
function YoutubeForm() {
  const FormikObject = useFormik({
    // we are using ES6 shortHand Syntax to define the object literals
    initialValues,
    onSubmit,
    validate,
  }); 

  
  return (
    <div>
        <form onSubmit={FormikObject.handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id ='name' name='name' onChange = {FormikObject.handleChange} value = {FormikObject.values.name}/>

            <label htmlFor='email'>Email:</label>
            <input type='email' id ='email' name='email' onChange = {FormikObject.handleChange} value = {FormikObject.values.email}/>

            <label htmlFor='channel'>Channel:</label>
            <input type='text' id ='channel' name='channel' onChange = {FormikObject.handleChange} value = {FormikObject.values.channel} />

            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
