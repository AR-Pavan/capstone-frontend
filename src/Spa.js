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

function Spa() {
  const [user,setuser]=useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar user={user} />
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Register />}></Route>
                  <Route path="/login" element={<Login setuser={setuser} />}></Route>
                  <Route path="/dashboard" element={<Dashboard user={user}/>}></Route>
                  <Route path="/classes" element={<Classes/>}></Route>
                  <Route path="/:id" element={<Inclass/>}></Route>
                  <Route path="/:id/task" element={<Task user={user}/>}></Route>
                  <Route path="/:id/attendance" element={<Attendance user={user} />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default Spa;