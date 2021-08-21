// import React from 'react';
// import {Link} from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';




//  function Sign_up() {

//   const { register, handleSubmit,formState:{errors} ,reset} = useForm();


//   const onSubmit = (data)=>{
// console.log(data);
// reset();
//   };

//   //console.log(errors)
// return(

// <main className="page">
  
// <div className="container sign_up">

//   <div className="row check_box">
//    <div className="row dotted">
// <div className="form-check ">
//   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
//   <label className="form-check-label" for="exampleRadios1">
//    Coach
//   </label>
// </div>
// <div className="form-check ">
//   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
//   <label className="form-check-label" for="exampleRadios2">
//    Client
//   </label>
 
// </div>
// </div>
// </div>
//     <form onSubmit={handleSubmit(onSubmit)}>
  //   <div className="row name">
  // <div className="form-group col-lg-6">
  //   <label for="firstname">First Name*</label>
  //   <input type="text" className="form-control" id="firstname"  placeholder="Enter name"  {...register("firstname", {
  //   required: 'firstname is required' ,

  //   pattern: {
  //     value: /^[a-zA-Z]+$/,
  //     message: 'letters only allowed' ,
  //   }
  // })}/> 
  // {errors.firstname && ( <small className="text-danger">{errors.firstname.message}</small>)}
  
  // </div>
  // <div className="form-group col-lg-6">
  //   <label for="lastname">Last Name*</label>
  //   <input type="text" className="form-control" id="lastname"  placeholder="Enter Name" 
  //   {...register("lastname", {
  //   required: 'lastname is required',
  //   pattern: {
  //     value: /^[a-zA-Z]+$/,
  //     message: 'letters only allowed' ,
  //   }
  //   })} />
  //    {errors.lastname && (     <small className="text-danger">{errors.lastname.message}</small>)}

  //  </div>
  //  </div>

  //  <div className="row ">
  // <div className="form-group bday col-lg-6">
  // <label for="birthday">Date of Birth*</label>
  // <input type="date" className="form-control" id="birthday" name="birthday" {...register("dateofbirth", {
  //   required: 'Date Of Birth is required'})} />
  //   {errors.dateofbirth && (       <small className="text-danger">{errors.dateofbirth.message}</small>)}

  // </div>
  // <div className="form-group age col-lg-6">
  //   <label for="age">Age</label>
  //   <input type="text" className="form-control" id="age"  
    
  //   {...register("age", {
      

  //   pattern: {
  //       value: /^[0-9]*$/,
  //       message: 'numbers are only allowed' ,
  //     }
  //     })} />


  //     {errors.age && (
  //     <small className="text-danger">{errors.age.message}</small>)}
  
  //  </div>
//    </div>


// <h5 className="gender">Gender*</h5>
//  <div className="row dotted">
 
//    <div className="form-check ">
//   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
//   <label className="form-check-label" for="exampleRadios1">
//    Male
//   </label>
// </div>
// <div className="form-check ">
//   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
//   <label className="form-check-label" for="exampleRadios2">
//     Female
//   </label>
// </div>

// </div> 

// <div className="row phone">
  // <div className="form-group col-lg-6">
  // <label for="phone">Phone number*</label>
  //   <input type="text" className="form-control" id="phone"   
     
  //      {...register("phone", {
  //       required: 'phone number is required',
      
  //       minLength: {
  //         value: 10,
  //         message: 'Enter a valid Phone Number' // JS only: <p>error message</p> TS only support string
  //       },

  //       maxLength : {
  //         value: 10,
  //         message: 'Enter a valid Phone Number' // JS only: <p>error message</p> TS only support string
  //       },

  //       pattern: {
  //         value: /^[0-9\b]+$/,
  //         message: 'numbers are only allowed' ,
  //       }
  //     })} 
        
  //       />
  //       {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
  // </div>
  // <div className="form-group col-lg-6">
  // <label for="exampleFormControlInput1">Email*</label>
  //   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register("emailid", {
  //   required: ' Email is required',
    
  //   pattern: {
  //         value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
  //         message: ' valid mail id is required' ,
  //       }
    
  //   })} />
  //   {errors.emailid && ( <small className="text-danger">{errors.emailid.message}</small>)}

  
  //  </div>
  //  </div>


//  <div className="row password">
//   <div className="form-group col-lg-6">
//   <label for="inputPassword">Password*</label>
//   <input type="password" className="form-control" id="inputPassword" placeholder="Password"
//   {...register("password", {
//     required: 'password is required',
//     minLength: {
//       value: 8,
//       message: "Password must have at least 8 characters"
//     }
    
//     })} />
//     {errors.password && (   <small className="text-danger">{errors.password.message}</small>)}

//   </div>
//   <div className="form-group col-lg-6">
//   <label for="confirmpass">Confirm Password*</label>
//   <input type="password" className="form-control" id="confirmpass" placeholder="Password"
//   {...register("confirmpass", {
//     required: 'confirmpass is required'})} />
//      {errors.confirmpass && ( <small className="text-danger">Confirm your Password</small>)}

//    </div>
//    </div>
// <br/><br/>
// <div className=" col-12 mb-5">
//   <center> <button type="submit" className="btn btn submit">Finish Registeration</button></center>
//  <center><small>Already have an account?<Link to="/Login"  href="#" >login</Link></small></center>
//    </div> 

// </form>
    
// </div>
 
//                     </main>
// );
 

// }

// export default Sign_up;


import React from 'react';

import {Link} from 'react-router-dom';

class Sign_up extends React.Component {

    constructor() {

    super();

    this.state = {

      input: {},

      errors: {}

    };

     

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

     

  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;

  

    this.setState({

      input

    });

  }

     

