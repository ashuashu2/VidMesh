import React from 'react'
import "../videosListing/VideoListing.css"
import { VideoStore } from '../videoStore/videoStore'

function VideoListing() {
  return (
    <div>
        <div className="video-listing-div">
            <div className="videoStore-div"><VideoStore/></div>
            
            
        </div>

    </div>
  )
}

export  {VideoListing}