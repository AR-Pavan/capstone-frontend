// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './sb.css';
import Register from './Register';
import Login from './Login';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Classes from './Classes';

import Inclass from './Inclass';
import Task from './Task';
import Attendance from './Attendance';
import { useState } from 'react';
import Mytask from './Mytask';
import Ratetask from './Ratetask';
import Giverating from './Giverating';
import { Chart } from 'react-chartjs-2';
import Tasktype from './Tasktype';
import Tasknotgraded from './Tasknotgraded';
import Edittask from './Edittask';

function App() {
  const [user,setuser]=useState(null)
  const [token,settoken]=useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar user={user} setuser={setuser}/>
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Register />}></Route>
                  <Route path="/login" element={<Login setuser={setuser} settoken={settoken}/>}></Route>
                  <Route path="/dashboard" element={<Dashboard user={user} token={token}/>}></Route>
                  <Route path="/classes" element={<Classes user={user}/>}></Route>
                  <Route path="/:id" element={<Inclass/>}></Route>
                  <Route path="/:id/task" element={<Task user={user}/>}></Route>
                  <Route path="/:id/attendance" element={<Attendance user={user} />}></Route>
                  <Route path="/mytask" element={<Mytask user={user} />}></Route>
                  <Route path="/rate" element={<Ratetask user={user} />}></Route>
                  <Route path="/giverate/:id" element={<Giverating user={user} />}></Route>
                  <Route path="/chart" element={<Chart user={user} />}></Route>
                  <Route path="/tasktypes" element={<Tasktype user={user} />}></Route>
                  <Route path="/notgraded" element={<Tasknotgraded user={user} />}></Route>
                  <Route path="/edittask/:id" element={<Edittask user={user} />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default App;