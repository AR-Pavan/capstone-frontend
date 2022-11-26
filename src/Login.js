import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {API} from './global.js'

function Login({setuser,settoken}) {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                let data = await axios.post(`${API}/login`, values)
                console.log(data.data.user.email)
                window.localStorage.setItem("my_token", data.data.token);
                window.localStorage.setItem("useremail", data.data.user.email);
                console.log(data.data);
                
                if (data.data.message === "login") {
                    setuser(data.data.user.email);
                    settoken(data.data.token)
                    navigate("/dashboard");
                }else{
                    alert("UserID or Password Incorrect :( ")
                }

            } catch (error) {
                alert("UserID or Password Incorrect :( ")
                alert("Register to login")
                navigate("/");
            }
        }
    })
    return (
        <div>
            <h2>LOGIN</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Email ID:</b></label></div>
                        <div className='col-lg-4'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center'><label><b>Password:</b></label></div>
                        <div className='col-lg-4'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='col-lg-12 mt-3 text-centrt'><input type="submit" className='btn btn-primary' value="Login"></input></div>
                </div>
            </form>
        </div>
    )
}

export default Login