import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/Header'; 
import Excercise from './components/Excercise'; 
import Diet from './components/Diet'; 
import Sign_up from './components/Sign_up';
import Coach from './components/Coach'; 
import Apps from './components/mobile'; 

import './components/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';


function App() {
  return (
    <div className="App">
    
 <Router>
        <NavBar/>

        <div className="pages">
          <Switch>
            <Route exact path="" component={Apps} />
            <Route path="/about" component={About} />
            <Route path="/Coach" component={Coach} />
            <Route path="/Diet" component={Diet} />
            <Route path='/Excercise' component={Excercise}/>
<Route path='/Sign_up' component={Sign_up}/>
          </Switch>
        </div>
      </Router>
     </div>
  );
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

