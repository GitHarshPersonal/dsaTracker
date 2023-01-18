import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header=()=> {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('authToken');
    navigate('/login');
  }
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img
            src="https://esyncalliance.org/wp-content/uploads/2020/05/DSA.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top my-1 mx-1"
          />
          DSA Tracker
        </Link>
        {
          !localStorage.getItem('authToken')?
          <div>
          <Link to="/login" className="btn btn-primary mx-2">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>:
        <div>
          <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button>
        </div>
        }
      </div>
    </nav>
  );
}

export default Header;
