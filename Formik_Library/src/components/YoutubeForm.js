/*
  * Adding the Form component:
  *  1. import the Form from Formik
  *  2. <Form> component simplifies form handling by automatically integrating with Formik's handleSubmit method.
  *  3. It replaces the standard HTML <form> element in React applications and remove the onSubmit prop populated in the Form element
  *           Earlier code:  <form onSubmit={FormikObject.handleSubmit}>
  *           Node Code: <Form> 
*/


/*
    * hence 2 steps is followed 
    * Step 1: import the Form component form the formik -> Line 19
    * Step 2: replace the form tag with Form component and remove the onSubmit button -> Line 46

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
        <Form>
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
        </Form>
    </Formik>
  )
}
export default YoutubeForm
