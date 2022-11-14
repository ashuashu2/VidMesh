import React from 'react'
import "../watchlater/WatchLater.css"
import { useWatchLater } from '../../context/WatchLaterContext'
import { GoVerified } from 'react-icons/go';
import { AiFillDelete} from 'react-icons/ai';


import { Link } from 'react-router-dom';
import { useHistory } from '../../context/HistoryContext';

function WatchLater() {
  
  const { WatchLaterState , WatchLaterDispatch} = useWatchLater()
  const {HistoryDispatch} = useHistory()


  const { WatchLaterState : { WatchLater }} = useWatchLater()
  return (
    <div>
      <div> Showing Results: <small>{WatchLater.length}</small> </div>

      <div className='WatchLater-video-div'> { WatchLater.map((video)=>(
        <div className='WatchLater-video-div2'> 
          <div>
          <Link  className='WatchLater-video-image' onClick={()=> HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,})}  to={`/VideoDetail/${video._id}`}><img   className='WatchLater-video-image' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
          </div>


          <div className='WatchLater-video-content'>
          <p className='video-description'  >{video.description}</p>
          <small>{video.title} <span><GoVerified /></span></small>
          <div ><small>{`${video.views}views `}    /   {video.date}</small></div>
          <div onClick={()=> WatchLaterDispatch({type: "REMOVE_FROM_WATCHLATER",payload: video,})}className='delete-icon'> <AiFillDelete /> </div>



             </div>
             
          
          
          </div>
          

      )) } 

      </div>
     
    </div>
  )
}

export { WatchLater}