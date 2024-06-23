/*
  ! Displaying the Error on the UI
  * Formik provides an errors object that, similar to the values object, contains key-value pairs for each 
  * form field, where the keys are the form field names and the values are the error messages specified 
  * in the validate function.
  * to display the error on the UI we need to apply the object.notations [FormikObject.error.(fieldname)]
*/
/*
  * The formicObject provided by the formik hook contains lot of properties and method (like values, errors, 
  * handleSubmit, handleChange etc). it is this formicObject which provides the errors object which is used
  * to display error message (created in previous lecture) on the UI.
  * this error message will be populated with the same values as specified in the validate function 
*/
import React from 'react'
import { Formik, useFormik } from 'formik'

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
    validate,
  }); 

  // Logging the  the values on the console:
  console.log('the data entered by the user', FormikObject.values);
  // Logging the error on the console:
  console.log('the error message', FormikObject.errors);

  return (
    <div>
        <form onSubmit={FormikObject.handleSubmit}>
          <div className='form-control'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id ='name' name='name' onChange = {FormikObject.handleChange} value = {FormikObject.values.name}/>
              {/* Displaying the error: if user clicked on the submit button without providing the values to the field
                  then the error object has the value 'Required' for each field -> as done in previous commit .*/}
              {/* By default the value to the FormikObject.errors.(fieldName) is Required. */}
              {/*  Error messages are displayed conditionally in JSX under each input element. If an error message 
                  exists for a field (e.g., formik.errors.name), it is rendered; otherwise, it renders null. */}
              {/* To properly display error messages, each form control is enclosed in a div tag with the 
                  class form-control, and error messages are given the class error.  */}
              {/* If user has provided the value to the input tag then FormikObject.errors.name will be equal to 
                  null. then the 2nd property will be rendered */}
              {
                FormikObject.errors.name ? (<div className='error'>{FormikObject.errors.name}</div>):(null)
              }
          </div>


          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id ='email' name='email' onChange = {FormikObject.handleChange} value = {FormikObject.values.email}/>
              {
                FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
              }

          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <input type='text' id ='channel' name='channel' onChange = {FormikObject.handleChange} value = {FormikObject.values.channel} />
              {
                FormikObject.errors.channel ? (<div className='error'> {FormikObject.errors.channel}</div>):(null)
              }
          </div>

            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
