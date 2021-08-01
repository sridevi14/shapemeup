import React from 'react';





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
        <li><a href="">APPS</a></li>
        <li><a href="">EXCERCISE</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">COACH</a></li>
         </ul>
           </div>
        </div>
        </nav>
        
            </header>
            
           
     
    );
  };
  

  
  export default Header;
