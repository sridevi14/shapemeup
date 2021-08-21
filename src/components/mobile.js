import React from 'react';
import image1 from './image1.png'; 
import image2 from './image2.png'; 

class Apps extends React.Component{

      render(){
return(

<main className="page">

 <div className="container page_1 mt-5 mb-5">
<div className="row">
  <div className="col-lg-4 col-md-6 col-sm-6 mobiles_mobile">
  <img className="img-fluid offset-md-3" src={image1} alt="azbxvh"/>
  </div>
  <div className="col-lg-4 col-md-6   col-sm-6 ">
  <img className="img-fluid " src={image2} alt="azbxvh"/>
  </div>
  
  <div className="col-lg-4 col-xl-4 align-self-center text ">
   <h4 className="offset-md-3">Download The App Now</h4>
   <div className="row p-0">
   
     <div className="container p-0 image_button">
                    <div className="d-flex justify-content-start">
                                
                  <div className="box">
                        <button type="button" class="btn btn-dark " id="button">GET IT ON<br/><span>Android</span></button>
                        <button type="button" class="btn btn-dark " id="button"> 
GET IT ON<br/><span>Appstore</span></button>
</div>
</div>     
</div>                        
                                  
                                  

                                  
        </div>

   </div>
</div>



</div> 

<div className="container mobile_box">
      <div className="row">
      <div className="col-md-6">
   <h4 className="">Download The App Now</h4>
   </div>
   <div className="col-md-6 d-flex justify-content-start .image_button_2">
   
     
                    
                                
                  <div className="box">
                        <button type="button" class="btn btn-dark " id="button">GET IT ON<br/><span>Android</span></button>
                        <button type="button" class="btn btn-dark " id="button"> 
GET IT ON<br/><span>Appstore</span></button>
</div>
    
                       
                                  
                                  

                                  
        </div>

   

      </div>
</div>

<div className="mobile_1">
   <div className="container">

      
      <div className="row ">
            <div className="col-lg-6 col-md-6  mt-5 p-5 mobile_text1">
      <h4 className="mt-5 text1_1">Easy Workout Cheklist<br/> for Client
      </h4>
      <p className="text1_2">Clients can use the checklist to go through the workout and to let the coach know that the workout has been completed. </p>
      </div>
     <div className="col-lg-6 col-md-6 mt-5 p-5 mobile">
      
      <img className=" img-fluid"  src={image2} alt="azbxvh"/>
      </div>
</div>
 </div>
   </div>

   <div className="mobile_2">
   <div className="container">

      
      <div className="row ">
           
     <div className="col-lg-6 col-md-6 mt-5 p-5 mobile2">
      
      <img className=" img-fluid"  src={image2} alt="azbxvh"/>
      </div>
      <div className="col-lg-6 col-md-6 mt-5 p-5 mobile_text2">
      <h4 className="mt-5 text2_1">Real-Time Messaging
      </h4>
      <p className="text2_2">All the messages can be found in one place, so it doesnt get lost.  </p>
      </div>
</div>
 </div>
   </div>

   <div className="mobile_3">
   <div className="container">

      
      <div className="row ">
            <div className="col-lg-6 col-md-6 mt-5 p-5 mobile_text3">
      <h4 className="mt-5 text3_1">Weekly Survey Sent to <br/>  the Coach
      </h4>
      <p className="text3_2">Track how the client feels after each week and work towards their goal. </p>
      </div>
     <div className="col-lg-6 col-md-6 mt-5 p-5 mobile3">
      
      <img className=" img-fluid"  src={image2} alt="azbxvh"/>
      </div>
</div>
 </div>
   </div>


   <div className="mobile_4">
   <div className="container">

      
      <div className="row ">
           
     <div className="col-lg-6 col-md-6 mt-5 p-5 mobile4">
      
      <img className=" img-fluid"  src={image2} alt="azbxvh"/>
      </div>
      <div className="col-lg-6 col-md-6 mt-5 p-5 mobile_text2">
      <h4 className="mt-5 text2_1">Flexible Appoitment
      </h4>
      <p className="text2_2">Have flexible appoitment with the coach and be able to meet at your convience.   </p>
      </div>
</div>
 </div>
   </div>
   <div className="mobile_5">
   <div className="container">

      
      <div className="row  ">
            <div className="col-lg-6 col-md-6 mt-5 p-5 mobile_text5">
      <h4 className="mt-5 text5_1">Customized Diet Plan
      </h4>
      <p className="text5_2">Each client will have their custimized diet plan with their required protein carbs and fat.  </p>
      </div>
     <div className="col-lg-6 col-md-6 mt-5 p-5 mobile5">
      
      <img className="img-fluid rectangle_3"  src={image2} alt="azbxvh"/>
      </div>
</div>
 </div>
   </div>

                      </main>
);
      }

}

export default Apps;