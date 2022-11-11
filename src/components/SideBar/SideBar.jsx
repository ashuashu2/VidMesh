import React from "react"
import "../SideBar/SideBar.css"
import { AiFillHome ,AiFillLike} from 'react-icons/ai';
import { MdExplore} from 'react-icons/md';
import { BsFillStopwatchFill} from 'react-icons/bs';
import { CgPlayListAdd } from 'react-icons/cg';
import { RiChatHistoryFill} from 'react-icons/ri';
import { MdWatchLater } from 'react-icons/md';
import { Link } from "react-router-dom";





function SideBar() {

return (
<div className="side-icon-div">
  <Link className="side-bar-links" to="/">
  <div>
    <h3 className="side-icon">
      <AiFillHome />
    </h3>
    <h6 className="side-icon-text">Home </h6>

  </div>
  </Link>





  <Link className="side-bar-links" to="/VideoListing">

  <div>
    <h3 className="side-icon">
      <MdExplore />
    </h3>
    <h6 className="side-icon-text">Explore</h6>

  </div>
  </Link>





  <Link className="side-bar-links" to="/WatchLater">
  <div>
    <h3 className="side-icon">
      <MdWatchLater />
    </h3>
    <h6 className="side-icon-text side-icon-text2">WatchLater</h6>


  </div>
  </Link>







  <div>
    <h3 className="side-icon">
      <CgPlayListAdd />
    </h3>
    <h6 className="side-icon-text">PlayLists</h6>

  </div>




  <div>
    <h3 className="side-icon">
      <AiFillLike />
    </h3>
    <h6 className="side-icon-text">Likes</h6>


  </div>

  <div>
    <h5 className="side-icon">
      <RiChatHistoryFill />
    </h5>

    <h6 className="side-icon-text">History</h6>

  </div>


</div>
)
}

export {SideBar}