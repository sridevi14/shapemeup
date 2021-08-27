import React,{useState} from 'react';
import './css/Diet.css';
import JSON from './search_diet.json'

function Diet(){

const [searchTerm,setSearchTerm]=useState('')
return(

<main className="diet">
<center>
<div className="container p-5">
<label htmlFor="cars">Diet Plan</label>

<input type="text"placeholder="search" className="search"

onChange={event => {setSearchTerm(event.target.value)}}>

</input>
</div>
</center>
<div className="diet_boxes">
    {JSON.filter((val)=>{
          if(searchTerm===val.dietname){
return val
          }

        
          else if(val.dietname.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
          }

         
        
    }
  
    )
   
    .map((val,key) =>{
return(
      <div className="dboxes" key={key}>
     {val.dietname}
     </div>
)

    })}  
    
</div>



                      </main>
)

}

export default Diet;