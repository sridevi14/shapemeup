import React from 'react';

import {Link} from 'react-router-dom';



function Header() {
    
    return (

        <header>
            
             
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" >
            <div className="nav_bar">
           <div className="brand_name">
            <a href="http://" className="navbar-brand">SHAPEMEUP</a>   
           </div>
        <a href="#" className="toggle_button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </a>
           <div className="nav_links">
           <ul>
        <li><Link to='/Apps' >APPS</Link></li>
        <li><Link to='' >EXCERCISE</Link></li>
        <li><Link to='/about' >ABOUT</Link></li>
        <li><Link to='/Apps' >COACH</Link></li>
         </ul>
           </div>
        </div>
        </nav>
        
            </header>
            
           
     
    );
  };
  

  
  export default Header;
