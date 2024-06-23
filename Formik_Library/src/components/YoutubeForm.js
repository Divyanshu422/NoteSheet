/*
  * Lecture 5 and 6: Form validation
  *   Formik allows the developer to define the validation function which is passed to the hook using the validate property.
  *   the validate property just like the onSubmit property, receives the `values` object as its parameter. This `values object`
  *   contains the current values of the form fields.
*/

/*
 ! What validate function comprises of which is passed to validate property of the hook?
 * 1. The validate function must return an object called errors. This object will hold error messages for each form 
 *    field that fails validation.
 * 2. The keys of the errors object should correspond to the names of the form fields. For example, if the form fields are 
 *    name, email, and channel, the errors object should have keys like errors.name, errors.email, and errors.channel.
 * 3. The values of the keys in the errors object should be strings that represent the error messages. For example, if the 
 *    name field is empty, errors.name might be set to "required".
*/

import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {
  const FormikObject = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log('the form data provided by the user is ',values);
    },
    validate: (values) => {
      // Creating the object with the name errors -> which is returned
      const errors = {};
      
      // checking for name field => if values.name is not present then the errors.name hold the error Required.
      if (!values.name) {
        // the keys of the error object need to same as the values object
        errors.name = 'Required';
      }
    
      if (!values.email) {
        errors.email = 'Required';
      } 
      // Checking the email for the regex
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
      }
    
      if (!values.channel) {
        errors.channel = 'Required';
      }
      // retuning the errors object.
      return errors;
    }
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
