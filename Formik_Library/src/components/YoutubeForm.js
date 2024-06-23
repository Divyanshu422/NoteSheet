/*
    * In this couple of videos we will create a simple youtube form with 3 fields 
    * (name, email and channel) and  a submit button. 
    * we will implement the formik library into it -> for 
    *                   1. managing the form state
    *                   2. handling the form submission
    *                   3. Error handling and validation
    * 
*/

/*
    ! In this lecture we will create a basic structure of the form.
    * there are 3 field => each field has a label and the input tag corresponding to 
    * it. 
    * for liking label and input tag we use `htmlfor` and `id` as same in the respective fields.
    * Since we are using the form, so it will be mandatory to use type attribute in the butto fields as 
    * submit otherwise there will be an warning on console window. 
    * the teacher has provide the inbuilt css in the App.css. so i have used that only

*/

import React from 'react'

function YoutubeForm() {
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
