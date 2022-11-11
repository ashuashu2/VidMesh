import React from 'react'
import "../Likes/Likes.css"
import { useLikes } from '../../context/LikesContext'
import { useHistory } from '../../context/HistoryContext'
import { GoVerified } from 'react-icons/go';
import { AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Likes( {_id,
  views,
  date,
  title,
  src,
  description} ) {
  

  const { LikesState : { Likes }} = useLikes()
  const {LikesDispatch} = useLikes()
  const {  HistoryDispatch} = useHistory()


  return (
    
    <div>
    <div className='Likes-video-div'> { Likes.map((video)=>(
      <div className='Likes-video-div2'> 
        <div>
        <Link  className='Likes-video-image' onClick={()=> HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,})}  to={`/VideoDetail/${video._id}`}><img   className='Likes-video-image' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
        </div>


        <div className='Likes-video-content'>
        <p className='video-description'  >{video.description}</p>
        <small>{video.title} <span><GoVerified /></span></small>
        <div ><small>{`${video.views}views `}    /   {video.date}</small></div>
        <div onClick={()=> LikesDispatch({type: "REMOVE_FROM_LIKES",payload: video,})} className='delete-icon'> <AiFillDelete /> </div>



           </div>
           
        
        
        </div>
        

    )) } 

    </div>
   
  </div>
)
}

export { Likes}