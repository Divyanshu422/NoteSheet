/*
  * Lecture 3: 
  * In this video we have installed the formik library using  `npm install formik --save'

  * Step 1: Import the useFormik hook form the formik.  (Line 26)
  *                    -  A hook is a function hence it must be called
  *                    -  the useFormik hook consume the object and return the object.
  *       the useFormik hook takes an object as a parameter and return
  *       a object which contains varities of methods and properties which are used in the 
  *       Form (like values property, onSubmit etc).
  *       In our code we have called the return object as FormikObject ((Line 26))
*/

/*
        * the useFormik hook takes the object as an input and return a object. in my
        * code I have named the returned object as formikObject (Line 26). this object will 
        * Helps in managing the state, handling the submission and validation + error
        * message. 
*/
import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {

  // Calling the hook. the useFormik hook consume the object
  const FormikObject = useFormik({})
  
  return (
    <div>
        <form>
            <label htmlfor='name'>Name:</label>
            <input type='text' id ='name' name='name'/>

            <label htmlfhtmlor='email'>Email:</label>
            <input type='email' id ='email' name='email'/>

            <label htmlfor='channel'>Channel:</label>
            <input type='text' id ='channel' name='channel' />

            <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
