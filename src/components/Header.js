 import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav_brand">
          <NavLink exact to="/" className="nav-logo">
            SHAPEMEUP
          </NavLink></div>
<div className="nav_links">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Apps
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Excercise"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Excercise
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/Diet"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Diet
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Coach"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Coach
              </NavLink>
            </li>

           
            </ul>
         
         
          <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links login"
                onClick={handleClick}
              >
                Log In
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Sign_up"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Sign Up
              </NavLink>
            </li>
         </ul>
         </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
