import React,{useState} from 'react';
import './css/excercise.css';

import JSON from './search_excercise.json';
function Excercise (){

      const [searchTerm,setSearchTerm]=useState('')
return(

<main>
      <center>
      <div className="container p-5">
<label htmlFor="cars">Workout Categories</label>
<input type="text"placeholder="search"

onChange={event => {setSearchTerm(event.target.value)}}>

</input>

</div>
</center>

 <div className="boxes_Excercise">
 {JSON.filter((val)=>{
          if(searchTerm==="val.WorkoutTitle"){
return val
          }


          else if(val.WorkoutTitle.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
    }).map((val,key) =>{
return(
      <div className="dropdown" key={key}>
     {val.WorkoutTitle}
     <div className="  dropdown_content">
<p class="mt-5" style={{color: "white"}}> {val.WorkoutTitle}</p>
<p class="mt-5" style={{color: "white"}}>{val.Workoutname}</p>
      </div>
     </div>
)

    })}  
</div> 


{/* <div className="diet_boxes">
    {JSON.filter((val)=>{
          if(searchTerm==""){
return val
          }


          else if(val.WorkoutTitle.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
    }).map((val,key) =>{
return(
      <div className="dboxes" key={key}>
     {val.WorkoutTitle}
     </div>
)

    })}  
</div> */}
                      </main>
)

}

export default Excercise;