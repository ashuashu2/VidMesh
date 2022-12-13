import React from "react"
import "../SideBar/SideBar.css"
import { AiFillHome ,AiFillLike} from 'react-icons/ai';
import { MdExplore} from 'react-icons/md';
import { BsFillStopwatchFill} from 'react-icons/bs';
import { CgPlayListAdd } from 'react-icons/cg';
import { RiChatHistoryFill} from 'react-icons/ri';
import { MdWatchLater } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useHamburger } from "../../context/HamburgerContext";



function SideBar() {
  const {isMobile } = useHamburger()
 




return (
<div className=  {isMobile ?  "side-icon-div" : "side-iconss"} >
  
  <Link className="side-bar-links" to="/">
  <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <AiFillHome />
    </h3>
    <h6 className="side-icon-text">Home </h6>

  </div>
  </Link>





  <Link className="side-bar-links" to="/VideoListing">

  <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <MdExplore />
    </h3>
    <h6 className="side-icon-text">Explore</h6>

  </div>
  </Link>





  <Link className="side-bar-links" to="/WatchLater">
  <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <MdWatchLater />
    </h3>
    <h6 className="side-icon-text side-icon-text2">WatchLater</h6>
  </div>
  </Link>



  <Link className="side-bar-links" to="/PlayList">
  <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <CgPlayListAdd />
    </h3>
    <h6 className="side-icon-text">PlayLists</h6>

  </div>
  </Link>

  <Link className="side-bar-links" to="/Likes">
  <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <AiFillLike />
    </h3>
    <h6 className="side-icon-text">Likes</h6>


  </div>
  
  </Link>



<Link className="side-bar-links" to="/History">
   <div className="side-bar-icons-div">
    <h3 className="side-icon">
      <RiChatHistoryFill />
    </h3>

    <h6 className="side-icon-text">History</h6>

  </div>

</Link>


  




</div>
)
}

export {SideBar}