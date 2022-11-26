import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {API} from './global.js'

function Task({user}) {
    let params = useParams();
    const navigate = useNavigate();
    
  const formik = useFormik({
    initialValues: {
        sourcelink: '',
        deploylink:'',
        status:'notdone',
        taskrating:'not yet graded',
        classnumber:`${params.id}`,
        userid:user
         },
    onSubmit: async (values) => {
        try {
            console.log(values);
           var response = await axios.post(`${API}/task`, values);
            alert(response.data.message)
            navigate("/dashboard");
            
             
        } catch (error) {
            console.log(error)
        }
    }
})
  return (
      <>
     <div className='text-left'><h3>Task</h3></div><hr/>

     <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'>
                            <label><b>Source code link:</b></label></div>
                        <div className='col-lg-8'><input type="url" className='form-control'
                        required
                            onChange={formik.handleChange} value={formik.values.sourcelink} name='sourcelink'></input></div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'>
                            <label><b>Deployment link:</b></label></div>
                        <div className='col-lg-8'><input type="url" className='form-control'
                        required
                            onChange={formik.handleChange} value={formik.values.deploylink} name='deploylink'></input></div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Class Number:</b></label></div>
                        <div className='col-lg-2'><input type="text" className='form-control'
                            onChange={formik.handleChange} value={formik.values.classnumber} name='classnumber'></input></div>
                    </div>
                     
                    <div className='row mt-3'>
                         <div className='col-lg-6 mt-2 text-right'><input type="submit" 
                         className='btn btn-primary btn-sm' value="submit"></input></div>
                    
                    </div>
                   
                </div>
            </form>

        </div>
      </>
    
  )
}

export default Task