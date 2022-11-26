import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {API} from './global.js';
function Dashboard({user}) {
  const [count, setcount] = useState(0);
  const [attendace, setattendance] = useState(0);

  useEffect(() => {(async()=>{ task()
    attendance()})()
   
  }, [])

  async function task() {
    var taskarr = await axios.get(`${API}/task/${user}`,{
      headers:{
        Authorization:  window.localStorage.getItem("my_token")
      }
    });
     
    console.log(taskarr.data);
    var tasklen = (taskarr.data).length;
    // console.log(tasklen);
    var res = (tasklen / 20) * 100;
    setcount(res);
  }

  async function attendance() {
    var attendancearr = await axios.get(`${API}/attendance/${user}`,{
      headers:{
        Authorization:  window.localStorage.getItem("my_token")
      }
    });
    
    var attenarr = attendancearr.data;
    var finarr = [];
    for (var i = 0; i<attenarr.length; i++) {
      var value = parseInt((attenarr[i].Attendance));
      // console.log(value);
      finarr.push(value);
    }
    // console.log(finarr);
    var length = finarr.length
    // console.log(length);
    const total = finarr.reduce(
      (previousValue, currentValue, index)=>previousValue+currentValue, 
      0);
      // console.log(total); 

      var result = Math.floor((total/length)*100);
      setattendance(result);
}

  
   
  return (
    <>
      <div className='text-left'><h1>Dashboard</h1></div>
      <hr />
      <div className='text-left'><b>Overview</b></div>
      <div className='row  ml-3 '>
        <div className='col-8 text-left border rounded py-4'><b>Completion</b>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${count}%` }}
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${count}%`}</div>
          </div>
        </div>
      </div>
      <div className='text-left mt-3'><b>Attendance</b></div>
      <div className='row  ml-3 '>
        <div className='col-8 text-left border rounded py-4'>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${attendace}%` }}
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{`${attendace}%`}</div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Dashboard