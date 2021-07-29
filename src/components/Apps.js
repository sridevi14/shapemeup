import React from 'react';
import mobile from './mobile.png';

class AppsFront extends React.Component{
    
      render(){
return(

<main>
<div className="container">
                <div className="mobile">
                            <img src={mobile} alt="azbxvh"/>
                </div>

                       
                <div className="image">
                    <div className="image_box">
                                
                        <div className="rectangle1">
                                    <a href="" className="button1">GET IT ON<br/><span>Android</span></a>
                         </div>
                        
                                  <div className="rectangle2">
                                     <a  href="" className="button2">GET IT ON<br/><span>Appstore</span></a>
                                  </div>
                                  </div>
                                  </div>

                                  <div className="content">
                                    <h4>Download the app now</h4>
                                </div>
                        
        </div>

                      </main>
);
      }

}

export default AppsFront;