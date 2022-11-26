import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import {API} from './global.js'

function Ratetask({user}) {
  var navigate = useNavigate()
    const [list,setlist] = useState([])
    useEffect( () => {(async()=>{fetchtask()})()
        
      }, [])
    
      let fetchtask = async () => {
        try {
          if(user!== null){
            let itemdetials = await axios.get(`${API}/alltask`,{
              headers: {
                  Authorization: window.localStorage.getItem("my_token")
              }
          });
          console.log(itemdetials.data)
            setlist(itemdetials.data)
          }else{
            alert("Login");
          navigate("/login")
          }
         
        } catch (error) {
          console.log(error)
        }
      }
  return (
  <>
   <div className='text-left'><h2>Rate Task</h2></div>
            <hr />
     <div className='container' id='cardcontainer'>
  {
      list.map((obj,index)=>{
          return <div class="card" id='maincard' key={index} style={{width: '18rem'}}>
          <ul class="list-group list-group-flush" id='taskcard'>
            <li class="list-group-item" id='taskcard'>{obj.userid}</li>
            <li class="list-group-item" id='taskcard'> {obj.classnumber}</li>
            <li class="list-group-item" id='taskcard'>
               <button className='btn btn-light' id='ratebtn'>
                   <a href={obj.deploylink}>View Deployment</a></button>  </li>
                   <li class="list-group-item" id='taskcard'>
               <button className='btn btn-light' id='ratebtn'>
                   <a href={obj.sourcelink}>View Sourcecode</a></button>  </li>
            <li class="list-group-item" id='taskcard'>
               <Link to={`/giverate/${obj._id}`}>
               <button className='btn btn-light' id='ratebtn'>Rate Task</button>
               </Link> </li>
          </ul>
        </div>
      })
  }
  </div>
  </>
    
  )
}

export default Ratetask