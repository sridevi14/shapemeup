import React from 'react';
import mobile from './mobile.png';
import Header from './Header';
class AppsFront extends React.Component{
    
      render(){
return(

<main>
<Header/>
<svg width="800" height="900" viewBox="0 0 908 1036" fill="none" xmlns="http://www.w3.org/2000/svg" className="image1">
                <path d="M492 499C398.026 303.49 319.5 -29 319.5 -29L-74.5 -45L-209 892.5L-308 2813.5C-308 2813.5 249 2589.5 399.5 2455C550 2320.5 684.171 2130.66 780 1878.5C898.129 1567.66 956.982 1347.64 857 1030.5C781.292 790.356 601.082 725.94 492 499Z" fill="#FAE373"/>
                </svg>
                <svg width="300" height="529" viewBox="0 0 469 729" fill="none" xmlns="http://www.w3.org/2000/svg" className="image2">
                <path d="M147 142.501C93.5 63.001 64.1214 8.27169 -5.5 0L-74 1408.5L79.5 1334.5C79.5 1334.5 68.6124 1203.48 106.5 1117.5C156.727 1003.52 281.759 1029.18 314.5 909.001C351.82 772.021 489.185 681.568 466 541.501C449.798 443.622 425.692 377.713 368 297.001C319.089 228.573 200.5 222.001 147 142.501Z" fill="#FEEFA8"/>
                </svg>

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