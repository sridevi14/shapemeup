import React from 'react';
import './css/Coach.css';

import coaches_boxes from './coach2';
class Coach extends React.Component{

      render(){
return(

<main className="Coach">
      <center>
      <div className="container p-5">
<label for="cars">Coach Finder</label>
<select name="cars" id="cars" form="carform" >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

</div>
</center>

<div className="Coach_boxes">
    {coaches_boxes.map(coaches_boxes =>{
return(
      <div className="cbox">
      <div className="cbox_1"></div>
      <h5>{coaches_boxes.coachname}</h5>
      <p >{coaches_boxes.coachdetail}</p>
      </div>
)

    })}  
</div>

                    </main>
);
      }

}

export default Coach;