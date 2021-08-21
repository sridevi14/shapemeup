import React from 'react';
import './css/Diet.css';

import diet_boxes from './Diet2';
class Diet extends React.Component{

      render(){
return(

<main className="diet">
      <center>
      <div className="container p-5">
<label for="cars">Diet Plan</label>
<select name="cars" id="cars" form="carform" >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

</div>
</center>
{/* <div className="container ">
<center>
  <div className="row boxes_diet ">
 
      <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-6 ">
      <p className="box_1"> Diet Name</p>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <p className="box_2">Diet Name</p>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6 ">
      <p className="box_3">Diet Name</p>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6 ">
      <p className="box_4"> Diet Name</p>
      </div>

      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
      <p className="box_5"> Diet Name</p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
      <p className="box_6">Diet Name</p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xm-6">
      <p className="box_7">Diet Name</p>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xm-6">
      <p className="box_8"> Diet Name</p>
      </div>
      </div>
    
      </center>
   
</div> */}


{/* <div className="diet_boxes">
      <div className="dbox_1">dcdd</div>
      <div className="dbox_2">ddfd</div>
      <div className="dbox_3">df</div>
      <div className="dbox_4">df</div>
</div> */}




<div className="diet_boxes">
    {diet_boxes.map(diet_boxes =>{
return(
      <div className="dboxes">
     {diet_boxes.dietname}
     </div>
)

    })}  
</div>

                      </main>
);
      }

}

export default Diet;