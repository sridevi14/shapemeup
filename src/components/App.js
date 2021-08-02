import React from 'react';
import './App.css';
import Header from './Header'; 
import About from './about';
import AppsFront from './Apps';
import {BrowserRouter as Router,Route,Link,NavLink,Switch}from 'react-router-dom'


function App() {
  return (

    <Router>

     <Header/>

     <Route path='/Apps' component={AppsFront}/>
     <Route path='/about' component={About}/>
    
 
    </Router>
  );
}

export default App;