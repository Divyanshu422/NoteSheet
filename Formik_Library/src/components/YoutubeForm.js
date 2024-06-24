/*
  * Error message component
  * Initially, error messages were manually rendered based on field visitation and error presence.
  *            {
  *              FormikObject.touched.name && FormikObject.errors.name ? (<div className='error'>{FormikObject.errors.name}</div>):(null)
  *            }
  * this is repetitive code: FormikObject.touched.name && FormikObject.errors.name 
*/
/*
  * Steps Involved: 
  *          1. Import the ErrorMessage component from the formilk:
  *          2. Remoe the error code which can be written till now
  *          3. pass the ErrorMessage compoenent with the prop name
  * 
        ! Earlier code:
         {
               FormikObject.touched.email && FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
          }

  *      New code:
  *      <ErrorMessage name = 'name'/>
*/

import React from 'react'
import { formik, Field, Formik, ErrorMessage  } from 'formik'
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
              <Form type='text' id ='name' name='name'/>
              <ErrorMessage name = 'name'/>
          </div>
          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <Form type='email' id ='email' name='email' />
              <ErrorMessage name = 'email'/>
          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <Form type='text' id ='channel' name='channel' />
              <ErrorMessage name = 'channel'/>
          </div>
            <button type = 'submit'>Submit</button>
        </Form>
    </Formik>
  )
}
export default YoutubeForm
