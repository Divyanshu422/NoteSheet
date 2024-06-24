/*
  * The form's validation function runs on each keystroke against the entire 
  * form's values, causing all error messages to be displayed immediately, 
  * even for fields the user hasn't interacted with yet. Problem Identified: 
  * Displaying error messages for all fields, regardless of user interaction, 
  * creates a poor user experience, especially if there are many fields.
*/
/* 
  ! Solution: 2 steps
  * To track user interaction with fields, add the `onBlur prop` to form input elements, 
  * passing in FormikObject.handleBlur, a helper method from Formik.
  !              onBlur = FormikObject.handleBlur
  TOdO: 
  <input type='text' id ='name' name='name' onChange = {FormikObject.handleChange} value = {FormikObject.values.name} onBlur= {FormikObject.handleBlur}/>
  * Formik stores information about visited fields in the touched object, which has 
  * the same shape as the values object and updates to reflect user interactions.
  *
  ! Step 2: 
  * Formik stores information about visited fields in the `touched object`, which has the 
  * same shape as the values object and updates to reflect user interactions.
   TODO: 
   console.log('Visited fields are ', FormikObject.touched)
  * With the touched object providing data on visited fields, the next step is to improve the UX by 
  * only displaying error messages for fields the user has interacted with.
  * The handleBlur method from Formik is used as the event handler for the onBlur event of input fields. 
  * This updates the touched object, which is then used to conditionally display error messages, 
  * providing a better user experience in form validation.
*/


/*
  * The touched object in Formik keeps track of the fields that have been visited, allowing for 
  * improved validation UX by showing error messages only for fields that have been interacted with.
  * Error messages are rendered only if the field has an error and has been visited (blur event). 
  * This is achieved by checking both formik.touched.fieldName and formik.errors.fieldName.


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

  // Visited fields => saved in the object provided by FormikObject which is touched
  console.log('Visited fields are ', FormikObject.touched)

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
              {/* * Adding the touched object => so that error is displayed only of the fields which 
                    user has visited  */}
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
