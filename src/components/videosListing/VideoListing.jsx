import React from 'react'
import "../videosListing/VideoListing.css"
import { SideBar } from "../SideBar/SideBar"
import { VideoStore } from '../videoStore/videoStore'

function VideoListing() {
  return (
    <div>
        <div className="video-listing-div">
            <div className="sideBar-div"><SideBar  /></div>
            <div className="videoStore-div"><VideoStore/></div>
            
            
        </div>

    </div>
  )
}

export  {VideoListing}