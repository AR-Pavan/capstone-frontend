import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Field } from 'formik';
import { Form} from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {API} from './global.js'

 

function Attendance({user}) {
  const navigate = useNavigate();
  let params = useParams()
  return (
    
    <>
    <div className='text-left'><h2>Attendance</h2></div><hr/>
    <Formik
initialValues={{
Attendance: '',
classnumber:`${params.id}`,
userid:user,
}}
onSubmit={async (values) =>   {
    try {
        console.log(values);
 
        var response = await axios.post(`${API}/attendance`, values);
        alert(response.data.message)
        console.log(response.data.message)
        if(response.data.message==="Done"){
          navigate("/dashboard")
        }
       
        
    } catch (error) {
        console.log(error)
    }
}}
>
{({ values }) => (
<Form>
<div id="my-radio-group" className='text-center'><b>{`Attendance for ${params.id}`}</b></div>
<div role="group" aria-labelledby="my-radio-group" className='text-center'>
<label>
<Field type="radio" name="Attendance" value="1"  />
Present
</label><br/>
<label>
<Field type="radio" name="Attendance" value="0" />
Absent
</label>
</div>




<button type="submit" className='btn btn-primary'>Submit</button>
</Form>
)}
</Formik>
    </>
    
      
  )
}

export default Attendance