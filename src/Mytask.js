import React from 'react';
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {API} from './global.js'

function Mytask({user}) {
  const [list,setlist] = useState([]);
  useEffect( () => {(async()=>{ fetchtask()})()
     
    }, [])
  
    let fetchtask = async () => {
      try {
         let itemdetials = await axios.get(`${API}/mytask/${user}`,{
          headers: {
              Authorization: window.localStorage.getItem("my_token")
          }
      });
      if((itemdetials.data.length)!== 0){
        setlist(itemdetials.data)
      }else{
        alert("In this section rated tasks will be shown, go to Rate Task section and rate the task")
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
                </li>
          </ul>
        </div>
      })
  }
  </div>
  </>
  )
}

export default Mytask