/*
  * Introducing the Field component for the input tag:
  * as of now for every field we specify the getFieldprop helper method with attribute name as the parameter. this is common pattern used
  * in every field. 
  ! Code:  <input type='text' id ='name' name='name' { ...FormikObject.getFieldProps('name')}/>
  * so to overcome this common patter -> formik provides the Form component
*/

/*
  ! Steps 
  * Import the Field tag from Formik
  * Replace the input tag with Field Component
  * Eliminate the get field props helper method from each field (name, email, channel).
  ! Code Becomes:  <Form type='text' id ='name' name='name'/>
*/
/*
  * there are 2 things which Field components do:
  *   1. it hooks up the input field behind the scene and add the input field to the Field Component
  *   2. It uses the name component to match up the form state
*/
import React from 'react'
import { formik, Field, Form } from 'formik'
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
              {
                FormikObject.touched.name && FormikObject.errors.name ? (<div className='error'>{FormikObject.errors.name}</div>):(null)
              }
          </div>
          <div className='form-control'>
              <label htmlFor='email'>Email:</label>
              <Form type='email' id ='email' name='email' />
              {
               FormikObject.touched.email && FormikObject.errors.email ? (<div className='error'>{FormikObject.errors.email}</div>):(null)
              }
          </div>
            
          <div className='form-control'>
              <label htmlFor='channel'>Channel:</label>
              <Form type='text' id ='channel' name='channel' />
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