  handleSubmit(event) {

    event.preventDefault();

  

    if(this.validate()){

        console.log(this.state);

  

        let input = {};

        input["name"] = "";

        input["lastname"] = "";

        input["birthday"] = "";

        input["email"] = "";

        input["age"] = "";

        input["phone"] = "";

        input["password"] = "";

        input["confirm_password"] = "";

        this.setState({input:input});

  

        alert(' Form is submited');

    }

  }

  

  validate(){

      let input = this.state.input;

      let errors = {};

      let isValid = true;

  

      if (!input["name"]) {

        isValid = false;

        errors["name"] = "Please enter your name.";

      }

      if (!input["lastname"]) {

        isValid = false;

        errors["lastname"] = "Please enter last name.";

      }


      if (!input["birthday"]) {

        isValid = false;

        errors["birthday"] = "Please enter birthday date.";

      }

      

      if (!input["phone"]) {

        isValid = false;

        errors["phone"] = "Please enter phone number.";

      }


      if (typeof input["age"] !== "undefined") {

          

        var pattern = new RegExp(/^\S[0-9]{0,3}$/);

        if (!pattern.test(input["age"])) {

          isValid = false;

          errors["age"] = "Please enter valid age.";

        }
      }
  
      if (typeof input["phone"] !== "undefined") {

          

        var pattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

        if (!pattern.test(input["phone"])) {

          isValid = false;

          errors["phone"] = "Please enter valid phone number.";

        }

      }


      if (!input["email"]) {

        isValid = false;

        errors["email"] = "Please enter your email Address.";

      }

  

      if (typeof input["email"] !== "undefined") {

          

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {

          isValid = false;

          errors["email"] = "Please enter valid email address.";

        }

      }

  

      if (!input["password"]) {

        isValid = false;

        errors["password"] = "Please enter your password.";

      }

  

      if (!input["confirm_password"]) {

        isValid = false;

        errors["confirm_password"] = "Please enter your confirm password.";

      }

  

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

          

        if (input["password"] != input["confirm_password"]) {

          isValid = false;

          errors["password"] = "Passwords don't match.";

        }

      } 

  

      this.setState({

        errors: errors

      });

  

      return isValid;

  }

     

  render() {

    return (

    <main className="page">
  
<div className="container sign_up">

<div className="row check_box">
   <div className="row dotted">
<div className="form-check ">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label" for="exampleRadios1">
   Coach
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
   Client
  </label>
 
</div>
</div>
</div>

        <form onSubmit={this.handleSubmit}>

  

          <div class="form-group">

           

<div className="row name">
  <div className="form-group col-lg-6">
    <label for="firstname">First Name*</label>
    <input type="text" className="form-control"  name="name"  id="firstname"  placeholder="Enter first name"  value={this.state.input.name}

onChange={this.handleChange}
/> 
  
<small className="text-danger">{this.state.errors.name}</small>
  </div>
  <div className="form-group col-lg-6">
    <label for="lastname">Last Name*</label>
    <input type="text" className="form-control" name="lastname" id="lastname"  placeholder="Enter last Name" 
    value={this.state.input.lastname}

    onChange={this.handleChange}
  />
  <small className="text-danger">{this.state.errors.lastname}</small>
    </div>
   </div>


     <div className="row ">
  <div className="form-group bday col-lg-6">
  <label for="birthday">Date of Birth*</label>
  <input type="date" className="form-control" id="birthday" name="birthday" 
  
  value={this.state.input.birthday}

    onChange={this.handleChange}/>
      <small className="text-danger">{this.state.errors.birthday}</small>
  </div> 

  <div className="form-group age col-lg-6">
    <label for="age">Age</label>
    <input type="text" className="form-control" id="age" placeholder="age"
    name="age" 
  
    value={this.state.input.age}
  
      onChange={this.handleChange}/>
    
    
    <small className="text-danger">{this.state.errors.age}</small>
  
   </div>

   </div>

         
   <h5 className="gender">Gender*</h5>
   <div className="row dotted">
 
   <div className="form-check ">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label" for="exampleRadios1">
   Male
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" for="exampleRadios2">
    Female
  </label>
</div>

</div>

          <div className="row phone">

          <div className="form-group col-lg-6">
  <label for="phone">Phone number*</label>
    <input type="text" className="form-control" id="phone" placeholder="phone number"
    name="phone" 

    value={this.state.input.phone}

    onChange={this.handleChange}  />
        <small className="text-danger">{this.state.errors.phone}</small>
  </div>

          <div className="form-group col-lg-6">
  <label for="exampleFormControlInput1">Email*</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" 
    
    name="email" 

              value={this.state.input.email}

              onChange={this.handleChange}
/>
   
<small className="text-danger">{this.state.errors.email}</small>
  

   </div>

            </div> 
  

          

          <div className="row password">
  <div className="form-group col-lg-6">
  <label for="inputPassword">Password*</label>
  <input type="password" className="form-control" id="inputPassword" placeholder="Password"
 name="password" 

 value={this.state.input.password}

 onChange={this.handleChange}

 
 />
  
  <small className="text-danger">{this.state.errors.password}</small>
  </div>
  <div className="form-group col-lg-6">
  <label for="confirmpass">Confirm Password*</label>
  <input type="password" className="form-control" id="confirmpass" placeholder="Password"

name="confirm_password" 

value={this.state.input.confirm_password}

onChange={this.handleChange}

  />
<small className="text-danger">{this.state.errors.confirm_password}</small>
   </div>
   </div>   

          <div className=" col-12 mb-5">
  <center> <button type="submit" className="btn btn submit">Finish Registeration</button></center>
 <center><small>Already have an account?<Link to="/Login"  href="#" >login</Link></small></center>
   </div>
</div>

        </form>

      </div>
</main>
    );

  }

}

  

export default Sign_up;