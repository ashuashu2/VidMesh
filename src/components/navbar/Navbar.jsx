import "../navbar/Navbar.css"
import navlogo from "../../images/navlogo.jpg"

import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"




function Navbar(){
    return(
        <div className="main-navbar-div">
            
            <Link to="/" className="nav-logo-side">
                <img  className="logo"  src={navlogo} alt="" />
                <h1 className="logo-text" >Vid<span className="logo-span-text">Mesh</span></h1>
            </Link>
            
            <div className="search-div">
                <div>
                    <input className="nav-search" type="text" />
                    <button> <BsSearch /> </button>
                </div>
            </div>
            <div className="left-side-div">
                <h1 className="left-side-icon"> <IoIosNotificationsOutline /> </h1>
                <h1 className="left-side-icon"> <CgProfile /> </h1>
                <button className="login-button" >Login</button>
                



            </div>
        </div>
        
    )
}
export {Navbar}