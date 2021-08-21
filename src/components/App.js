import NavBar from './Header'; 
import Excercise from './Excercise'; 
import Diet from './Diet'; 
import Sign_up from './Sign_up';
import Coach from './Coach'; 
import Apps from './mobile'; 

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About';

function App() {
  return (
    <div className="App">
    
 <Router>
        <NavBar/>

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Apps} />
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

export default App;
