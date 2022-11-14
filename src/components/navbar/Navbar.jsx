import "../navbar/Navbar.css"
import navlogo from "../../images/navlogo.jpg"

import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { Link,NavLink, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useFilter } from "../../context/FilterContext";
import { useAuth } from "../../context/AuthContext";




function Navbar(){


const { isLoggedIn, setIsLoggedIn } = useAuth();
const navigate = useNavigate();
const location = useLocation();


const {FilterState,FilterDispatch} = useFilter()

return(
<div className="main-navbar-div">

    <Link to="/" className="nav-logo-side">
    <img className="logo" src={navlogo} alt="" />
    <h1 className="logo-text">Vid<span className="logo-span-text">Mesh</span></h1>
    </Link>

    <div className="search-div">
        <div>
            <input placeholder="Search your Videos" onChange={(event)=>
            FilterDispatch({type:"SEARCH",payload:event.target.value}) } className="nav-search" type="text" />
        </div>
    </div>
    <div className="left-side-div">

        <h1 className="left-side-icon">
            <IoIosNotificationsOutline />
        </h1>
        <NavLink to="./Login" state={{from:location}} className="navbar-links-button">
        <h1 className="left-side-icon">
            <CgProfile />
        </h1>
        </NavLink>

        <div> {isLoggedIn ? (<button className="login-button" onClick={()=> {
                setIsLoggedIn((isLoggedIn) => !isLoggedIn);
                navigate("/");
                toast.success("Logout Succesfully")}}>

                Logout
            </button>):( <NavLink style={{color:"black"}} to="./Login" state={{from:location}}>  <button className="login-button" >
                Login
            </button> </NavLink>) } </div>













    </div>

</div>

)
}
export {Navbar}