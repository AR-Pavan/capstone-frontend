import React from 'react'
import { Link,useParams } from 'react-router-dom';
import './style.css'

function Inclass() {
  let params = useParams();
  return (
    <div className='row mt-5'>
    <div className='col-6'>
        <Link style={{textDecoration:'none'}} to={`/${params.id}/task`} ><div className='text-center btn btn-primary btn-lg btn-block'><h2>Task</h2></div> </Link>
    
    </div>
    <div className='col-6'>
        <Link style={{textDecoration:'none'}} to={`/${params.id}/attendance`} ><div className='text-center btn btn-primary btn-lg btn-block'><h2>Attendance</h2></div> </Link>
    
    </div>
</div>
  )
}

export default Inclass