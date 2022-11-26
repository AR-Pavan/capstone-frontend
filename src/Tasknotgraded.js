import React from 'react';
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {API} from './global.js'

function Tasknotgraded({user}) {
  const [list,setlist] = useState([]);
  useEffect( () => {(async()=>{fetchtask()})()
      
    }, [])
  
    let fetchtask = async () => {
      try {
         let itemdetials = await axios.get(`${API}/notgraded/${user}`,{
          headers: {
              Authorization: window.localStorage.getItem("my_token")
          }
      });
      console.log(itemdetials.data)
        setlist(itemdetials.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to delete task?")
            if (result) {
                await axios.delete(`${API}/deletetask/${id}` )
                fetchtask()
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
     <div className='text-left'><h2>My Tasks</h2></div>
            <hr />
     <div className='container' id='cardcontainer'>
  {
      list.map((obj,index)=>{
          return <div class="card" id='maincard' key={index} style={{width: '18rem'}}>
          <ul class="list-group list-group-flush" id='taskcard'>
             <li class="list-group-item" id='taskcard'> {obj.classnumber}</li>
            <li class="list-group-item" id='taskcard'>{`Grade - ${obj.taskrating}`}</li>
            <li class="list-group-item" id='taskcard'>
               <button className='btn btn-light' id='ratebtn'>
                   <a href={obj.deploylink} target='_blank'>View Deployment</a></button>  </li>
                   <li class="list-group-item" id='taskcard'>
                   <button className='btn btn-light' id='ratebtn'>
                   <a href={obj.sourcelink} target='_blank'>View Sourcecode</a></button>  </li>
            <li class="list-group-item" id='taskcard'>
        <Link to={`/edittask/${obj._id}`}>   <button className='btn btn-light' id='tbtn'>Edit</button></Link> 
         
          <button className='btn btn-light'  id='tbtn' onClick={() => handleDelete(obj._id)} >
              Delete</button>
                </li>
          </ul>
         

        </div>
      })
  }
  </div>
  </>
  )
}

export default Tasknotgraded