import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Tasktype({user}) {
  var navigate = useNavigate();
  useEffect( () => {(async()=>{
    if(user=== null){
      alert("Login");
      navigate("/login")
  }
  })()
      
    }, [])
  return (
      <>
     <div className='text-left'><h2>My Tasks</h2></div>
      
    <hr />
    <div className=' container'>
        <div className='row'>
            <div className='col-lg-6'>
          <Link to='/mytask' style={{textDecoration:'none'}}>  <button className='btn btn-primary btn-block'>Task Score</button>
          </Link>
            </div>
            <div className='col-lg-6'>
            <Link to='/notgraded' style={{textDecoration:'none'}}>  <button  className='btn btn-primary btn-block'>Tasks yet to graded </button>
            </Link>

                </div>
        </div>
    </div>
    
    </>
  )
}

export default Tasktype