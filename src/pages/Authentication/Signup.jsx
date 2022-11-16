import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import "../Authentication/Auth.css"






function Signup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate  = useNavigate()


const signupHandler=async()=>  {
 
  const data ={
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
}
try {


const response = await axios.post("/api/auth/signup", data)
localStorage.setItem("token", response.data.encodedToken)

  navigate("/")

toast.success("Signup Successfull")
} catch (error) {
 toast.error("Signup Failed ")
}
}


  return (
    <div className='signup-main-div'>

        <div className='signup-page-form-div'> 
          <h1 className='signup-heading'>signup</h1>

          <div className='signup-name-div'>

          <div className='signup-firstname-div'> 
              <small className='signup-firstname-label' >FIRSTNAME <small>*</small></small>
            <input className=' signup-email-input'  onChange={(e) => setFirstName(e.target.value)}  placeholder="First Name" type="text" />

            </div>
           

            

          <div className='signup-lastname-div'>
            <small className='signup-lastname-label'>LASTNAME <span>*</span></small>
            
           <input className='signup-password-input' onChange={(e) => setLastName(e.target.value)}
 placeholder="Last Name" type="text" />
          </div>


          </div>
          
          
            
            <div className='signup-username-div'> 
              <small className='signup-username-label' >EMAIL <small>*</small></small>
            <input className=' signup-email-input'  onChange={(e) => setEmail(e.target.value)}  placeholder="xyz@abc.com" type="text" />

            </div>
           

            

          <div className='signup-password-div'>
            <small className='signup-password-label'>PASSWORD <span>*</span></small>
            
           <input className='signup-password-input' onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
          </div>
        

       
         
          <button className='signup2-button'onClick = {() => signupHandler()}>signup</button>
          <h5 className='already-a-member'>Already a member ? <Link to="/Login"  className='already-a-member-signup'>Login</Link> </h5>
          
          


      
      </div>

      
    </div>
  )
}

export { Signup}