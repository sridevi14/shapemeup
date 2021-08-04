import React from 'react';
import './App.css';
import Header from './Header'; 
import Coach from './Coach';
import About from './about';
import AppsFront from './Apps';
import {BrowserRouter as Router,Route}from 'react-router-dom'


function App() {
  return (

    <Router>

     <Header/>

     <Route path='/Apps' component={AppsFront}/>
     <Route path='/about' component={About}/>
     <Route path='/coach' component={Coach}/>
    
 
    </Router>
  );
}

export default App;