/*
  * Lecture 4 : Managing the state 
  * * In the youtube form we have 3 field => name, email, channel. To track these 3 
    * fields we need the state variable for that. But in the case of formik => no need 
    * to create the state variable rather it is useFormik() which return the object (FormikObject), 
    * which will track the state.
*/

/*
    * Step 1: as discussed the useFormik hook consume the object. so the first property
    * we need to pass is the initialValues (Camel_Case). 
    ! Line 30
    * the initialValue property is an object which takes the initial values for all the form field => 
    * name, email, channel. 
    *     Note: the properties for initialValue corresponds to the name attribute to the form fields.
    */

    /*
      ! For managing the state
        * we need to add the onChange and values prop for each of the field property.
        ! onChange={formik.handleChange}. handleChange is the method give by hook.
        ! values = {formik.values.name}. values is property provided by the hook
*/
import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {

  /* 
    * passing the property to the hook => initialValue (CamelCase). the initialValue property takes the object.
    * the object contains the key which are identical to the name attribute of all the input fields
  */ 
  const FormikObject = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
  });

  console.log('The values entered to the field is stroed in the values object', FormikObject.values)
  
  return (
    <div>
        <form>

            {/* Adding the onChange and values prop for each of the field */}
            {/* This is the position where formik Constant will come to picture. for the onChange we assign ?
                value as formikObject.handleChange and for the value attribute => it shall be formikObject.values.(name of attribute).
                By assigning the value => the formik will automatically trace the value for You on change of input field [which was done using useState]
                the onchange handle will track the value of each field and interally updates the value to the values parameter. */}

                {/* the values parameter is an object which store the value of each field. To see it run the code and check the console screen. Line 41 */}
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
