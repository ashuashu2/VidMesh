import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Authentication/Auth.css"
import { useAuth } from "../../context/AuthContext";


function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const from = location?.state?.from.pathname

    const loginHandler=async()=>{
      const data = {
        email: email,
        password: password,
      }
      

      if(email.length >= 1 && password.length >= 1 ){

        try {
          const response = await axios.post("/api/auth/login", data);
          if (response.data.encodedToken) {
           
            setIsLoggedIn(() => ({
              token: response.data.encodedToken,
              login: true,
           
            }));
            
            
            toast.success("Login Successfully");
            navigate("/");
          
          } else {
            toast.error("Invalid userId  Password Please Try Again");
          }
        } catch (error) {
          toast.error("Login Failed | Something Is Wrong Please Try Again After Some Times  ");
        }

      }else{
        toast.error("please fill all the Credentials ")
      }
     
    };

  return (
    <div className='login-main-div'>

        <div className='login-page-form-div'> 
          <h1 className='login-heading'>Login</h1>
          
          
            
            <div className='username-div'> 
              <small className='username-label' >USERNAME <small>*</small></small>
            <input className='email-input'  onChange={(e) => setEmail(e.target.value)} placeholder="xyz@abc.com" type="text" />

            </div>
           

            

          <div className='password-div'>
            <small className='password-label'>PASSWORD <span>*</span></small>
            
           <input className='password-input' onChange={(e) => setPassword(e.target.value)} placeholder="user password" type="password" />
          </div>


       
         
          <button className='login2-button'   onClick={ ()=>loginHandler()}>Login</button>
          <button className="login-as-guest-button" onClick={() => {setIsLoggedIn(() => ({
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUwNjE3Yy0yNWU0LTRkZjQtYTI0YS0yYTRhNWRjOTI2NTMiLCJlbWFpbCI6IngifQ.yuWRx4X_-4yDeZPU3Zxtmam7CXFNTl3SYURasC1JMBw",
              login: true,
           
            }));
                  toast.success("Login Succesfully");
                  navigate(from,{replace:true});}}>Login As Guest</button>
          <h5 className='not-a-member'>Not a member ? <Link to="/Signup"  className='not-a-member-signup'>Signup</Link> </h5>
          
          


      
      </div>

      
    </div>
  )
}

export { Login}