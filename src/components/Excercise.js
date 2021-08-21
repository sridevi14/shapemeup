import React from 'react';
import './css/excercise.css';

import Excercise_boxes from './Excercise2';
class Excercise extends React.Component{

      render(){
return(

<main>
      <center>
      <div className="container p-5">
<label for="cars">Workout Categories</label>
<select name="cars" id="cars" form="carform" >
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

</div>
</center>
{/*<div class="container ">
 <center>
  <div class="row boxes_Excercise ">
 
      <div className=" col-lg-3 col-md-4 col-sm-6 dropdown ">
      <p className="box_1">Workout Title</p>
      <div className="  dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6 dropdown">
      <p className="box_2">Workout Title</p>
      <div className="   dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6 dropdown ">
      <p className="box_3">Workout Title</p>
      <div className="  dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className=" col-lg-3 col-md-4 col-sm-6  dropdown">
      <p className="box_4"> Workout Title</p>
      <div className="  dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>

      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 dropdown">
      <p className="box_5"> Workout Title</p>
      <div className="dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 w-sm-2 dropdown">
      <p className="box_6">Workout Title</p>
       <div className="dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xm-6 dropdown">
      <p className="box_7">Workout Title</p>
      <div className="dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xm-6 dropdown">
      <p className="box_8"> Workout Title</p>
      <div className="dropdown_content">
<p class="mt-5" style={{color: "white"}}>Workout Title</p>
<p class="mt-5" style={{color: "white"}}>Workout Name</p>
      </div>
      </div>
      </div>
    
      </center>
   
</div> */}


<div className="boxes_Excercise">
    {Excercise_boxes.map(Excercise_boxes =>{
return(
      <div className="dropdown">
     {Excercise_boxes.WorkoutTitle}
     <div className="  dropdown_content">
<p class="mt-5" style={{color: "white"}}> {Excercise_boxes.WorkoutTitle}</p>
<p class="mt-5" style={{color: "white"}}>{Excercise_boxes.Workoutname}</p>
      </div>
     </div>
)

    })}  
</div>
                      </main>
);
      }

}

export default Excercise;