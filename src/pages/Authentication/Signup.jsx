import React from 'react'
import { Link } from 'react-router-dom'
// import "../Authentication/LoginSignup.css"
// import "../Authentication/LoginSignup.css"
import "../Authentication/LoginSignup.css"


function Signup() {
  return (
    <div className='signup-main-div'>

        <form className='signup-page-form-div'> 
          <h1 className='signup-heading'>signup</h1>

          <div className='signup-name-div'>

          <div className='signup-firstname-div'> 
              <small className='signup-firstname-label' >FIRSTNAME <small>*</small></small>
            <input className=' signup-email-input'  placeholder="First Name" type="text" />

            </div>
           

            

          <div className='signup-lastname-div'>
            <small className='signup-lastname-label'>LASTNAME <span>*</span></small>
            
           <input className='signup-password-input' placeholder="Last Name" type="text" />
          </div>


          </div>
          
          
            
            <div className='signup-username-div'> 
              <small className='signup-username-label' >EMAIL <small>*</small></small>
            <input className=' signup-email-input'  placeholder="xyz@abc.com" type="text" />

            </div>
           

            

          <div className='signup-password-div'>
            <small className='signup-password-label'>PASSWORD <span>*</span></small>
            
           <input className='signup-password-input' placeholder="password" type="text" />
          </div>
          <div className='signup-password-div'>
            <small className='signup-password-label'>CONFIRM PASSWORD <span>*</span></small>
            
           <input className='signup-password-input' placeholder="confirm password" type="text" />
          </div>


       
         
          <button className='signup2-button'>signup</button>
          <h5 className='already-a-member'>Already a member ? <Link to="/Login"  className='already-a-member-signup'>Login</Link> </h5>
          
          


      
      </form>

      
    </div>
  )
}

export { Signup}