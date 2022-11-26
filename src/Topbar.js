import react, { useEffect } from "react";
import axios from "axios";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
 
export default function Topbar({user,setuser}) {
var navigate = useNavigate();
    useEffect( () => {
      (async()=>{setuser(window.localStorage.getItem("useremail"))})()
        
      }, [])
    // useEffect(async () => {
    //      var userid = await axios.get("http://localhost:3004/login")
    //      console.log(userid.data)
    //   }, [])

    let handleLogout = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to Logout?")
            if (result) {
                 
              setuser(null);
             window.localStorage.setItem("my_token", null);
                window.localStorage.setItem("useremail", null);
              navigate('/login')
    
            }
        } catch (error) {
            console.log(error)
        }
    }
       
    return (
        <div className="tpbar">
             
             <button className="btn" id='profile'  onClick={() => handleLogout()}>
                        Logout</button>

 <Link to='/login'><button className="btn" id='profile'>Login
                </button></Link>
                 
                 </div>

                   
                         
                       
                        
        
    )
}

//                 {user != null?<button className="btn" id='profile'>{user}</button>
//                 : }