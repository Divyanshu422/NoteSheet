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
  *         Step 1: Import ErrorMessage from Formik.
  *         Step 2: Replace manual error rendering with <ErrorMessage> component.
  *         Step 3: Set the name prop in <ErrorMessage> to match the name attribute of the corresponding <Field> component 
  *                 for each form field.
  * 
  * 
  ! Earlier code:
          {
            FormikObject.touched.email && FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
          }
  !    New code:
  *      <ErrorMessage name = 'name'/>
  *       the name prop passed to the ErrorMessage component is equal to the name attributed on the field component. the ErrorMessage component
  *       will render the error message for the particular field indicated by the name prop Only if field is visited and error exist.
  *       this means that ErrorMessage component has inbuilt => touched and errors object facilities
*/

import React from 'react'
import { Form, Field, Formik, ErrorMessage  } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
      // Define the validation rules for each field
      name: Yup.string().required('Required the name'),
      email: Yup.string().required('Email is required').email('Invalid email format'),
      channel: Yup.string().required('Required the channel name')
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
              <Field type='text' id ='name' name='name'/>
              <ErrorMessage name = 'name'/>
          </div>
          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <Field type='email' id ='email' name='email' />
              <ErrorMessage name = 'email'/>
          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <Field type='text' id ='channel' name='channel' />
              <ErrorMessage name = 'channel'/>
          </div>
            <button type = 'submit'>Submit</button>
        </Form>
    </Formik>
  )
}
export default YoutubeForm
