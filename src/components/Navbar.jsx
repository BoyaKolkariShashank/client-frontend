import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import './Navbar.css'; // Import your CSS file
import config from '../config';

const Navbar = () => {
  const { state } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink className="nav-item nav-link animated" to="/">Home </NavLink>
          <NavLink className="nav-item nav-link animated" to="/grievance">Grievance</NavLink>
          <NavLink className="nav-item nav-link animated" to="/about">About</NavLink>
          <NavLink className="nav-item nav-link animated" to="/logout">Logout</NavLink>
        </>
      )
    } else {
      return (
        <>
          <NavLink className="nav-item nav-link animated" to="/">Home </NavLink>
          <NavLink className="nav-item nav-link animated" to="/grievance">Grievance</NavLink>
          <NavLink className="nav-item nav-link animated" to="/about">About</NavLink>
          <NavLink className="nav-item nav-link animated" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link animated" to="/signup">Signup</NavLink>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Grievance Portal</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <RenderMenu />
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;
