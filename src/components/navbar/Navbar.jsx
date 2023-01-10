import "../navbar/Navbar.css"
import navlogo from "../../images/navlogo.jpg"

import { ImCross } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io"
import { GiHamburgerMenu } from 'react-icons/gi';

import { CgProfile } from "react-icons/cg"
import { Link,NavLink, useLocation, useNavigate} from "react-router-dom";
import {  toast } from 'react-toastify';
import { useFilter } from "../../context/FilterContext";
import { useAuth } from "../../context/AuthContext";
import { useHamburger } from "../../context/HamburgerContext";
import { useEffect } from "react";






function Navbar(){

const { isLoggedIn, setIsLoggedIn } = useAuth();
const navigate = useNavigate();
const location = useLocation();
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

const {FilterState,FilterDispatch} = useFilter()

const { isMobile, hamburgerHandler} = useHamburger()

return(
<div className="main-navbar-div">

    <Link to="/" className="nav-logo-side">
    <img className="logo" src={navlogo} alt="" />
    <h1 className="logo-text">Vid<span className="logo-span-text">Mesh</span></h1>
    </Link>

    <div className="search-div">

        <input placeholder=" 🔍       Search your Videos" onChange={(event)=>
        FilterDispatch({type:"SEARCH",payload:event.target.value}) } className="nav-search" type="text" />

    </div>
    <div className="left-side-div">

        <h1 className="left-side-icon bell-icon">
            <IoIosNotificationsOutline />
        </h1>
        <NavLink to="./Login" state={{from:location}} className="navbar-links-button">
            <h1 className="left-side-icon profile-icon">
                <CgProfile />
            </h1>
        </NavLink>

        <div className="login-button-div2"> {isLoggedIn.login ? (<button className="login-button" onClick={()=> {
                setIsLoggedIn((isLoggedIn) => ({login:false}));
                navigate("/");
                toast.success("Logout Succesfully")}}>

                Logout
            </button>):( <NavLink style={{color:"black"}} to="./Login" state={{from:location}}> <button
                    className="login-button">
                    Login
                </button> </NavLink>) } </div>
                <div className="hamburger">
                    {  isMobile ? <div onClick={hamburgerHandler} >
            <h1 className="cross-icon">
                
                <ImCross />
            </h1>

        </div> :
        <div onClick={hamburgerHandler} >
        <h1>
           
            <GiHamburgerMenu />
        </h1>

    </div> }


                </div>


        




    </div>

</div>

)
}
export { Navbar }