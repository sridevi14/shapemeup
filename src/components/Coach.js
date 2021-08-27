import React,{useState} from 'react';
import './css/Coach.css';

import JSON from './search_coach.json'
function Coach(){

      const [searchTerm,setSearchTerm]=useState('')
return(

<main className="Coach">
      <center>
      <div className="container p-5">
<label htmlFor="cars">Coach Finder</label>
<input type="text"placeholder="search"

onChange={event => {setSearchTerm(event.target.value)}}>

</input>
</div>
</center>

<div className="Coach_boxes">
    {JSON.filter((val)=>{
           if(searchTerm==="val.coachname"){
            return val
                      }
            
            
                      else if(val.coachname.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                      }
                }).map((val,key) =>{
return(
      <div className="cbox" key={key}>
      <div className="cbox_1"></div>
      <h5>{val.coachname}</h5>
      <p >{val.coachdetail}</p>
      </div>
)

    })}  
</div>

                    </main>
)
    

}

export default Coach;