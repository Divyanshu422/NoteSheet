/*
  * Lecture 4 : Handling the submission of form 
    *      There are 2 step to handle the submission using formik:
    *       1. specify the onSubmit handler on the form tag whose value is equal to 
    *               FormikObject.handleSubmit (FormikObject is the object returned by hook) => Line 45
    * 
    *       2. Define the onSubmit property in the useFormik hook. the property 
    *           calls the callBack function. this callBack function receive 'values'
    *           property as the parameter. values stores the current state value of 
    *           each field.     =================> Line 37
    *           the values incorporate the all values of field which we have accessed
    *           using formik.values
    *       3. when we click on the submit button => formik will automatically execute
    *           the onSubmit property defined inside the useHook
*/

/*
   
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
    /* 
      * Defining the onSubmit property: this property is a method which automatically receives the 
      * Form state as its argument -> in the name of `values`.
      * as told above the onSubmit is an method/Function. using the arrow function with values as parameter passed.
      * the values is an inbuilt object provided by the FormikObject.
      * the onSubmit button is automatically executed when the we click the submit button
      */
    onSubmit: (values) => {
      console.log('the form data provided by the user is ',values);
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
