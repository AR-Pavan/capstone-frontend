import react from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                <div class="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div class="sidebar-brand-icon rotate-n-15">
                    
                    </div>
                    <div class="sidebar-brand-text mx-3">ZEN CLASS</div>
                </div>


                <hr class="sidebar-divider my-0" />

                

                <hr class="sidebar-divider" />

                <div class="sidebar-heading">
                    Student
                </div>

                <li class="nav-item active">
                    <Link class="nav-link" to="/dashboard">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link collapsed" to="/classes" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        {/* <i class="fas fa-fw fa-cog"></i> */}
                        <span>Class</span>
                    </Link>
                     
                </li>

                <li class="nav-item">
                    <Link class="nav-link collapsed" to="/tasktypes" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        {/* <i class="fas fa-fw fa-cog"></i> */}
                        <span>Tasks</span>
                    </Link>
                     
                </li>

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/login" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        {/* <i class="fas fa-fw fa-cog"></i> */}
                        <span>Login</span>
                    </Link>
                    </li>

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        {/* <i class="fas fa-fw fa-cog"></i> */}
                        <span>Register</span>
                    </Link>
                    </li>

                <hr class="sidebar-divider"/>
                <div class="sidebar-heading">
                    Mentor
                </div>
                <li class="nav-item">
                <Link class="nav-link collapsed" to="/rate" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        {/* <i class="fas fa-fw fa-cog"></i> */}
                        <span>Rate Task</span>
                    </Link>
                    </li>

                    </ul>
                </div>
         
    )
}