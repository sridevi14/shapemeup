(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"WorkoutTitle":"sree","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"},{"WorkoutTitle":"Workout Title","Workoutname":"WorkoutName"}]')},27:function(e){e.exports=JSON.parse('[{"dietname":"plan1","id":"1","command":"not found"},{"dietname":"medical","id":"2","command":"not found"},{"dietname":"physical ","id":"3","command":"not found"},{"dietname":"wightloss","id":"4","command":"not found"}]')},28:function(e){e.exports=JSON.parse('[{"coachname":"john","coachdetail":"History and summary of the coach"},{"coachname":"Smith","coachdetail":"History and summary of the coach"},{"coachname":"david","coachdetail":"History and summary of the coach"},{"coachname":"stucknolan","coachdetail":"History and summary of the coach"}]')},43:function(e,t,s){},44:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(24),i=s.n(l),n=s(5),r=s(6),o=s(0);var d=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1],l=function(){return c(!s)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"nav-container",children:[Object(o.jsx)("div",{className:"nav_brand",children:Object(o.jsx)(r.c,{exact:!0,to:"/",className:"nav-logo",children:"SHAPEMEUP"})}),Object(o.jsxs)("div",{className:"nav_links",children:[Object(o.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/",activeClassName:"active",className:"nav-links",onClick:l,children:"Apps"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/about",activeClassName:"active",className:"nav-links",onClick:l,children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/Excercise",activeClassName:"active",className:"nav-links",onClick:l,children:"Excercise"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/Diet",activeClassName:"active",className:"nav-links",onClick:l,children:"Diet"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/Coach",activeClassName:"active",className:"nav-links",onClick:l,children:"Coach"})})]}),Object(o.jsxs)("ul",{className:s?"nav-menu2 active":"nav-menu2",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/Login",activeClassName:"active",className:"nav-links login",onClick:l,children:"Log In"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.c,{exact:!0,to:"/Sign_up",activeClassName:"active",className:"nav-links",onClick:l,children:"Sign Up"})})]})]}),Object(o.jsx)("div",{className:"nav-icon",onClick:l,children:Object(o.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})})]})})})},m=(s(43),s(26));var j=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)("main",{children:[Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"container p-5",children:[Object(o.jsx)("label",{htmlFor:"cars",children:"Workout Categories"}),Object(o.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){c(e.target.value)}})]})}),Object(o.jsx)("div",{className:"boxes_Excercise",children:m.filter((function(e){return"val.WorkoutTitle"===s||e.WorkoutTitle.toLowerCase().includes(s.toLowerCase())?e:void 0})).map((function(e,t){return Object(o.jsxs)("div",{className:"dropdown",children:[e.WorkoutTitle,Object(o.jsxs)("div",{className:"  dropdown_content",children:[Object(o.jsxs)("p",{class:"mt-5",style:{color:"white"},children:[" ",e.WorkoutTitle]}),Object(o.jsx)("p",{class:"mt-5",style:{color:"white"},children:e.Workoutname})]})]},t)}))})]})},h=(s(44),s(27));var b=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)("main",{className:"diet",children:[Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"container p-5",children:[Object(o.jsx)("label",{htmlFor:"cars",children:"Diet Plan"}),Object(o.jsx)("input",{type:"text",placeholder:"search",className:"search",onChange:function(e){c(e.target.value)}})]})}),Object(o.jsx)("div",{className:"diet_boxes",children:h.filter((function(e){return s===e.dietname||e.dietname.toLowerCase().includes(s.toLowerCase())?e:void 0})).map((function(e,t){return Object(o.jsx)("div",{className:"dboxes",children:e.dietname},t)}))})]})},x=s(10),u=s(29);var O=function(){var e=Object(u.a)({mode:"all"}),t=e.register,s=e.handleSubmit,a=e.formState.errors,c=e.getValues,l=e.reset;return Object(o.jsx)("main",{className:"page",children:Object(o.jsx)("div",{className:"container sign_up",children:Object(o.jsxs)("form",{onSubmit:s((function(e){console.log(e),alert("form submitted"),l()})),className:"mt-5 formaction",children:[Object(o.jsxs)("div",{className:"row name",children:[Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"firstname",children:"First Name*"}),Object(o.jsx)("input",Object(x.a)({type:"text",className:"form-control",id:"firstname",placeholder:"Enter name"},t("firstname",{required:"Enter your First Name"}))),a.firstname&&Object(o.jsx)("small",{className:"text-danger",children:a.firstname.message})]}),Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"lastname",children:"Last Name*"}),Object(o.jsx)("input",Object(x.a)({type:"text",className:"form-control",id:"lastname",placeholder:"Enter Name"},t("lastname",{required:"Enter your LastName"}))),a.lastname&&Object(o.jsx)("small",{className:"text-danger",children:a.lastname.message})]})]}),Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsxs)("div",{className:"form-group bday col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"birthday",children:"Date of Birth*"}),Object(o.jsx)("input",Object(x.a)({type:"date",className:"form-control",id:"birthday",name:"birthday"},t("dateofbirth",{required:"Select your Date Of Birth"}))),a.dateofbirth&&Object(o.jsx)("small",{className:"text-danger",children:a.dateofbirth.message})]}),Object(o.jsxs)("div",{className:"form-group age col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"age",children:"Age"}),Object(o.jsx)("input",Object(x.a)({type:"text",className:"form-control",id:"age"},t("age",{pattern:{value:/^[0-9]*$/,message:"Enter a Valid Age"}}))),a.age&&Object(o.jsx)("small",{className:"text-danger",children:a.age.message})]})]}),Object(o.jsx)("h5",{className:"gender",children:"Gender*"}),Object(o.jsxs)("div",{className:"row dotted",children:[Object(o.jsxs)("div",{className:"form-check ",children:[Object(o.jsx)("input",Object(x.a)({className:"form-check-input",type:"radio",name:"gender",id:"exampleRadios1",value:"male"},t("gender",{required:"Enter your Phone Number"}))),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"exampleRadios1",children:"Male"})]}),Object(o.jsxs)("div",{className:"form-check ",children:[Object(o.jsx)("input",Object(x.a)({className:"form-check-input",type:"radio",name:"gender",id:"exampleRadios2",value:"female"},t("gender",{required:"Select your Gender"}))),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"exampleRadios2",children:"Female"})]})]}),a.gender&&Object(o.jsx)("small",{className:"text-danger",children:a.gender.message}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"row phone",children:[Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"phone",children:"Phone number*"}),Object(o.jsx)("input",Object(x.a)({type:"text",className:"form-control",id:"phone",placeholder:"Phone number"},t("phone",{required:"Enter your Phone Number",pattern:{value:/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,message:"Give valid Phone number"}}))),a.phone&&Object(o.jsx)("small",{className:"text-danger",children:a.phone.message})]}),Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlInput1",children:"Email*"}),Object(o.jsx)("input",Object(x.a)({type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com"},t("emailid",{required:"Enter your Email",pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"Enter a valid Email"}}))),a.emailid&&Object(o.jsx)("small",{className:"text-danger",children:a.emailid.message})]})]}),Object(o.jsxs)("div",{className:"row password",children:[Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"inputPassword",children:"Password*"}),Object(o.jsx)("input",Object(x.a)({type:"password",className:"form-control",id:"inputPassword",placeholder:"Password"},t("password",{required:"Enter a Password",minLength:{value:8,message:"Password must have at least 8 characters"}}))),a.password&&Object(o.jsx)("small",{className:"text-danger",children:a.password.message})]}),Object(o.jsxs)("div",{className:"form-group col-lg-6",children:[Object(o.jsx)("label",{htmlFor:"confirmpass",children:"Confirm Password*"}),Object(o.jsx)("input",Object(x.a)({type:"password",className:"form-control",id:"confirmpass",placeholder:"Password"},t("confirmpass",{required:"Enter a Password",validate:{checkPasswordConfirmationHandler:function(e){return c().password===e||"confirm your password"}}}))),a.confirmpass&&Object(o.jsx)("small",{className:"text-danger",children:"Confirm your Password"})]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:" col-12 mb-5",children:[Object(o.jsxs)("center",{children:[" ",Object(o.jsx)("button",{type:"submit",className:"btn btn submit",children:"Finish Registeration"})]}),Object(o.jsx)("center",{children:Object(o.jsxs)("small",{children:["Already have an account?",Object(o.jsx)(r.b,{to:"/Login",href:"#",children:"login"})]})})]})]})})})},p=(s(46),s(28));var v=function(){var e=Object(a.useState)(""),t=Object(n.a)(e,2),s=t[0],c=t[1];return Object(o.jsxs)("main",{className:"Coach",children:[Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"container p-5",children:[Object(o.jsx)("label",{htmlFor:"cars",children:"Coach Finder"}),Object(o.jsx)("input",{type:"text",placeholder:"search",onChange:function(e){c(e.target.value)}})]})}),Object(o.jsx)("div",{className:"Coach_boxes",children:p.filter((function(e){return"val.coachname"===s||e.coachname.toLowerCase().includes(s.toLowerCase())?e:void 0})).map((function(e,t){return Object(o.jsxs)("div",{className:"cbox",children:[Object(o.jsx)("div",{className:"cbox_1"}),Object(o.jsx)("h5",{children:e.coachname}),Object(o.jsx)("p",{children:e.coachdetail})]},t)}))})]})},N=s(11),f=s(12),g=s(19),k=s(18),w=s.p+"static/media/image1.9b71c370.png",y=s.p+"static/media/image2.51d1ad27.png",C=function(e){Object(g.a)(s,e);var t=Object(k.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("main",{className:"page",children:[Object(o.jsx)("div",{className:"container page_1 mt-5 mb-5",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 mobiles_mobile",children:Object(o.jsx)("img",{className:"img-fluid offset-md-3",src:w,alt:"azbxvh"})}),Object(o.jsx)("div",{className:"col-lg-4 col-md-6   col-sm-6 ",children:Object(o.jsx)("img",{className:"img-fluid ",src:y,alt:"azbxvh"})}),Object(o.jsxs)("div",{className:"col-lg-4 col-xl-4 align-self-center text ",children:[Object(o.jsx)("h4",{className:"offset-md-3",children:"Download The App Now"}),Object(o.jsx)("div",{className:"row p-0",children:Object(o.jsx)("div",{className:"container p-0 image_button",children:Object(o.jsx)("div",{className:"d-flex justify-content-start",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("button",{type:"button",class:"btn btn-dark ",id:"button",children:["GET IT ON",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Android"})]}),Object(o.jsxs)("button",{type:"button",class:"btn btn-dark ",id:"button",children:["GET IT ON",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Appstore"})]})]})})})})]})]})}),Object(o.jsx)("div",{className:"container mobile_box",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("h4",{className:"",children:"Download The App Now"})}),Object(o.jsx)("div",{className:"col-md-6 d-flex justify-content-start .image_button_2",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("button",{type:"button",class:"btn btn-dark ",id:"button",children:["GET IT ON",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Android"})]}),Object(o.jsxs)("button",{type:"button",class:"btn btn-dark ",id:"button",children:["GET IT ON",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Appstore"})]})]})})]})}),Object(o.jsx)("div",{className:"mobile_1",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsxs)("div",{className:"col-lg-6 col-md-6  mt-5 p-5 mobile_text1",children:[Object(o.jsxs)("h4",{className:"mt-5 text1_1",children:["Easy Workout Cheklist",Object(o.jsx)("br",{})," for Client"]}),Object(o.jsx)("p",{className:"text1_2",children:"Clients can use the checklist to go through the workout and to let the coach know that the workout has been completed. "})]}),Object(o.jsx)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile",children:Object(o.jsx)("img",{className:" img-fluid",src:y,alt:"azbxvh"})})]})})}),Object(o.jsx)("div",{className:"mobile_2",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsx)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile2",children:Object(o.jsx)("img",{className:" img-fluid",src:y,alt:"azbxvh"})}),Object(o.jsxs)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile_text2",children:[Object(o.jsx)("h4",{className:"mt-5 text2_1",children:"Real-Time Messaging"}),Object(o.jsx)("p",{className:"text2_2",children:"All the messages can be found in one place, so it doesnt get lost.  "})]})]})})}),Object(o.jsx)("div",{className:"mobile_3",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsxs)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile_text3",children:[Object(o.jsxs)("h4",{className:"mt-5 text3_1",children:["Weekly Survey Sent to ",Object(o.jsx)("br",{}),"  the Coach"]}),Object(o.jsx)("p",{className:"text3_2",children:"Track how the client feels after each week and work towards their goal. "})]}),Object(o.jsx)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile3",children:Object(o.jsx)("img",{className:" img-fluid",src:y,alt:"azbxvh"})})]})})}),Object(o.jsx)("div",{className:"mobile_4",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row ",children:[Object(o.jsx)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile4",children:Object(o.jsx)("img",{className:" img-fluid",src:y,alt:"azbxvh"})}),Object(o.jsxs)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile_text2",children:[Object(o.jsx)("h4",{className:"mt-5 text2_1",children:"Flexible Appoitment"}),Object(o.jsx)("p",{className:"text2_2",children:"Have flexible appoitment with the coach and be able to meet at your convience.   "})]})]})})}),Object(o.jsx)("div",{className:"mobile_5",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row  ",children:[Object(o.jsxs)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile_text5",children:[Object(o.jsx)("h4",{className:"mt-5 text5_1",children:"Customized Diet Plan"}),Object(o.jsx)("p",{className:"text5_2",children:"Each client will have their custimized diet plan with their required protein carbs and fat.  "})]}),Object(o.jsx)("div",{className:"col-lg-6 col-md-6 mt-5 p-5 mobile5",children:Object(o.jsx)("img",{className:"img-fluid rectangle_3",src:y,alt:"azbxvh"})})]})})})]})}}]),s}(c.a.Component),_=(s(47),s(3)),W=function(e){Object(g.a)(s,e);var t=Object(k.a)(s);function s(){return Object(N.a)(this,s),t.apply(this,arguments)}return Object(f.a)(s,[{key:"render",value:function(){return Object(o.jsxs)("main",{className:"page",children:[Object(o.jsx)("div",{className:"container product_1",children:Object(o.jsxs)("center",{children:[Object(o.jsx)("h3",{className:"m-5",children:"Product Overview"}),Object(o.jsxs)("p",{children:["Fitness has become paramount important more than ever during the last 18 months especially with the onset of pandemic. With people being locked down in home and with less travelling and more remote working, it has become very difficult to maintain physical health. At the sametime, physical and mental health has become very important to keep our defences strong against the pandemic. With so many people realizing the importance of maintaining fitness and yet stuck at home with no access to fitness facilities, we at Honeycomb Technologies have come up with an application which solves the problem. We have created an unique application which enables anyone across the world to access the fitness coach of their choice, fitness program and diet program under the single umbrella. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"ShapeMeUp, as the name suggests, helps every client to get to their best shape and fitness by following the fitness program created specific for every client, flexible yet most effective diet plan crafted to suit the needs of every individual. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"ShapeMeUp helps both the fitness coach and fitness aspirants equally to stay on top of their goals."]})]})}),Object(o.jsx)("div",{className:"product_2",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("center",{children:[Object(o.jsxs)("div",{className:"row flex-column-reverse flex-sm-row biss_module ",children:[Object(o.jsx)("p",{className:"col-lg-8 col-md-8 col-xl-8   ",children:"The fitness app ShapeMeUp has several business modules to help both fitness coaches and fitness aspirants (clients)."}),Object(o.jsx)("h4",{className:"col-4 col-md-4 col-xl-4  biss_text",children:"Business Modules"})]}),Object(o.jsxs)("div",{className:"row k coach_module",children:[Object(o.jsx)("h4",{className:"col-4 col-md-4 col-xl-4  coach_text",children:"Coach Modules"}),Object(o.jsxs)("p",{className:"col-lg-8 col-md-8 col-xl-8 ",children:["ShapeMeUp application has set of screens/functions to help fitness Coaches to manage their Profile, create and maintain Diet database, create and maintain Warmup database, create and maintain workout database, view Client Profiles, assign warmup and workout plans, assign diet plans, monitor the progress of clients, send reminders for payment/workout/diet follow ups, live chat/video calls with clients to demonstrate and conduct live sessions, messaging services to communicate with clients, schedule sessions with clients, manage group clients and group classes.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"ShapeMeUp is designed to cater to every fitness enthusiast and meet their specific needs. It is easily customizable to suit the fitness coaches across the globe to give effective training to their clients."]})]})]})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"row  flex-column-reverse flex-sm-row client_module",children:[Object(o.jsx)("p",{className:"col-lg-8 col-md-8 col-xl-8 mt-0",children:"Here we refer to the fitness aspirants as Clients. This is an individual or team that is being trained by the Coaches"}),Object(o.jsx)("h4",{className:"col-4 col-md-4 col-xl-4 mt-0",children:"Client Modules"})]})})})]})}}]),s}(c.a.Component);function T(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"pages",children:Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{exact:!0,path:"",component:C}),Object(o.jsx)(_.a,{path:"/about",component:W}),Object(o.jsx)(_.a,{path:"/Coach",component:v}),Object(o.jsx)(_.a,{path:"/Diet",component:b}),Object(o.jsx)(_.a,{path:"/Excercise",component:j}),Object(o.jsx)(_.a,{path:"/Sign_up",component:O})]})})]})})}i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.72ebbe96.chunk.js.map