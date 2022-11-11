import React from 'react'
import "../History/History.css"
import { useHistory } from '../../context/HistoryContext'
import { GoVerified } from 'react-icons/go';
import { AiFillDelete} from 'react-icons/ai';


import { Link } from 'react-router-dom';


function History() {
  
  const { HistoryState , HistoryDispatch} = useHistory()


  const { HistoryState : { History }} = useHistory()
  return (
    <div>
      <div className='history-video-div'> { History.map((video)=>(
        <div className='history-video-div2'> 
          <div>
          <Link  className='history-video-image' onClick={()=> HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,})}  to={`/VideoDetail/${video._id}`}><img   className='history-video-image' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
          </div>


          <div className='history-video-content'>
          <p className='video-description'  >{video.description}</p>
          <small>{video.title} <span><GoVerified /></span></small>
          <div ><small>{`${video.views}views `}    /   {video.date}</small></div>
          <div onClick={()=> HistoryDispatch({type: "REMOVE_FROM_HISTORY",payload: video,})}className='delete-icon'> <AiFillDelete /> </div>



             </div>
             
          
          
          </div>
          

      )) } 

      </div>
     
    </div>
  )
}

export { History}