import React from 'react'
import { GoVerified } from 'react-icons/go';

import "../videoStore/videoStore.css"
import { useVideos } from "../../context/videosContext"
import { Link } from 'react-router-dom';
function VideoStore() {
  const {videos} = useVideos()
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
        videos.map((video)=>(
          <div className='content-div' >
            <Link to={`/VideoDetail/${video._id}`}><img  className='thumbnail-pic' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
        
        
        <div className="content2-div">
          <p className='video-description'>{video.description}</p>
          <div className='content3-div'>
            
            <small>{video.title} <span><GoVerified /></span></small>
            <div><small>{`${video.views}views `}    /   {video.date}</small></div>
            </div>
            
            
            </div>
        
            

          
          </div>
          
        ))
      }

    </div>
    
    
    

    </div>
  )
}

export  {VideoStore}