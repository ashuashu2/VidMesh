import React from 'react'
import { GoVerified } from 'react-icons/go';

import "../videoStore/videoStore.css"
import { useVideos } from "../../context/videosContext"
function VideoStore() {
  const {home} = useVideos()
  return (
  <div>

    <div className="header-button-div"> 
      <div className='left-side-buttons-div'>
        <button className='header-buttons'>All</button>
        <button className='header-buttons'>Coding</button>
        <button className='header-buttons'>Crypto</button>
        <button className='header-buttons'>Finance</button>
        <button className='header-buttons'>Comedy</button>


      </div>


      <div className='right-side-buttons-div'>
      <button className='header-buttons'>Latest first</button>
      <button className='header-buttons'>Oldest first</button>


      </div>


    </div>


    <div className='videos-container'>


      {
        home.map((video)=>(
          <div className='content-div' >
        
        <img  className='thumbnail-pic' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} />
        <p>{video.description}</p>
            <small>{video.title}<GoVerified /></small>
            <div><small>{video.views}  /   {video.date}</small></div>
            

          
          </div>
          
        ))
      }

    </div>
    
    
    

    </div>
  )
}

export  {VideoStore}