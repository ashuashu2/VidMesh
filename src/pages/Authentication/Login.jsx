import React from 'react'

import {  useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import "../Authentication/LoginSignup.css"

function Login() { 
  const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const from = location?.state?.from.pathname


  return (
    <div className='login-main-div'>

        <div className='login-page-form-div'> 
          <h1 className='login-heading'>Login</h1>
          
          
            
            <div className='username-div'> 
              <small className='username-label' >USERNAME <small>*</small></small>
            <input className='email-input'  placeholder="xyz@abc.com" type="text" />

            </div>
           

            

          <div className='password-div'>
            <small className='password-label'>PASSWORD <span>*</span></small>
            
           <input className='password-input' placeholder="user password" type="text" />
          </div>


       
         
          <button className='login2-button'>Login</button>
          <button className="login-as-guest-button" onClick={() => {setIsLoggedIn((isLoggedIn) => !isLoggedIn);
                  toast.success("Login Succesfully");
                  navigate(from,{replace:true});}}>Login As Guest</button>
          <h5 className='not-a-member'>Not a member ? <Link to="/Signup"  className='not-a-member-signup'>Signup</Link> </h5>
          
          


      
      </div>

      
    </div>
  )
}

export { Login}