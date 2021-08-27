import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';





 function Sign_up() {

  const { register, handleSubmit,formState:{errors},getValues ,reset} = useForm({
    mode:'all'
  });


  const onSubmit = (data)=>{
console.log(data);
alert("form submitted");
reset();
  };

return(

<main className="page">
  
<div className="container sign_up">

  {/* <div className="row check_box">
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
</div> */}
     <form onSubmit={handleSubmit(onSubmit)} className="mt-5 formaction">
    <div className="row name">
  <div className="form-group col-lg-6">
    <label htmlFor="firstname">First Name*</label>
    <input type="text" className="form-control" id="firstname"  placeholder="Enter name"  {...register("firstname", {
    required: 'Enter your First Name' 
  })}/> 
  {errors.firstname && ( <small className="text-danger">{errors.firstname.message}</small>)}
  
  </div>
 
    <div className="form-group col-lg-6">
  <label htmlFor="lastname">Last Name*</label>
     <input type="text" className="form-control" id="lastname"  placeholder="Enter Name" 
     {...register("lastname", {
    required: 'Enter your LastName'
     })} />
      {errors.lastname && (<small className="text-danger">{errors.lastname.message}</small>)}

    </div>
    </div> 

   <div className="row ">
  <div className="form-group bday col-lg-6">
  <label htmlFor="birthday">Date of Birth*</label>
  <input type="date" className="form-control" id="birthday" name="birthday" {...register("dateofbirth", {
    required: 'Select your Date Of Birth'})} />
    {errors.dateofbirth && (       <small className="text-danger">{errors.dateofbirth.message}</small>)}

  </div>
  <div className="form-group age col-lg-6">
    <label htmlFor="age">Age</label>
    <input type="text" className="form-control" id="age"  
    
    {...register("age", {
      

    pattern: {
        value: /^[0-9]*$/,
        message: 'Enter a Valid Age' ,
      }
      })} />


      {errors.age && (
      <small className="text-danger">{errors.age.message}</small>)}
  
   </div>
   </div>


<h5 className="gender">Gender*</h5>
 <div className="row dotted">
 
   <div className="form-check ">
  <input className="form-check-input" type="radio" name="gender" id="exampleRadios1" value="male" 
  {...register("gender", {
    required: 'Enter your Phone Number'
      })}
  />
  <label className="form-check-label" htmlFor="exampleRadios1">
   Male
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="radio" name="gender" id="exampleRadios2" value="female"
   {...register("gender", {
    required: 'Select your Gender'
  })}
  />
  <label className="form-check-label" htmlFor="exampleRadios2">
    Female
  </label>
</div>

</div>
{errors.gender && (
      <small className="text-danger">{errors.gender.message}</small>)} 
<br/>
<div className="row phone">
  <div className="form-group col-lg-6">
  <label htmlFor="phone">Phone number*</label>
    <input type="text" className="form-control" id="phone" placeholder="Phone number"  
     
       {...register("phone", {
        required: 'Enter your Phone Number',
    
        pattern: {
          value: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
          message: 'Give valid Phone number' ,
        },

       
      })} 
        
        />
        {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
  </div>
  <div className="form-group col-lg-6">
  <label htmlFor="exampleFormControlInput1">Email*</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...register("emailid", {
    required: 'Enter your Email',
    
    pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: 'Enter a valid Email' ,
        }
    
    })} />
    {errors.emailid && ( <small className="text-danger">{errors.emailid.message}</small>)}

  
   </div>
   </div>


 <div className="row password">
  <div className="form-group col-lg-6">
  <label htmlFor="inputPassword">Password*</label>
  <input type="password" className="form-control" id="inputPassword" placeholder="Password"
  {...register("password", {
    required: 'Enter a Password',
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters"
    }
    
    })} />
    {errors.password && (   <small className="text-danger">{errors.password.message}</small>)}

  </div>
   <div className="form-group col-lg-6">
  <label htmlFor="confirmpass">Confirm Password*</label>
  <input type="password" className="form-control" id="confirmpass" placeholder="Password"
  {...register("confirmpass", {
    required: 'Enter a Password',
    validate:{
      checkPasswordConfirmationHandler:(value) =>{
            const {password}=getValues()
            return password === value || "confirm your password";
      }
    }
    
    })} />
     {errors.confirmpass && ( <small className="text-danger">Confirm your Password</small>)}

   </div>
   </div> 
<br/><br/>
<div className=" col-12 mb-5">
  <center> <button type="submit" className="btn btn submit">Finish Registeration</button></center>
 <center><small>Already have an account?<Link to="/Login"  href="#" >login</Link></small></center>
   </div> 

</form>
    
</div>
 
                    </main>
);
 

}

export default Sign_up;


